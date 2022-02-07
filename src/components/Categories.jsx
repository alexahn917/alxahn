import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Tag } from 'antd';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {PROFILE_INFO} from '../data/constants';

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
    width: 30,
    margin: -3,
    fontSize: '16px',
    borderRadius: '100%',
    height: 30,
  },
  tag: {
    justifyContent: 'flex-end',
    padding: 0,
    paddingLeft: 5,
    paddingTop: 5,
  },
});

const Categories = (props) => {
  const {classes} = props;
  return (
    <div className={classes.list}>
      <List className={classes.tags} dense>
          {/* <ListItem className={classes.tag}>
          <div style={{margin:0}}>
            <img
              src={"/img/profile_picture_crop.jpg"}
              className={`smooth-image`}
              width={75}
              height={75}
              objectFit={"cover"}
              boxSizing="border-box"
              style={{borderRadius:50, opacity:0.8, top: -50, right: -15, position: "absolute"}}
            />
          </div>
        </ListItem> */}
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
        <ListItem className={classes.tag}>
            {PROFILE_INFO.facebook ? <Button className={classes.noLineBtn} type="circle" icon="facebook" href={PROFILE_INFO.facebook}/> : null}
            {PROFILE_INFO.instagram ? <Button className={classes.noLineBtn} type="circle" icon="instagram" href={PROFILE_INFO.instagram}/> : null}
            {PROFILE_INFO.linkedin ? <Button className={classes.noLineBtn} type="circle" icon="linkedin" href={PROFILE_INFO.linkedin}/> : null}
        </ListItem>
      </List>
    </div>
  )
}

Categories.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  // tagIndex: PropTypes.number.isRequired,
  // onChangeTag: PropTypes.func.isRequired,
};

export default withStyles(styles, {withTheme: true})(Categories);
