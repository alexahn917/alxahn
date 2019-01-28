import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Tag } from 'antd';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import profile from '../data/profile';
import '../styles/NameCardTags.css';

const { CheckableTag } = Tag;

const styles = theme => ({
  noLineBtn: {
    boxShadow: '0 0px 0 rgba(0, 0, 0, 0.0)',
    borderColor: 'white',
  },
  tag: {
    justifyContent: 'flex-end',
  },
  footer: {
    marginRight: theme.spacing.unit * 1,
  },
});

class NameCardTags extends React.Component {
  render() {
    const {classes, tagIndex, onChangeTag} = this.props;
    return (
      <List className={classes.tags} dense>
        <ListItem className={classes.tag}>
          <CheckableTag checked={tagIndex === 1} onChange={onChangeTag(1)}>
            <Typography variant="caption" gutterBottom>
              info
            </Typography>
          </CheckableTag>
        </ListItem>
        <ListItem className={classes.tag}>
          <CheckableTag checked={tagIndex === 2} onChange={onChangeTag(2)}>
            <Typography variant="caption" gutterBottom>
              timeline
            </Typography>
          </CheckableTag>
        </ListItem>
        <ListItem className={classes.tag}>
          <CheckableTag checked={tagIndex === 3} onChange={onChangeTag(3)}>
            <Typography variant="caption" gutterBottom>
              portfolio
            </Typography>
          </CheckableTag>
        </ListItem>
        <ListItem>
          <div className={classes.footer}>
            {profile.facebook ? <Button className={classes.noLineBtn} type="circle" icon="facebook" href={profile.facebook}/> : null}
            {profile.instagram ? <Button className={classes.noLineBtn} type="circle" icon="instagram" href={profile.instagram}/> : null}
          </div>
        </ListItem>
      </List>
    )
  }
}

NameCardTags.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  tagIndex: PropTypes.number.isRequired,
  onChangeTag: PropTypes.func.isRequired,
};

export default withStyles(styles, {withTheme: true})(NameCardTags);
