import jwt from "jsonwebtoken"
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
    const { userToken } = req.cookies;

    if (!userToken) {
        return next(new ApiError(401, "Please login to access this resource"))
    }

    const decodedData = jwt.verify(userToken, process.env.JWT_SECRET);
    if (!decodedData || !decodedData._id) {
        return next(new ApiError(401, "Invalid token"));
    }

    req.user = await User.findById(decodedData._id);
    if (!req.user) {
        return next(new ApiError(404, "User not found"));
    }

    next();
})