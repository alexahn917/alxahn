import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Tag } from 'antd';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import profile from '../data/profile';

const { CheckableTag } = Tag;

const styles = theme => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end', 
  },
  noLineBtn: {
    boxShadow: '0 0px 0 rgba(0, 0, 0, 0.0)',
    borderColor: 'white',
  },
  tag: {
    justifyContent: 'flex-end',
    padding: 0,
    paddingLeft: 5,
    paddingBottom: 5,
  },
  sns: {
    justifyContent: 'flex-end',
    padding: 0,
    paddingLeft: 5,
    paddingBottom: 5,
  },
});

class Categories extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.list}>
        <List className={classes.tags} dense>
          <ListItem className={classes.tag}>
            <CheckableTag style={{margin:0}}>
              <Typography variant="caption" gutterBottom>
                info
              </Typography>
            </CheckableTag>
          </ListItem>
          <ListItem className={classes.tag}>
            <CheckableTag style={{margin:0}}>
              <Typography variant="caption" gutterBottom>
                timeline
              </Typography>
            </CheckableTag>
          </ListItem>
          <ListItem className={classes.tag}>
            <CheckableTag style={{margin:0}}>
              <Typography variant="caption" gutterBottom>
                portfolio
              </Typography>
            </CheckableTag>
          </ListItem>
          <ListItem className={classes.sns}>
              {profile.facebook ? <Button className={classes.noLineBtn} type="circle" icon="facebook" href={profile.facebook}/> : null}
              {profile.instagram ? <Button className={classes.noLineBtn} type="circle" icon="instagram" href={profile.instagram}/> : null}
          </ListItem>
        </List>
      </div>
    )
  }
}

Categories.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  // tagIndex: PropTypes.number.isRequired,
  // onChangeTag: PropTypes.func.isRequired,
};

export default withStyles(styles, {withTheme: true})(Categories);
