import React from 'react';

export default () => {

	const style2 = {
		width: '100px',
		'float': 'left',
	}
	const style = {
		width: '100px',
		'verticalAlign': 'middle',
		'display': 'table-cell'
	}
	return(
		<div style={style2}>
			<img style={style} src="./src/images/twittersquare.png" />
		</div>
	)
}
