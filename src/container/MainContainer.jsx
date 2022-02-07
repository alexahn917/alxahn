import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import {useState} from 'react';
import Main from '../screens/Main';
import Highlights from '../screens/Highlights';
import Work from '../screens/Work';

const FLIPP_THRESHOLD = 130;

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function onDragEnd(rotateX, rotateY, onDragEndCallback) {
  if ((Math.abs(rotateX.get()) > FLIPP_THRESHOLD) || (Math.abs(rotateY.get()) > FLIPP_THRESHOLD)) {
    onDragEndCallback();
  }
}

function MainContainer(props) {
  const {classes} = props;
  const [screenIndex, setScreenIndex] = useState(0);

  return (
    <div className={classes.container}>
      <Main isVisible={screenIndex === 0} onDragEnd={onDragEnd} onDragEndCallback={() => setScreenIndex(1)}/>
      <Highlights isVisible={screenIndex === 1} onDragEnd={onDragEnd} onDragEndCallback={() => setScreenIndex(2)}/>
      <Work isVisible={screenIndex === 2} onDragEnd={onDragEnd} onDragEndCallback={() => setScreenIndex(0)}/>
    </div>
  );
}

MainContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MainContainer);
