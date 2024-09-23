import React from 'react';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Auth.css';

const LoginPage = () => {
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
          Login to PenDown
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
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
          autoComplete="current-password"
          className="auth-input"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          className="auth-button"
        >
          Login
        </Button>
        <Typography variant="body2" className="auth-footer">
          Don't have an account? <a href="/signup">Sign up</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginPage;
