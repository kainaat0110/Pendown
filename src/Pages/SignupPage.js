import React from 'react';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Auth.css';

const SignupPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        className="auth-box"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
        }}
      >
        <Typography component="h1" variant="h5" className="auth-title">
          Sign Up for PenDown
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Full Name"
          name="name"
          autoComplete="name"
          autoFocus
          className="auth-input"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          className="auth-input"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          className="auth-input"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          className="auth-button"
        >
          Sign Up
        </Button>
        <Typography variant="body2" className="auth-footer">
          Already have an account? <a href="/">Login</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignupPage;
