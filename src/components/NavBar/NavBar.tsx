import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import NavButtonsGroup from './NavButtonsGroup';

const NavBar: React.FC = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <NavButtonsGroup />
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
