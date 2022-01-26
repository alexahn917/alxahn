import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Profile from '../components/Profile';
import Categories from '../components/Categories';
import Paper from '@material-ui/core/Paper';
import {motion,useMotionValue, useTransform} from "framer-motion";

const styles = theme => ({
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
  const {classes, isVisible, onDragEnd, onDragEndCallback} = props;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 4, 100], [300, 3, -100]);
  const rotateY = useTransform(x, [-100, 4, 100], [-300, 3, 100]);

  const opacity = isVisible ? 1 : 0;
  const zIndex = isVisible ? 100 : -100;

  return (
    <div style={{position: 'absolute', perspective: 10000,  opacity, zIndex, transition: 'opacity 1s ease-in-out'}}>
      <motion.div 
        style={{x, y, rotateX, rotateY}}
        drag 
        dragElastic={0.13} 
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0}} whileTap={{cursor: "grabbing"}} 
        onDragEnd={() => onDragEnd(rotateX, rotateY, onDragEndCallback)}
      >
        <Paper className={classes.card} elevation={20}>
          <div className={classes.content}>
            <Profile/>
            <Categories />
          </div>
        </Paper>
        <div style={{position: 'relative', top: 15, right: -200, fontSize: 20, transform: "rotate(-1deg)"}}>
          flip it 🤏
        </div>
      </motion.div>
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onDragEndCallback: PropTypes.func.isRequired,
};

export default withStyles(styles, {withTheme: true})(Main);
