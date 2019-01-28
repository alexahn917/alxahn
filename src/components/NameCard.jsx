import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import NameCardTags from './NameCardTags';
import WorkExperiences from './WorkExperiences';
import Portfolio from './Portfolio';
import profile from '../data/profile';

const styles = theme => ({
  nameCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '650px',
    padding: '0 50px',
    margin: '20px',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '50px 0 50px 0',
  },
  leftContent: {
    textAlign: 'left',
  },
  rightContent: {
    textAlign: 'right',
  },
  bottomContent: {
    display: 'flex',
    justifyContent: 'center',
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

    const workExperiences = tagIndex === 2 ? <WorkExperiences/> : <div/>;
    const portfolio = tagIndex === 3 ? <Portfolio/> : <div/>;

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

        <div className={classes.bottomContent}>
          {workExperiences}
          {portfolio}
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
