import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import {PROFILE_INFO} from '../data/constants';

const styles = theme => ({
  content: {
    textAlign: 'left',
  },
  bottomContent: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const Profile = (props) => {
  const {classes} = props;
  return (
    <>
      <div className={classes.content}>
        <Typography variant="h4" gutterBottom style={{color: '#0050b3'}}>
          {PROFILE_INFO.name}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {PROFILE_INFO.profession}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <b>Email</b>: {PROFILE_INFO.email}
        </Typography>
        <Typography variant="subtitle1">
          <b>Mobile</b>: {PROFILE_INFO.phoneNumber}
        </Typography>
      </div>
    </>
  )
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Profile);
