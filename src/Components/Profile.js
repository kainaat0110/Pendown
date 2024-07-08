import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import SnackBar from './SnackBar';

export default function Profile({ open, onClose }) {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [name, setName] = React.useState(() => {
    return localStorage.getItem('userName') || '';
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSnackbarOpen(true);
    localStorage.setItem('userName', name);
    onClose(name); 
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <React.Fragment>
      <SnackBar open={snackbarOpen} onClose={handleSnackbarClose} name = {name}/>
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Pick a Name for You!!</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="name"
            fullWidth
            value={name}
            onChange={handleChange}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
