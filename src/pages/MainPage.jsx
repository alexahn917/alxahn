import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import ProfileInfo from '../components/ProfileInfo';
import Categories from '../components/Categories';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    padding: '40px',
  },
});

class MainPage extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <Paper className={classes.card} elevation={20}>
          <div className={classes.content}>
            <ProfileInfo/>
            <Categories />
          </div>
        </Paper>
      </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MainPage);
