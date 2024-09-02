import { Container } from '@mui/material';
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function QuestionAns(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(0);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setCount(count + 1); // Increment count when button is pressed
    } else {
      setCount(count - 1); // Decrement count when button is unpressed
    }
  };

  const [Ansopen, AnssetOpen] = React.useState(false);

  const AnshandleClickOpen = () => {
    AnssetOpen(true);
  };
  const AnshandleClose = () => {
    AnssetOpen(false);
  };

  const containerStyle = {
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    fontSize: '20px',
    userSelect: 'none',
    transition: '100ms',
    transform: isChecked ? 'scale(1)' : 'scale(1.1)',
  };

  const inputStyle = {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    height: 0,
    width: 0,
  };

  const checkmarkStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    height: '2em',
    width: '2em',
    transition: '100ms',
    animation: isChecked ? 'like_effect 400ms ease' : 'dislike_effect 400ms ease',
  };

  const pathStyle = {
    strokeWidth: isChecked ? '0' : '15px',
    stroke: '#FFF',
    fill: isChecked ? '#FF5353' : 'none',
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const keyframes = `
    @keyframes like_effect {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes dislike_effect {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  `;

  return (
    <>
      <Container style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '2vh 2vw', display: "flex" }}>
        <Container>
          <h3>{props.ques}</h3>
          <p style={{ textAlign: "justify" }}>{props.ans}</p>
          <Button onClick={handleClickOpen('paper')}>Read other responses</Button>
          <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">Responses</DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
              >
                {[...new Array(50)]
                  .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
      Cras justo odio, dapibus ac facilisis in, egestas eget quam.
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                  )
                  .join('\n')}
              </DialogContentText>
            </DialogContent>
          </Dialog>
          <Button variant="outlined" onClick={AnshandleClickOpen}>
            Answer this question
          </Button>
          <BootstrapDialog
            onClose={AnshandleClose}
            aria-labelledby="customized-dialog-title"
            open={Ansopen}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Answer Box
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={AnshandleClose}
              sx={(theme) => ({
                position: 'absolute',
                right: 8,
                top: 8,
                color: theme.palette.grey[500],
              })}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <Box sx={{ width: 500, maxWidth: '100%', height: 150 }}>
                <TextField rows={5} fullWidth multiline label="Answer" id="fullWidth" />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={AnshandleClose}>
                Save changes
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </Container>
        
        <div>
          <label style={containerStyle}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              style={inputStyle}
            />
            <div style={checkmarkStyle}>
              <svg viewBox="0 0 300 300">
                <rect fill="none" height="200" width="200"></rect>
                <path
                  d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                  style={pathStyle}
                ></path>
              </svg>
            </div>
          </label>
          <p style={{ margin: 0, textAlign: 'center' }}>{count}</p> {/* Align count below the like button */}
          <style>{keyframes}</style>
        </div>
      </Container>
    </>
  )
}
