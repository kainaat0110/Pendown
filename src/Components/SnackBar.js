import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SnackBar({ open, onClose, name }) {
    
  return (
    <>
      <Snackbar open={open} autoHideDuration={6000}  anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={onClose}>
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {name} name is saved successfully!
        </Alert>
      </Snackbar>
    </>
  )
}
