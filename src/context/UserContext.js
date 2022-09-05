import { useState, createContext, useContext, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [username, setUsername] = useState([]);
  const [passwords, setPasswords] = useState([]);
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")) : []);
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")) ? JSON.parse(localStorage.getItem("isLoggedIn")) : false);
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem("loggedInUser") ? localStorage.getItem("loggedInUser") : "");

  const values = {
    username,
    setUsername,
    passwords,
    setPasswords,
    isLoggedIn,
    setIsLoggedIn,
    userInfo,
    setUserInfo,
    loggedInUser,
    setLoggedInUser,
  }

  return(
    <UserContext.Provider value={values}> {children} </UserContext.Provider>
  )
};

const useUser = () => useContext(UserContext);

export {UserProvider, useUser};