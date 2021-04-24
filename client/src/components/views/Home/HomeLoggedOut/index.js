import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// IMPORT COMPONENTS
import Introduction from './components/Introduction';
import RegisterForm from '../../RegisterForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
}));

const HomeLoggedOut = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid 
        container 
        spacing={0} 
        align="center" 
        justify="center" 
        alignItems="center" 
      >
        <Grid item xs={6}>
          <Introduction />
        </Grid>
        <Grid item xs={5}>
          <RegisterForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeLoggedOut;