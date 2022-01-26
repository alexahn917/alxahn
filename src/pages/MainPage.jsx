import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Profile from '../components/Profile';
import Categories from '../components/Categories';
import Paper from '@material-ui/core/Paper';
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
  backcard: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 20,
    position: 'absolute',
    top: -0,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    padding: '40px',
  },
});

function MainPage(props) {
  const {classes} = props;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 3, 100], [500, 3, -500]);
  const rotateY = useTransform(x, [-100, 3, 100], [-500, 3, 500]);

  return (
    <div className={classes.container}>
      
      <div style={{perspective: 10000}}>
        <div style={{position: 'relative', top: -30, right: -5, fontSize: 20, transform: "rotate(-3deg)"}}>
          flip it 🤏
        </div>
        <motion.div style={{x, y, rotateX, rotateY, z: 10}} drag dragElastic={0.13} dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0}} whileTap={{cursor: "grabbing"}}>
          <Paper className={classes.card} elevation={20}>
            <div className={classes.content}>
              <Profile/>
              <Categories />
            </div>
          </Paper>
        </motion.div>
      </div>
    </div>
  );
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MainPage);
