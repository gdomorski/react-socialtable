import React, { Component } from 'react';
import $ from 'jquery'
import {Dialog, FlatButton, RaisedButton, TextField} from 'material-ui';

export default class AddUser extends Component {
  render(){
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.props.handleClose}
      />,
    ];
    return (
      <span>
        <FlatButton label="Add User" onClick={this.props.handleOpen} />
        <Dialog
          title="Submit a new user"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
        >
        <TextField
          hintText="Name"
          floatingLabelText="Name"
          id="ename"
        /><br/>
        <TextField
          hintText="Username"
          floatingLabelText="Username"
          id="uname"
        /><br/>
        <TextField
          hintText="Age"
          floatingLabelText="Age"
          id="age"
        /><br/>
        <TextField
          hintText="Likes"
          floatingLabelText="Likes"
          id="likes"
        /><br/>
        </Dialog>
      </span>
    );
  }
}