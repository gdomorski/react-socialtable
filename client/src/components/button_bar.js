import React from 'react'
import FlatButton from 'material-ui/lib/flat-button'
import AddUser from './add_user'
import TextField from 'material-ui/lib/text-field';

export default (props) => (
  <div>
    <FlatButton onClick={props.getDefault} label="Default" />
    <FlatButton onClick={props.findYoungest} label="Youngest" />
    <FlatButton onClick={props.findOldest} label="Oldest" />
    <FlatButton onClick={props.mostLikes} label="Most Likes" />
    <FlatButton onClick={props.leastLikes} label="Least Likes" />
    <AddUser
    	handleClose={props.handleClose}
    	handleOpen={props.handleOpen}
    	open={props.open}
    />
    <TextField
      floatingLabelText="Search"
      onChange={event => props.findID(event.target.value)}
    /><br/>

  </div>
);
