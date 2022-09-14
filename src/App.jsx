import React from 'react';
import { Typography, AppBar, Button, Box, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Stack } from '@mui/material';
import YardRoundedIcon from '@mui/icons-material/YardRounded';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import MyTable from './MyTable';
import Copyright from './Copyright';
import Paper from '@mui/material/Paper';
/*
https://mui.com/material-ui/customization/color/
https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=3F51B5&secondary.color=F44336
*/
const myTheme = createTheme({
    palette: {
        primary: {
            light: '#a6bfcc',
            main: '#778f9b',
            dark: '#4a626d',
            contrastText: '#fff',
        },
        secondary: {
            light: '#fff350',
            main: '#ffc107',
            dark: '#c79100',
            contrastText: '#000',
        },
    },
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const App = () => {

    return (
        <>
            <ThemeProvider theme={myTheme}>
                <CssBaseline />
                <AppBar position='sticky'>
                    <Toolbar>
                        <YardRoundedIcon sx={{ mr: 2 }} />
                        <Typography variant='h6'>
                            Hello World
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <div>
                        <Container maxWidth='md'>
                            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                                Hello World!
                            </Typography>
                            <Typography variant='h5' align='center' color='textSecondary' paragraph>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo natus nihil perspiciatis nobis provident corporis perferendis nam minima saepe voluptas, officiis quis sit. Nobis cum enim incidunt, rerum repellendus quia.
                            </Typography>
                            <div>
                                <Grid container spacing={2} justifyContent='center'>
                                    <Grid item>
                                        <Button variant='contained' color='primary'>
                                            Primary Button
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant='outlined' color='primary'>
                                            Secondary Button
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                            <Stack spacing={2}>
                                <Item color='sec'>
                                    <Typography variant='h6' align='center' color='textPrimary' gutterBottom>
                                        This is an example of a table component:
                                    </Typography>
                                    <MyTable />
                                </Item>
                                <Item>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </Item>
                                <Item>Item 3</Item>
                            </Stack>
                        </Container>
                    </div>
                </main>

                {/* Footer */}
                <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >
                        Something here to give the footer a purpose!
                    </Typography>
                    <Copyright />
                </Box>
                {/* End footer */}
            </ThemeProvider>
        </>
    );
}

export default App;