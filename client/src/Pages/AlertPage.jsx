import React from 'react';
import { Box, Typography, Container, Paper, Alert, AlertTitle, Button, Divider } from '@mui/material';
import Map from '../components/Map';

const AlertPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Hero Section */}
      <Paper
        elevation={4}
        sx={{
          p: 4,
          background: 'linear-gradient(to right, #f44336, #e57373)',
          color: 'white',
          borderRadius: 3,
          mb: 5,
        }}
      >
        <Typography variant="h4" fontWeight="bold" align="center">
          Help Near Me 🚨
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mt: 1 }}>
          Discover nearby shelters during emergencies and stay safe.
        </Typography>
      </Paper>

      {/* Map Section */}
      <Box mb={4}>
        <Map />
      </Box>

      {/* Real-time Info */}
      <Typography variant="body2" color="gray" align="center" sx={{ mb: 2 }}>
        📡 Fetching real-time location and alert data...
      </Typography>

      {/* Alert Info Section */}
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          🔔 Alert Information
        </Typography>

        <Alert severity="warning" sx={{ mb: 2 }}>
          <AlertTitle>Evacuation Advisory</AlertTitle>
          Stay away from buildings and move to open areas.
        </Alert>

        <Alert severity="info" sx={{ mb: 2 }}>
          <AlertTitle>Emergency Services</AlertTitle>
          🚑 Medical help is being dispatched to critical areas.
        </Alert>

        <Alert severity="success">
          <AlertTitle>Map Tips</AlertTitle>
          📍 Tap on locations on the map above to view localized alerts.
        </Alert>
      </Paper>

      {/* CTA Section */}
      <Box textAlign="center">
        <Divider sx={{ my: 3 }} />
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ borderRadius: 2 }}
          href="/emergency"
        >
          View Emergency Contacts
        </Button>
      </Box>
    </Container>
  );
};

export default AlertPage;
