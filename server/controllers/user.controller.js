import { FRONTEND_URL } from "../constants.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import sendToken from "../utils/jwtTokens.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from 'crypto';

// Register user
const registerUser = asyncHandler(async (req, res, next) => {

    const { name, email, phone, password, addresses } = req.body;
    const existingUser = await User.findOne({
        $or: [{ email }, { phone }]
    });

    if (existingUser) {
        return next(new ApiError(300, "User already existed"))
    }

    const user = await User.create({
        name,
        email,
        phone,
        password,
        addresses
    })

    // const token = user.getJWTToken();
    // res.status(201).json(new ApiResponse(201, { user, token }, "User Created Successfully."))
    sendToken(user, 201, res, "User created successfully")
})

//login user
const loginUser = asyncHandler(async (req, res, next) => {
    const { identifier, password } = req.body;

    // cheking if user has given password and email both
    if (!identifier || !password) {
        return next(new ApiError(400, "Please enter email/phone and password"));
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
    const query = isEmail ? { email: identifier } : { phone: identifier };

    let user = await User.findOne(query).select("+password");

    if (!user) {
        return next(new ApiError(404, "User not found"))
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
        return next(new ApiError(401, "Invalid Email or Password"))
    }
    user = await User.findOne(query).select("-password");

    sendToken(user, 201, res, "User logged in successfully")
})

//logout user
const logoutUser = asyncHandler(async (req, res, next) => {
    res.cookie("userToken", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        secure: true
    });

    res.status(200).json(new ApiResponse(200, null, "User logged out successfully"))
})

//Forget password
const forgetPassword = asyncHandler(async (req, res, next) => {
    const { email } = req.body
    const user = await User.findOne({ email })

    if (!user) {
        return next(new ApiError(404, "User not found"))
    }

    // Get resetPasswordToken

    const resetToken = user.getResetPasswordToken()

    await user.save({ validateBeforeSave: false });


    // Frontend URL for password reset 
    const frontendResetURL = `${FRONTEND_URL}/reset/password/${resetToken}`;

    // Backend API URL 
    const apiResetURL = `${req.protocol}://${req.get("host")}/api/v1/user/password/reset/${resetToken}`


    const message = `
    <html>
    <body>
        <h2>Password Reset Request</h2>
        <p>You recently requested to reset your password for your RakshaX account. Click the link below to proceed:</p>
        
        <a href="${frontendResetURL}" style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">
            Reset Your Password
        </a>
        
        <p>This link will expire in 15 minutes for security reasons.</p>
        
        <p>If you didn't request a password reset, please ignore this email or contact support if you have questions.</p>
        
        <hr>
        <p style="color: #888; font-size: 12px;">
            If the button doesn't work, copy and paste this link into your browser:<br>
            ${frontendResetURL}
        </p>
    </body>
    </html>
`;
    try {
        await sendEmail({
            email: user.email,
            subject: `RakshaX Password Recovery`,
            text: `Your password reset link: ${frontendResetURL}`, // Plain text fallback
            html: message, // HTML version
        })

        res.status(200).json(new ApiResponse(200, null, `Email sent to ${user.email} successfully.`))

    } catch (error) {
        await User.updateOne(
            {
                _id: user._id
            },
            {
                $unset: {
                    resetPasswordToken: "",
                    resetPasswordExpire: ""
                }
            }
        );

        return next(new ApiError(500, "Error sending email. Please try again later."))
    }

})

// Reset password
const resetPassword = asyncHandler(async (req, res, next) => {

    const { token } = req.params
    const { password, confirmPassword } = req.body

    const resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex")

    let user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    })


    if (!user) {
        return next(new ApiError(400, "Reset Password Token is invalid or has been expired"))
    }

    if (password !== confirmPassword) {
        return next(new ApiError(400, "Password does not match"))
    }

    user.password = password
    await user.save()
    await User.updateOne(
        {
            _id: user._id
        },
        {
            $unset: {
                resetPasswordToken: "",
                resetPasswordExpire: ""
            }
        }
    );

    user = await User.findOne({ _id: user._id }).select("-password");
    sendToken(user, 200, res, "Password reset successfully");
})

// Get user details
const getUserDetails = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user?.id);
    res.status(200).json(new ApiResponse(200, user))

})

// Update password
const updatePassword = asyncHandler(async (req, res, next) => {

    let user = await User.findById(req.user._id).select("+password");

    const isPasswordMatched = await user.isPasswordCorrect(req.body.oldPassword)

    if (!isPasswordMatched) {
        return next(new ApiError(400, "Old Password is incorrect"))
    }

    if (req.body.newPassword != req.body.confirmPassword) {
        return next(new ApiError(400, "Password does not match"))
    }

    user.password = req.body.newPassword;
    await user.save()

    user = await User.findById(user._id).select("-password");

    res.status(200).json(new ApiResponse(200, user, "password changed successfully"))

})

// Update user profile
const updateProfile = asyncHandler(async (req, res, next) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return next(new ApiError(400, "Name and Email are required"));
    }

    const updateData = {
        name,
        email
    };

    const updatedUser = await User.findByIdAndUpdate(
        req.user?._id,
        { $set: updateData },
        {
            new: true,
            runValidators: true,
        }
    );

    if (!updatedUser) {
        return next(new ApiError(404, "User not found"));
    }

    res.status(200).json(
        new ApiResponse(200, null, "Changes saved successfully")
    );
});

export {
    registerUser,
    loginUser,
    logoutUser,
    forgetPassword,
    resetPassword,
    getUserDetails,
    updatePassword,
    updateProfile,
}