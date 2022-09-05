import { Button, TextField, Typography } from '@mui/material';
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
      <form onSubmit={submitHandler}>
        <TextField sx={{ marginLeft: 105, marginTop: 3 }} value={tmpUser} onChange={changeUserHandler} id="eren" label="username" variant="outlined"></TextField>
        <TextField sx={{ marginLeft: 105, marginTop: 3 }} value={tmpPassword} onChange={changePassHandler} label="password" variant="outlined" type="password"></TextField>
        <br /><br /><br />
        <Button type='submit' onClick={() => { setRegister(true) }} color='warning' variant="contained" sx={{ marginLeft: 112 }} >Register</Button>
      </form>
      {
        register ? invalidUserName ? <div className={styles.usernameInfo} >username is already taken.</div> : <div className={styles.username} >registered succesfully</div> : <div></div>
      }
    </div>
  )
}

export default Register
