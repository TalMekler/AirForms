import React from 'react';
import { Button } from '@mui/material';

interface CustomButtonProps {
    text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
    return (
        <Button variant="text"
            sx={{
                fontStyle: 'italic',
                color: 'black',
                minWidth: 'auto',
                borderRadius: 1,
                '&:hover': {
                    backgroundColor: '#A6E1FA',
                },
            }}>
            {text}
        </Button>
    );
};

export default CustomButton;
