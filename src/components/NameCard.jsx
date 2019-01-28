import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import NameCardTags from './NameCardTags';
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
    justifyContent: 'space-evenly',
  },
  leftContent: {
    textAlign: 'left',
  },
  rightContent: {
    textAlign: 'right',
  },
});

class NameCard extends React.Component {
  state = {
    tagIndex: 1
  };

  onChangeTag = (idx) => (e) => {
    this.setState({
      tagIndex: idx,
    });
  };

  render() {
    const {classes} = this.props;
    const {tagIndex} = this.state;
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
            <NameCardTags tagIndex={tagIndex} onChangeTag={this.onChangeTag}/>
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
