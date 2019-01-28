import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';

const styles = theme => ({
  Portfolio: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '500px',
    minWidth: '500px',
    margin: '0 50px 50px 50px',
  },
});

class Portfolio extends React.Component {
  state = {
    tagIndex: 1
  };

  render() {
    const {classes} = this.props;
    return (
      <Zoom in={true} style={{ transitionDelay: '300ms'}}>
        <Paper className={classes.Portfolio} elevation={0}>
          <h1>
            Portfolio
          </h1>
        </Paper>
      </Zoom>
    )
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Portfolio);
