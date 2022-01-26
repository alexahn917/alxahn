import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {motion,useMotionValue, useTransform} from "framer-motion";


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
    flexDirection: 'column',
    padding: '40px',
  },
  line: {

  }
});

function Background(props) {
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
            <Typography variant="h5" gutterBottom style={{color: '#0050b3', marginBottom: 20}}>
              Highlights
            </Typography>
            <div className={classes.line}>
              <Typography variant="subtitle1" gutterBottom>
                Alex is a Software Engineer from Meta, working as an engineering lead on Instagram Ads Experiences team.
              </Typography>
            </div>
            <div className={classes.line}>
              <Typography variant="subtitle1" gutterBottom>
                Alex is a Full Stack Engineer with experiences on Web, Mobile, Server, and Gaming.
              </Typography>
            </div>
            <div className={classes.line}>
              <Typography variant="subtitle1" gutterBottom>
                Alex is currently leading a team of 6 engineers, overseeing Instagram ads product development and growth.
              </Typography>
            </div>
          </div>
        </Paper>
      </motion.div>
    </div>
  );
}

Background.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onDragEndCallback: PropTypes.func.isRequired,
};

export default withStyles(styles, {withTheme: true})(Background);
