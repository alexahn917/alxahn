import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {motion,useMotionValue, useTransform} from "framer-motion";
import { PROJECTS } from '../data/constants';

const styles = theme => ({
  card: {
    display: 'flex',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '500px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  projects: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  project_icon_container: {
    display: 'flex',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '120px',
    height: '120px',
    borderRadius: '20px',
    "&:hover": {
      opacity: 0.5,
    },
  },
  project_icon_overlay: {
    fontColor: 'black',
    position: 'absolute',
    width: '120px',
    height: '120px',
    opacity: 0,
    transition: '.5s ease',
    padding: 5,
    "&:hover": {
      opacity: 1,
      zIndex: 10,
    },
  }
});

function Projects(props) {
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
            <Typography variant="h5" gutterBottom style={{color: '#0050b3'}}>
              Projects
            </Typography>
            <div className={classes.projects}>
              {
                PROJECTS.map((project) => {
                  return (
                    <a href={project.link} target="_blank" style={{color: 'black'}}>
                      <Paper className={classes.project_icon_container}>
                        <div className={classes.project_icon_overlay}>
                          {project.description}
                        </div>
                        <img src={project.image_src} alt={project.title} style={{maxWidth: '110px', maxHeight: '90px'}}/>
                      </Paper>
                    </a>
                  )
                })
              }
            </div>
          </div>
        </Paper>
      </motion.div>
    </div>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onDragEndCallback: PropTypes.func.isRequired,
};

export default withStyles(styles, {withTheme: true})(Projects);
