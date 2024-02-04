import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Form from './Form';
import { useState } from 'react';

export default function ADDCOMP({selectedbtn}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div style={{margin:"auto", textAlign:"center"}}>
        <Button variant="outlined"
        sx={{
          "&:hover": {
            bgcolor: "#d0d0d0",
            borderRadius: "15px",
            borderColor: "#138A5F",
            color: "#138A5F",
            fontWeight: "600"
          },
          color: "white",
          margin: "auto",
          marginTop: "10px",
          borderColor: "#138A5F",
          borderRadius: "15px",
          marginBottom: "20px",
          fontSize: "17px",
          width: "fit-content",
          height: "50px",
          cursor: "pointer",
          backgroundColor: "#138A5F",
        }}
        onClick={handleOpen}>Add {selectedbtn}</Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
          backdrop: {
          timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={{ position: 'absolute', top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width:"fit-content", overflow:"auto",height:"90vh" ,bgcolor: 'background.paper',borderRadius:"15px", padding:"10px"}}>
              <Typography id="transition-modal-title" variant="h5" component="h2" sx={{margin:"auto", textAlign:"center", marginTop:"10px", color:"#138a5f", padding:"10px", backgroundColor:"#d2d2d2", width:"fit-content", borderRadius:"10px"}}>
                Add { selectedbtn }
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2, display:"flex" }}>
                <Form selectedbtn={selectedbtn} />
              </Typography>
            </Box>
          </Fade>
        </Modal>
  
      </div>
    );
  } 