import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui';

export default (props) => (
  	<TableRow>
			  <TableRowColumn>{props.id}</TableRowColumn>
			  <TableRowColumn>{props.name} {props.lname}</TableRowColumn>
			  <TableRowColumn>{props.username}</TableRowColumn>
			  <TableRowColumn>{props.age}</TableRowColumn>
			  <TableRowColumn>{props.likes}</TableRowColumn>
  	</TableRow>
 )

