import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import {useState} from 'react';
import MainPage from '../screens/MainPage';

const FLIPP_THRESHOLD = 150;

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function onDragEnd(rotateX, rotateY, setFlipped) {
  if ((Math.abs(rotateX.get()) > FLIPP_THRESHOLD) || (Math.abs(rotateY.get()) > FLIPP_THRESHOLD)) {
    setFlipped(true);
  }
}

function MainPageContainer(props) {
  const {classes} = props;
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={classes.container}>
      <MainPage isVisible={!flipped} onDragEnd={onDragEnd} setFlipped={setFlipped}/>
    </div>
  );
}

MainPageContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MainPageContainer);
