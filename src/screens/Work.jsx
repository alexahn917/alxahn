import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {motion,useMotionValue, useTransform} from "framer-motion";
import {WORK_EXPERIENCES} from '../data/constants';

const styles = theme => ({
  card: {
    display: 'flex',
    borderRadius: 20,
    maxWidth: '500px',
    minWidth: '400px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minWidth: 400,
    minHeight: 200,
    textAlign: 'left',
  },
  line: {

  }
});

function Work(props) {
  const {classes, isVisible, onDragEnd, onDragEndCallback} = props;
  const [idx, setIdx] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 4, 100], [300, 3, -100]);
  const rotateY = useTransform(x, [-100, 4, 100], [-300, 3, 100]);

  const opacity = isVisible ? 1 : 0;
  const zIndex = isVisible ? 100 : -100;

  const work = WORK_EXPERIENCES[idx];
  const callback = idx === WORK_EXPERIENCES.length - 1 ? () => {onDragEndCallback(); setIdx(0)} : () => setIdx(idx + 1);

  return (
    <div style={{position: 'absolute', perspective: 10000,  opacity, zIndex, transition: 'opacity 0.7s ease-in-out'}}>
      <motion.div 
        style={{x, y, rotateX, rotateY, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        drag
        dragElastic={0.13} 
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0}} whileTap={{cursor: "grabbing"}} 
        onDragEnd={() => onDragEnd(rotateX, rotateY, callback)}
      >
        <Paper className={classes.card} elevation={20}>
          <div className={classes.content}>
            <div>
              <img src={work.logo} style={{maxWidth: '75px', height: '50px', marginBottom: '5px'}} alt={work.title}/>
              <Typography variant="h5" gutterBottom style={{color: '#0050b3', marginBottom: 20}}>
                <b>{work.title}</b>
              </Typography>
            </div>
            <span className="timeline-item">
              <a href={work.link} style={{WorkImage: `url(${work.logo})`}}>
              </a>
            </span>
            <Typography variant="h6">
              {work.role}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {work.begin} ~ {work.end}
            </Typography>
              {work.descriptions.map((desc, desc_idx) =>
                <Typography key={`item_${idx}_desc_${desc_idx}`} >
                  • {desc}
                </Typography>
              )}
          </div>
        </Paper>
      </motion.div>
    </div>
  );
}

Work.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onDragEndCallback: PropTypes.func.isRequired,
};

export default withStyles(styles, {withTheme: true})(Work);
