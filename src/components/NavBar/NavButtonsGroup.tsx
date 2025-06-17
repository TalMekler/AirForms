import React from 'react';
import { Box, Button } from '@mui/material';
import CustomButton from './CustomButton';

const NavButtonsGroup: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CustomButton text="דף הבית" />
            <CustomButton text="הטפסים שלי" />
            <CustomButton text="הקבוצות שלי" />

        </Box>
    );
};

export default NavButtonsGroup;
