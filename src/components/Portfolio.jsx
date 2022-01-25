import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Zoom from '@material-ui/core/Zoom';

const styles = theme => ({
});

class Portfolio extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Zoom in={true} style={{ transitionDelay: '300ms'}}>
          <h1>
            Portfolio
          </h1>
        </Zoom>
      </div>
    )
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Portfolio);
