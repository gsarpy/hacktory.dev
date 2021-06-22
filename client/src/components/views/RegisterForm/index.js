import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid item>
        <h4>Register for free!</h4>
      </Grid>
      <Grid item>
        <TextField id="email" label="Email" />
      </Grid>
      <Grid item>
        <TextField id="username" label="Username" />
      </Grid>
      <Grid item>
        <TextField id="password" type="password" label="Password" />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          Sign Up!
        </Button>
      </Grid>
    </form>
  );
}
