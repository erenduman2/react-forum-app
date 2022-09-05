import { Button, TextField, Typography } from '@mui/material';
import React from 'react'
import styles from "../styles.module.css";
import { useUser } from "../../context/UserContext";
import { useState, useEffect } from 'react';

function Login() {

  const { setIsLoggedIn, userInfo, setLoggedInUser } = useUser();
  const [tmpUser, setTmpUser] = useState();
  const [tmpPassword, setTmpPassword] = useState();
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
      <form onSubmit={submitHandler}>
        <TextField sx={{ marginLeft: 105, marginTop: 3 }} value={tmpUser} onChange={changeUserHandler} id="eren" label="username" variant="outlined"></TextField>
        <TextField sx={{ marginLeft: 105, marginTop: 3 }} value={tmpPassword} onChange={changePassHandler} label="password" variant="outlined" type="password"></TextField>
        <br /><br /><br />
        <Button type='submit' onClick={() => { setLogin(true); }} sx={{ marginLeft: 114 }} color='warning' variant="contained">Login</Button>
      </form>
      {
        login ? wrongInfo ? <div className={styles.usernameInfo} >şifre ya da kullanıcı adı hatalı</div> : <div className={styles.username} >giriş başarılı</div> : <div></div>
      }

    </div>
  )
}

export default Login
