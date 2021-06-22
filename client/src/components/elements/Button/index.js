import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonInput, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  buttonTypography: {
    fontSize: '1em',
  },
});

const Button = ({ handleClick }) => {
  const classes = useStyles();

  return (
    <ButtonInput
      classes={{
        root: classes.buttonTypography,
      }}
      onClick={handleClick}
    />
  );
};

Button.propTypes = {
  handleClick: PropTypes.node.isRequired,
};

export default Button;
