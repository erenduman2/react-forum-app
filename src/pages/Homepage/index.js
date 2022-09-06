import { Box, Button, TextField } from '@mui/material';
import React from 'react'
import styles from "../styles.module.css";
import { useUser } from "../../context/UserContext";
import { useState, useEffect } from 'react';


function Homepage() {

  const { isLoggedIn, setIsLoggedIn, userInfo, setUserInfo, setLoggedInUser } = useUser();
  const [tmpUser, setTmpUser] = useState("");
  const [tmpPassword, setTmpPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [invalidUserName, setInvalidUserName] = useState(false);
  const [wrongInfo, setWrongInfo] = useState(false);

  useEffect(() => {
    console.log(login, register);
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();
    setInvalidUserName(false);
    setWrongInfo(false);
    //for login 
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
    // for register
    else {
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
      <h1 className={styles.title}>Hi, welcome to my React forum project.</h1>

      <p className={styles.paragraph}>This site stores the answers and questions in localstorage.</p>
      <p className={styles.paragraph}>  You can ask a question as a guest, but you cannot edit it later.</p>
      <br /><br /><br />
      {!isLoggedIn &&
        // <Box>
        //   <form onSubmit={submitHandler}>
        //     <TextField sx={{ marginLeft: 105, marginTop: 10 }} value={tmpUser} onChange={changeUserHandler} id="eren" label="username" variant="outlined"></TextField>
        //     <TextField sx={{ marginLeft: 105, marginTop: 3 }} value={tmpPassword} onChange={changePassHandler} label="password" variant="outlined" type="password"></TextField>
        //     <br /><br /><br />
        //     <Button type='submit' onClick={() => { setLogin(true); setRegister(false); }} sx={{ marginLeft: 105 }} color='warning' variant="contained">Login</Button>
        //     <Button type='submit' onClick={() => { setRegister(true); setLogin(false); }} color='warning' variant="outlined" sx={{ marginLeft: 5 }} >Register</Button>
        //   </form>
        // </Box>
        <Box className={styles.center}>
          <form onSubmit={submitHandler}>
            <TextField value={tmpUser} onChange={changeUserHandler} id="eren" label="username" variant="outlined"></TextField>
            <br /><br />
            <TextField value={tmpPassword} onChange={changePassHandler} label="password" variant="outlined" type="password"></TextField>
            <br /><br /><br />
            <Button type='submit' onClick={() => { setLogin(true); setRegister(false); }} color='warning' variant="contained">Login</Button>
            <Button type='submit' onClick={() => { setRegister(true); setLogin(false); }} color='warning' variant="outlined" sx={{ marginLeft: 5 }} >Register</Button>
          </form>
        </Box>
      }
      {
        register ? invalidUserName ? <div className={styles.usernameInfo} >username is already taken.</div> : <div></div> : <div></div>
      }
      {
        login ? wrongInfo ? <div className={styles.usernameInfo} >password or username is wrong.</div> : <div></div> : <div></div>
      }

    </div>
  )
}

export default Homepage
