import React, { Component } from 'react'
import { Container, AppBar, Toolbar, IconButton, Typography, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


export class MainPage extends Component {
    render() {
        return (
            <div>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6">IT242 Most Wanted</Typography>
                        </Toolbar>

                    </AppBar>

                    <Grid container>
                        <Grid item xs={12}>
                            
                        </Grid>

                    </Grid>

            </div>
        )
    }
}

export default MainPage
