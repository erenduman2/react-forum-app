import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'
import styles from "../styles.module.css";
import { useUser } from "../../context/UserContext";
import { useState, useEffect } from 'react';

function Login() {

  const { setIsLoggedIn, userInfo, setLoggedInUser } = useUser();
  const [tmpUser, setTmpUser] = useState("");
  const [tmpPassword, setTmpPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [wrongInfo, setWrongInfo] = useState(false);


  const submitHandler = (e) => {
    e.preventDefault();
    setWrongInfo(false);

    if (login) {
      const bool = userInfo.some((user) => {
        return user.username == tmpUser && user.password == tmpPassword;
      });
      if (bool) {
        setIsLoggedIn(true);
        setLoggedInUser(tmpUser);
      }
      else {
        setWrongInfo(true);
      }
      setTmpUser(""); setTmpPassword("");
    }
  }

  const changeUserHandler = (e) => {
    setTmpUser(e.target.value);
  }

  const changePassHandler = (e) => {
    setTmpPassword(e.target.value);
  }

  return (
    <div>
      <Typography sx={{ marginRight: 3, marginTop: 13, color: "brown" }} className={styles.title} variant="h3" gutterBottom>
        Login
      </Typography>
      <br /><br />
      <Box className={styles.center}>
          <form onSubmit={submitHandler}>
            <TextField value={tmpUser} onChange={changeUserHandler} id="eren" label="username" variant="outlined"></TextField>
            <br /><br />
            <TextField value={tmpPassword} onChange={changePassHandler} label="password" variant="outlined" type="password"></TextField>
            <br /><br /><br />
            <Button sx={{marginLeft: 8}} type='submit' onClick={() => { setLogin(true)}} color='warning' variant="contained">Login</Button>
          </form>
        </Box>
      {
        login ? wrongInfo ? <div className={styles.usernameInfo} >password or username is wrong.</div> : <div className={styles.username} >giriş başarılı</div> : <div></div>
      }

    </div>
  )
}

export default Login
