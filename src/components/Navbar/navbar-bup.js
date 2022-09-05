// import React from 'react'
// import {
//     Button,
//     Box
// } from '@mui/material/';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { Link } from "react-router-dom";
// import styles from "./styles.module.css";
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Comp from "../Navbar/comp";

// function Navbar() {

//     const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const [state, setState] = React.useState({
//         top: false,
//         left: false,
//         bottom: false,
//         right: false,
//     });

//     const toggleDrawer = (anchor, open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }

//         setState({ ...state, [anchor]: open });
//     };

//     const list = (anchor) => (
//         <Box
//             sx={{ height: 969, width: 250, backgroundColor: "rgb(188, 255, 191)" }}
//             role="presentation"
//             onClick={toggleDrawer(anchor, false)}
//             onKeyDown={toggleDrawer(anchor, false)}
//         >
//             <List>
//                 {['New Question', 'Question Edit'].map((text, index) => (
//                     <Link style={{ textDecoration: "none", color: "black" }} to={index == 0 ? "profile/new" : "profile/ques"}>
//                         <ListItem key={text} disablePadding>
//                             <ListItemButton>
//                                 <ListItemIcon>
//                                     {index % 2 === 0 ? <InboxIcon color='white' /> : <MailIcon />}
//                                 </ListItemIcon>
//                                 <ListItemText primary={text} />
//                             </ListItemButton>
//                         </ListItem>
//                     </Link>
//                 ))}
//             </List>
//             <Divider />
//             <List>
//                 {['Change Username', 'Trash', 'Spam'].map((text, index) => (
//                     <button style={{backgroundColor: "rgb(188, 255, 191)", borderWidth: 0}} onClick={handleClickOpen}> 
//                         <ListItem key={text} disablePadding>
//                             <ListItemButton>
//                                 <ListItemIcon>
//                                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                                 </ListItemIcon>
//                                 <ListItemText primary={text} />
//                             </ListItemButton>
//                         </ListItem>
//                     </button>
//                 ))}
//             </List>
//         </Box>
//     );

//     return (
//         <div>
//             <Box className={styles.nav}>
//                 <div className={styles.left}>
//                     <Link className="link" to="/dashboard" >
//                         <Button sx={{ marginRight: 7 }} color='warning' variant="contained">Ana Sayfa</Button>
//                     </Link>
//                     <Link className="link" to="/forum" >
//                         <Button color='warning' variant="contained">Forum</Button>
//                     </Link>
//                 </div>
//                 <div className={styles.right} >
//                     {/* <Link className="link" to="/profile" > */}
//                     {/* <Button mt="50" color='warning' variant="contained">Profil</Button> */}
//                     <React.Fragment key={'right'}>
//                         <Button color='warning' variant="contained" onClick={toggleDrawer('right', true)}>{'Settings'}</Button>
//                         <Drawer
//                             anchor={'right'}
//                             open={state['right']}
//                             onClose={toggleDrawer('right', false)}
//                         >
//                             {list('right')}
//                         </Drawer>
//                     </React.Fragment>
//                     {/* </Link> */}

//                 </div>
//             </Box>

//             <Dialog open={open} onClose={handleClose}>
//                 <DialogTitle>Subscribe</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         To subscribe to this website, please enter your email address here. We
//                         will send updates occasionally.
//                     </DialogContentText>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="name"
//                         label="Email Address"
//                         type="email"
//                         fullWidth
//                         variant="standard"
//                     />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClose}>Cancel</Button>
//                     <Button onClick={handleClose}>Subscribe</Button>
//                 </DialogActions>
//             </Dialog>


//         </div>
//     )

// }

// export default Navbar