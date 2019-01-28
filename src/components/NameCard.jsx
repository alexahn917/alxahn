import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import { Button } from 'antd';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import profile from '../data/profile';

const styles = theme => ({
  nameCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '400px',
    minWidth: '800px',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  leftContent: {
    textAlign: 'left',
    // marginLeft: theme.spacing.unit * 8,
  },
  rightContent: {
    textAlign: 'right',
    // marginRight: theme.spacing.unit * 8,
  },
  noLineBtn: {
    boxShadow: '0 0px 0 rgba(0, 0, 0, 0.0)',
    borderColor: 'white',
  },
  footer: {
    marginRight: -theme.spacing.unit * 1,
  },
});

class NameCard extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.nameCard} elevation={20}>
        <div className={classes.cardContent}>
          <div className={classes.leftContent}>
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
          <div className={classes.rightContent}>
            <p>Work</p>
            <p>Timeline</p>
            <p>Portfolio</p>
            <div className={classes.footer}>
              {profile.facebook ? <Button className={classes.noLineBtn} type="circle" icon="facebook" href={profile.facebook}/> : null}
              {profile.instagram ? <Button className={classes.noLineBtn} type="circle" icon="instagram" href={profile.instagram}/> : null}
            </div>
          </div>
        </div>
      </Paper>
    )
  }
}

NameCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(NameCard);
