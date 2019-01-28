import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import { Timeline } from 'antd';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import workExperiences from '../data/workExperiences';
import '../styles/WorkExperiences.css';

const styles = theme => ({
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '500px',
    minWidth: '300px',
    maxWidth: '500px',
    margin: '0 50px 50px 50px',
  },
});

const getWorkExperience = (work, idx) => {
  return (
    <Timeline.Item className="timeline-item-container" key={`item_${idx}`} dot={
      <span className="timeline-item">
        <a href={work.link} style={{backgroundImage: `url(${work.logo})`}}>
        </a>
      </span>}>
      <Typography variant="h5" style={{margin: '0 10px 3px 10px'}} gutterBottom>
        <b>{work.title}</b>
      </Typography>
      <Typography variant="h6">
        {work.role}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {work.begin} ~ {work.end}
      </Typography>
        {work.descriptions.map((desc, desc_idx) =>
          <Typography key={`item_${idx}_desc_${desc_idx}`}>
            • {desc}
          </Typography>
        )}
    </Timeline.Item>
  )
}

class WorkExperiences extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <Zoom in={true} style={{ transitionDelay: '300ms'}}>
        <Paper className={classes.timeline} elevation={0}>
          <Timeline mode="alternate">
            {workExperiences.map( (work, idx) => getWorkExperience(work, idx) )}
          </Timeline>
        </Paper>
      </Zoom>
    )
  }
}

WorkExperiences.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(WorkExperiences);
