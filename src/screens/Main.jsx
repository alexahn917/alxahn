import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Profile from '../components/Profile';
import Categories from '../components/Categories';
import Paper from '@material-ui/core/Paper';
import {motion,useMotionValue, useTransform} from "framer-motion";

const FLIPP_THRESHOLD = 150;

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
    borderRadius: 20,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    padding: '40px',
  },
});

function Main(props) {
  const {classes, isVisible, onDragEnd, setFlipped} = props;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 4, 100], [300, 3, -100]);
  const rotateY = useTransform(x, [-100, 4, 100], [-300, 3, 100]);

  return (
    <div style={{perspective: 10000,  opacity: isVisible ? 1 : 0, transition: 'opacity .5s ease-in-out'}}>
      <motion.div 
        style={{x, y, rotateX, rotateY}}
        drag 
        dragElastic={0.13} 
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0}} whileTap={{cursor: "grabbing"}} 
        onDragEnd={() => onDragEnd(rotateX, rotateY, setFlipped)}
      >
        <div style={{position: 'relative', top: -25, right: -5, fontSize: 20, transform: "rotate(-2deg)"}}>
        flip it 🤏
      </div>
        <Paper className={classes.card} elevation={20}>
          <div className={classes.content}>
            <Profile/>
            <Categories />
          </div>
        </Paper>
      </motion.div>
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  setFlipped: PropTypes.func.isRequired,
};

export default withStyles(styles, {withTheme: true})(Main);
