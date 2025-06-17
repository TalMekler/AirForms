import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import NavButtonsGroup from './NavButtonsGroup';

const NavBar: React.FC = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <NavButtonsGroup />
                <Typography variant="h6" fontWeight="bold" color="black">
                    Air Forms
                </Typography>

            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
