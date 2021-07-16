import React from 'react';
import { Paper } from '@material-ui/core';
import theme from '../../styles/theme';

const Register = () => {
  const colors = theme.palette.primary;
  return (
    <Paper style={{ background: colors.dark, color: colors.light }} color={'primary.light'}>
      <h1>Register.</h1>
    </Paper>
  );
}

export default Register;
