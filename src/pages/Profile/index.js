import React from 'react'
import { Link } from "react-router-dom";
import styles from "../styles.module.css";
import { useUser } from "../../context/UserContext";
import { useQuestion } from "../../context/QuestionContext";
import {
  Box,
  Typography,
} from '@mui/material/';
import PasswordDialog from "../../components/Dialogs/PasswordDialog";
import UsernameDialog from "../../components/Dialogs/UsernameDialog";


function Profile() {
  const { isLoggedIn, setIsLoggedIn, userInfo, setUserInfo, loggedInUser, setLoggedInUser } = useUser();
  const { questions } = useQuestion();

  const [openPassword, setOpenPassword] = React.useState(false);
  const [openUsername, setOpenUsername] = React.useState(false);

  const handleClickOpenForUsername = () => {
    setOpenUsername(true);
  };

  const handleClickOpenForPassword = () => {
    setOpenPassword(true);
  };

  let questionCount = 0;

  questions.map((item, index) => {
    if (item.user == loggedInUser) {
      questionCount++;
    }
  });

  return (
    <div className={styles.profile}>
      <Box sx={{ marginLeft: 10, backgroundColor: "grey" }}>
        <Typography variant="h6" gutterBottom>
          <Box sx={{ border: 2, borderRadius: 2, width: 220, paddingLeft: 5 }} >
            Your Username: <i style={{ color: "rgb(145, 53, 0)" }}>{loggedInUser}</i>
          </Box>
        </Typography>
        <br /><br /><br />
        <Typography variant="h6" gutterBottom>
          <Box sx={{ border: 2, borderRadius: 2, width: 220, paddingLeft: 5 }} >
            Question Count: {questionCount}
          </Box>
        </Typography>
        <br /><br /><br />
        <Typography variant="h6" gutterBottom>
          <Box sx={{ border: 2, borderRadius: 2, width: 220, paddingLeft: 5 }} >
            <p className={styles.change} onClick={handleClickOpenForPassword}>
              Change Password
            </p>
          </Box>
        </Typography>
        <br /><br /><br />
        <Typography variant="h6" gutterBottom>
          <Box sx={{ border: 2, borderRadius: 2, width: 220, paddingLeft: 5 }} >
            <p className={styles.change} onClick={handleClickOpenForUsername}>
              Change Username
            </p>
          </Box>
        </Typography>
        <br /><br /><br />
        <Typography variant="h6" gutterBottom>
          <Box sx={{ border: 2, borderRadius: 2, width: 220, paddingLeft: 5 }} >
            <Link style={{ textDecoration: "none", color: "black" }} to="/new">
              <p className={styles.change} >New Question</p>
            </Link>
          </Box>
        </Typography>
        <br /><br /><br />
        <Typography variant="h6" gutterBottom>
          <Box sx={{ border: 2, borderRadius: 2, width: 220, paddingLeft: 5 }} >
            <Link style={{ textDecoration: "none", color: "black" }} to="/ques-edit">
              <p className={styles.change} >Question Edit</p>
            </Link>
          </Box>
        </Typography>
        <br /><br /><br />
        <Typography variant="h6" gutterBottom>
          <Box sx={{ border: 2, borderRadius: 2, width: 220, paddingLeft: 5, borderColor: "red" }} >
            <p onClick={() => setIsLoggedIn(false)} style={{ color: "rgb(173, 0, 0)" }} className={styles.change} >Logout</p>
          </Box>
        </Typography>
      </Box>
      <PasswordDialog openPassword={openPassword} setOpenPassword={setOpenPassword} />
      <UsernameDialog openUsername={openUsername} setOpenUsername={setOpenUsername} />
    </div>
  )
}

export default Profile
