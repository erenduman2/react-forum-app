import React from 'react'
import {
  Button,
  Box
} from '@mui/material/';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useUser } from "../../../context/UserContext";
import { useQuestion } from "../../../context/QuestionContext";
import { useState } from 'react';

function UsernameDialog({ openUsername, setOpenUsername }) {
  const { userInfo, setUserInfo, loggedInUser, setLoggedInUser } = useUser();
  const { questions, setQuestions } = useQuestion();

  const [password, setPassword] = useState();
  const [newUsername, setNewUsername] = useState();
  const [wrongPassword, setWrongPassword] = useState(false);
  const [invalidUsername, setInvalidUsername] = useState(false);


  const handleClose = () => {
    setOpenUsername(false);
  };

  const isInvalid = (username) => {
    userInfo.map((item, key) => {
      if (item.username == username) {
        alert("eşit")
        setInvalidUsername(true);
      }
    })
  };

  const changeQuestionUser = (oldUsername, newUsername) => {
    const tmpQuestions = [...questions];
    questions.map((item, key) => {
      if(item.user == oldUsername){
        tmpQuestions[key].user = newUsername;
      }
    });
    setQuestions(tmpQuestions);
  };

  const handleChange = () => {
    setInvalidUsername(false);
    if (userInfo.every((item) => {
      return item.username != newUsername;
    })) {
      const tmpUserInfo = [...userInfo];
      userInfo.map((item, key) => {
        if (item.username == loggedInUser) {
          if (tmpUserInfo[key].password == password) {
            changeQuestionUser(tmpUserInfo[key].username, newUsername);
            tmpUserInfo[key].username = newUsername;
            setLoggedInUser(newUsername);
            setUserInfo([...tmpUserInfo]);
            handleClose();
            setPassword("");
            setNewUsername("");
          }
          else {
            setWrongPassword(true);
            // setPassword("");
            // setNewUsername("");
          }
        }
      });
    }
    else {
      setInvalidUsername(true);
      setWrongPassword(false);
    }
  }
  return (
    <div>
      <Dialog open={openUsername} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "rgb(214, 243, 210)" }}>Change Username</DialogTitle>
        <DialogContent sx={{ backgroundColor: "rgb(214, 243, 210)" }}>
          {invalidUsername &&
            <DialogContentText sx={{ color: "red" }}>
              This username is already taken.
            </DialogContentText>
          }
          {wrongPassword &&
            <DialogContentText sx={{ color: "red" }}>
              Wrong Password!
            </DialogContentText>
          }
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Username"
            type="email"
            fullWidth
            variant="standard"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Password"
            type="email"
            fullWidth
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "rgb(214, 243, 210)" }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleChange}>Change</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default UsernameDialog
