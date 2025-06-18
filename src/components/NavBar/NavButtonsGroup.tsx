import { AppBar, Box, Stack, Toolbar } from '@mui/material';
import React from 'react';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CustomButton from './CustomButton';


const NavMenu: React.FC = () => {
    return (
        <AppBar position="static" elevation={0} color="transparent">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Stack direction="row" spacing={2}>
                    <CustomButton label="דף הבית" icon={<HomeOutlinedIcon />} selected />
                    <CustomButton label="ניהול קבוצות" icon={<GroupsOutlinedIcon sx={{ color: "#F4F4F4" }} />} />
                    <CustomButton label="ניהול טופס" icon={<EditNoteOutlinedIcon />} />
                    <CustomButton label="אזור אישי" icon={<PersonOutlineIcon />} />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Box sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Air Forms</Box>
                    <img src="/logo.png" alt="Logo" style={{ width: 40, height: 40 }} />
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default NavMenu;
