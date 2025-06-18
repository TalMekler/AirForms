import React from 'react';
import type { ReactElement } from 'react';
import { Box, Typography } from '@mui/material';

interface NavItemProps {
    label: string;
    icon: ReactElement;
    selected?: boolean;
}

const CustomButton: React.FC<NavItemProps> = ({ label, icon, selected = false }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                px: 2,
                py: 1,
                borderRadius: 3,
                boxShadow: selected ? 3 : 1,
                bgcolor: selected ? '#F0F7FF' : '#F9F9F9',
                color: 'black',
                cursor: 'pointer',
                minWidth: 120,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                    boxShadow: 3,
                    bgcolor: '#EDEDED',
                },
            }}
        >
            <Box
                sx={{
                    bgcolor: 'white',
                    borderRadius: '50%',
                    p: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {React.isValidElement(icon)
                    ? React.cloneElement(icon as React.ReactElement<any>, {
                        style: { color: selected ? '#1A73E8' : '#000', fontSize: '20px' },
                    })
                    : icon}
            </Box>
            <Typography fontWeight="medium" fontSize="0.9rem">
                {label}
            </Typography>
        </Box>
    );
};

export default CustomButton;
