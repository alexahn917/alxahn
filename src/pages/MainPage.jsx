import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import NameCard from '../components/NameCard';
import {Row} from 'antd';

const styles = theme => ({
  container: {
    backgroundColor: '#1f6bb2cc',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  component: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
  },
});

class MainPage extends React.Component {
  render() {
    const {classes} = this.props;
    return (
        <div className={classes.container}>
          <Row className={classes.component}>
            <NameCard/>
          </Row>
        </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MainPage);
