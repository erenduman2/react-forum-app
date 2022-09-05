import React from 'react'
import {
    Button,
    Box,
    Grid,
    styled
} from '@mui/material/';
import { Link } from "react-router-dom";
import styles from "../styles.module.css";
import Sidebar from "../Sidebar/index";
import UserSidebar from "../UserSidebar/index";
import { useUser } from "../../context/UserContext";
import { brown } from '@mui/material/colors';

function Navbar() {
    const { isLoggedIn, loggedInUser } = useUser();

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(brown[700]),
        backgroundColor: brown[700],
        '&:hover': {
            backgroundColor: brown[700],
        },
    }));

    return (
        <div>
            <Box className={styles.nav}>
                <div className={styles.left}>
                    <Link className="link" to="/" >
                        <Button sx={{ marginRight: 7 }} color='warning' variant="contained">Ana Sayfa</Button>
                    </Link>
                    <Link className="link" to="/forum" >
                        <Button color='warning' variant="contained">Forum</Button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <Grid container spacing={0}>
                        {
                            <Link to="/new">
                                <ColorButton sx={{ marginRight: 4 }} variant="contained">New Question</ColorButton>
                            </Link>
                        }
                        {
                            !isLoggedIn &&
                            <Sidebar />
                        }
                        {
                            isLoggedIn &&
                            <UserSidebar />
                        }
                    </Grid>
                </div>
            </Box>
        </div>
    )

}

export default Navbar











