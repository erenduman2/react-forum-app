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
import { useState } from 'react';

function Sidebar() {
  const { isLoggedIn, userInfo, setUserInfo, loggedInUser } = useUser();


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

  const list = (anchor) => (
    <Box
      sx={{ height: 969, width: 250, backgroundColor: "rgb(188, 255, 191)" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['New Question'].map((text, index) => (
          <Link style={{ textDecoration: "none", color: "black" }} to={"new"}>
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
        {['Login', 'Register'].map((text, index) => (
          <Link style={{ textDecoration: "none", color: "black" }} to={index == 0 ? "login" : "register"}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>



    </Box>
  );
  return (
    <div>
      <div className={styles.right} >
        <React.Fragment key={'right'}>
          <Button color='warning' variant="contained" onClick={toggleDrawer('right', true)}>{'Options'}</Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      </div>

    </div>
  )
}

export default Sidebar