import React from 'react'
import {
  Button,
} from '@mui/material/';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useUser } from "../../../context/UserContext";
import { useState } from 'react';


function PasswordDialog({ openPassword, setOpenPassword }) {
  const { userInfo, setUserInfo, loggedInUser } = useUser();

  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [wrongPassword, setWrongPassword] = useState(false);

  const handleClose = () => {
    setOpenPassword(false);
  };

  const handleChange = () => {
    const tmpUserInfo = [...userInfo];
    userInfo.map((item, key) => {
      if (item.username === loggedInUser) {
        if (tmpUserInfo[key].password === oldPassword) {
          tmpUserInfo[key].password = newPassword;
          setWrongPassword(false);
          handleClose();
          setOldPassword("");
          setNewPassword("");
        }
        else {
          setWrongPassword(true);
          setOldPassword("");
          setNewPassword("");
        }
      }
    });
    setUserInfo([...tmpUserInfo]);
  };
  return (
    <div>
      <Dialog open={openPassword} onClose={handleClose}>
        <DialogTitle sx={{backgroundColor: "rgb(214, 243, 210)"}}>Change Password</DialogTitle>
        <DialogContent sx={{backgroundColor: "rgb(214, 243, 210)"}}>
          {wrongPassword && 
            <DialogContentText sx={{color: "red"}}>
              Former password is wrong!
            </DialogContentText>
          }
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Former Password"
            type="email"
            fullWidth
            variant="standard"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <TextField
            // autoFocus
            margin="dense"
            id="name"
            label="New Password"
            type="email"
            fullWidth
            variant="standard"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{backgroundColor: "rgb(214, 243, 210)"}}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleChange}>Change</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default PasswordDialog
