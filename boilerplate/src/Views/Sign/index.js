import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import FormSelector from './FormSelector';

class sign extends Component
{
    render()
    {
      return (
        <div id="login-page">
            <div className="background-darken">
                <Grid container className="center" justify="center">
                    <Grid item xs={6} lg={4} className="login login-text">
                        <div className="login-text-center">
                          <h1>BlaBlaBla</h1>
                            <h2>Les Bonbails</h2>
                            <p>Viens vendre toute ta merdes sur un projet en bois :D :D :D</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} className="login">
                        <FormSelector/>
                    </Grid>
                </Grid>
            </div>
        </div> 
      )
    }
  }