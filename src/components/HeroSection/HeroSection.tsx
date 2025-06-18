import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const HeroSection: React.FC = () => {
    return (
        <Box
            sx={{
                px: 4,
                py: 8,
                backgroundColor: 'white',
            }}
        >
            <Grid container spacing={50} alignItems="center">
                <Grid >
                    <Typography variant="h6" fontWeight="light" mb={1}>
                        לא צריך לחפש ..
                    </Typography>

                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        mb={3}
                        sx={{ fontFamily: 'inherit', lineHeight: 1.2 }}
                    >
                        הכל במקום אחד!
                    </Typography>

                    <Typography variant="body1" color="text.secondary" mb={4} sx={{ maxWidth: 400 }}>
                        הממשק הדיגיטלי החדש של הלל האוויר הוא קפיצת מדרגה בעולם הניהול והבקשות. כל הטפסים במקום אחד,
                        עם חווית שימוש פשוטה, נוחה וידידותית מאי פעם. פחות בירוקרטיה, יותר יעילות – הטכנולוגיה שמעצימה אתכם!
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ bgcolor: '#0D6BA8', fontWeight: 'bold', borderRadius: "16px", px: 4, py: 1.5 }}
                    >
                        צרו טופס חדש
                    </Button>
                </Grid>
                <Grid  >
                    <Box
                        component="img"
                        src="https://picsum.photos/200"
                        alt="Hero Illustration"
                        sx={{ width: '100%', maxWidth: 400, mx: 'auto', display: 'block' }}
                    />
                    <StarIcon
                        sx={{
                            position: 'absolute',
                            top: '25rem',
                            right: '15rem',
                            color: '#A6E1FA',
                            fontSize: 60,
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HeroSection;
