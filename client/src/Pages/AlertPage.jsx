import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

const AlertPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Hero Image Section */}
      <Paper
        elevation={3}
        sx={{
          overflow: 'hidden',
          borderRadius: 3,
        }}
      >
        <Box
          component="img"
          src="/0b81fdfb-49e6-41e1-a71f-caa19e276860.png" // Make sure it's in your public folder or served correctly
          alt="Interactive Map of Real-time Disaster Alerts"
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 3,
          }}
        />
      </Paper>

      {/* Title under image */}
      <Typography
        variant="h6"
        align="center"
        fontWeight="bold"
        sx={{ mt: 2 }}
      >
        Interactive Map of Real-time Disaster Alerts
      </Typography>

      {/* Alert Info Section */}
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ mt: 6 }}
      >
        Alert Information
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        ⚠️ Earthquake alert near XYZ region. <br />
        🔔 Stay away from buildings and move to open areas. <br />
        🚑 Emergency services are being dispatched. <br />
        📍 Tap on locations on the map above for localized alerts.
      </Typography>
    </Container>
  );
};

export default AlertPage;
