import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import profile from '../data/profile';

const styles = theme => ({
  content: {
    textAlign: 'left',
  },
  bottomContent: {
    display: 'flex',
    justifyContent: 'center',
  },
});

class ProfileInfo extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <>
        <div className={classes.content}>
          <Typography variant="h4" gutterBottom style={{color: '#0050b3'}}>
            {profile.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {profile.profession}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <b>Email</b>: {profile.email}
          </Typography>
          <Typography variant="subtitle1">
            <b>Mobile</b>: {profile.phoneNumber}
          </Typography>
        </div>
      </>
    )
  }
}

ProfileInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(ProfileInfo);
