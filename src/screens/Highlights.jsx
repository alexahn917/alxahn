import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {motion,useMotionValue, useTransform} from "framer-motion";
import { HIGHLIGHTS } from '../data/constants';

const styles = theme => ({
  card: {
    display: 'flex',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '80%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  line: {

  },
  resume: {
    fontWeight: 500,
    paddingTop: 10,
  }
});

function Highlights(props) {
  const {classes, isVisible, onDragEnd, onDragEndCallback} = props;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 4, 100], [300, 3, -100]);
  const rotateY = useTransform(x, [-100, 4, 100], [-300, 3, 100]);

  const opacity = isVisible ? 1 : 0;
  const zIndex = isVisible ? 100 : -100;

  return (
    <div style={{position: 'absolute', perspective: 10000,  opacity, zIndex, transition: 'opacity 0.7s ease-in-out'}}>
      <motion.div 
        style={{x, y, rotateX, rotateY, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
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
            {
              HIGHLIGHTS.map((highlight) => {
                return (
                  <div className={classes.line}>
                    <Typography variant="subtitle1" gutterBottom>
                      {highlight}
                    </Typography>
                  </div>      
                )
              })
            }
            <a className={classes.resume} href="./files/resume.pdf" target="_blank"> <i class="fa fa-download"></i> Download Resume</a>
          </div>
        </Paper>
      </motion.div>
    </div>
  );
}

Highlights.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onDragEndCallback: PropTypes.func.isRequired,
};

export default withStyles(styles, {withTheme: true})(Highlights);
