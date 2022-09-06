import React from 'react'
import {
  Button,
  Box
} from '@mui/material/';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";
import styles from "../styles.module.css";
import { useUser } from "../../context/UserContext";
import PasswordDialog from "../Dialogs/PasswordDialog";
import UsernameDialog from "../Dialogs/UsernameDialog";

function UserSidebar() {
  const { loggedInUser, setIsLoggedIn, isLoggedIn } = useUser();

  const [openPassword, setOpenPassword] = React.useState(false);
  const [openUsername, setOpenUsername] = React.useState(false);

  const handleClickOpenForUsername = () => {
    setOpenUsername(true);
  };

  const handleClickOpenForPassword = () => {
    setOpenPassword(true);
  };


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const clickHandler = () => {

  }

  const list = (anchor) => (
    <Box
      sx={{ height: 969, width: 250, backgroundColor: "rgb(188, 255, 191)" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Profile'].map((text, index) => (
          <Link key={index} style={{ textDecoration: "none", color: "black" }} to={"profile"}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon color='white' /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

      <Divider />

      <List>
        {['New Question', 'My Questions', 'Question Edit'].map((text, index) => (
          <Link key={index} style={{ textDecoration: "none", color: "black" }} to={index == 0 ? "new" : index == 1 ? "my-ques" : "ques-edit"}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon color='white' /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['Change Username', 'Change Password', 'Logout'].map((text, index) => (
          <button key={index} style={{ backgroundColor: "rgb(188, 255, 191)", borderWidth: 0 }} onClick={() => {
            if (index == 0) {
              handleClickOpenForUsername();
            }
            if (index == 1) {
              handleClickOpenForPassword();
            }
            if (index == 2) {
              setIsLoggedIn(false);
            }
          }}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </button>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <div className={styles.right} >
        <React.Fragment key={'right'}>
          <Button color='warning' variant="contained" onClick={toggleDrawer('right', true)}>{loggedInUser}</Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      </div>
      <PasswordDialog openPassword={openPassword} setOpenPassword={setOpenPassword} />
      <UsernameDialog openUsername={openUsername} setOpenUsername={setOpenUsername} />
    </div>
  )
}

export default UserSidebar
