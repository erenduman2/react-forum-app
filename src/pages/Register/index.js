import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'
import styles from "../styles.module.css";
import { useUser } from "../../context/UserContext";
import { useState, useEffect } from 'react';

function Register() {
  const { setIsLoggedIn, userInfo, setUserInfo, setLoggedInUser } = useUser();
  const [tmpUser, setTmpUser] = useState();
  const [tmpPassword, setTmpPassword] = useState();
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [invalidUserName, setInvalidUserName] = useState(false);

  useEffect(() => {
    console.log(login, register);
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();
    setInvalidUserName(false);

    if (register) {
      const bool = userInfo.some((item) => {
        return item.username == tmpUser;
      });
      if (bool) {
        setInvalidUserName(true);
      }
      else {
        setUserInfo([...userInfo, { username: tmpUser, password: tmpPassword }]);
        setIsLoggedIn(true);
        setLoggedInUser(tmpUser);
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
        Register
      </Typography>
      <br /><br />
      <Box className={styles.center}>
        <form onSubmit={submitHandler}>
          <TextField value={tmpUser} onChange={changeUserHandler} id="eren" label="username" variant="outlined"></TextField>
          <br /><br />
          <TextField value={tmpPassword} onChange={changePassHandler} label="password" variant="outlined" type="password"></TextField>
          <br /><br /><br />
          <Button sx={{marginLeft: 8}} type='submit' onClick={() => { setRegister(true) }} color='warning' variant="contained">Login</Button>
        </form>
      </Box>
      {
        register ? invalidUserName ? <div className={styles.usernameInfo} >username is already taken.</div> : <div className={styles.username} >registered succesfully</div> : <div></div>
      }
    </div>
  )
}

export default Register
