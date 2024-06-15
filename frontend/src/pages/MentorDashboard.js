import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

const MentorDashboard = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Welcome, Mentor
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/get-students')}>
        Get Students
      </Button>
      <Button variant="contained" color="secondary" onClick={() => navigate('/lagging-students')}>
        Lagging Students
      </Button>
      <Button variant="contained" color="default" onClick={() => navigate('/update-marks')}>
        Update Marks
      </Button>
    </Container>
  );
};

export default MentorDashboard;
