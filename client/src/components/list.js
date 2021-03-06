import React, {Component} from 'react'
import $ from 'jquery'
import _ from 'underscore'
import { TableBody, Table, TableRow, TableRowColumn, TableHeaderColumn, TableHeader  }  from 'material-ui'
import UserProfile from './userprofile.js'
import ButtonBar from './button_bar'
import Header from './firstrow'

export default class List extends Component {
	constructor(props){
		super()
		this.state = {
			data: [],
			open: false
		}
	}

	componentWillMount() {
		this.getAllUsers()
	}

	getAllUsers () {
		var self = this;
	 	$.getJSON('/api/allusers').then(function(response){
	 		var response = self.sortResults(response, 'id', true)
	 		self.setState({data: response})
		})
	}

	search(term){
		term = (!term) ? this.getAllUsers() : term.toLowerCase()

		let arr = this.state.data.filter(function(value){
			let currentId = "" + value['id'];
			let currentName = value['fname'].toLowerCase()
			let currentScreenName = value['username'].toLowerCase()
			return (currentId.indexOf(term) !== -1) || (currentName.indexOf(term) !== -1) || (currentScreenName.indexOf(term) !== -1)
		})

		this.setState({data: arr});
	}

	sortResults(data, prop, asc) {
		data = data.sort(function(a, b) {
		    if (asc) return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
		    else return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
		})
		return data
	}

	handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    let data = {
        fname: document.getElementById('ename').value,
        username: document.getElementById('uname').value,
        age: document.getElementById('age').value,
        likes: document.getElementById('likes').value
    }
    const self = this;
    $.ajax({
      type: "POST",
      url: '/api/allusers',
      data: data,
      success: function(){
        console.log('success')
      	self.getAllUsers()
      },
      error: function (error) {
        console.log(error, "error");
      }
    })
    this.setState({open: false});
  }

	render(){
		const searchID = _.debounce((term) => { this.search(term) }, 500);
		const everyUser = this.state.data.map((user) => {
 			return (
	 			<UserProfile
	 				key={user.id}
	 				id={user.id}
	 				name={user.fname}
	 				username={user.username}
	 				age={user.age}
	 				likes={user.likes}
	 			/>
 			)
 		})
		return (
			<div>
			<ButtonBar
				mostLikes={() => this.setState({data: this.sortResults(this.state.data, 'likes', false)})}
				leastLikes={() => this.setState({data: this.sortResults(this.state.data, 'likes', true)})}
				findOldest={() => this.setState({data: this.sortResults(this.state.data, 'age', false)})}
				findYoungest={() => this.setState({data: this.sortResults(this.state.data, 'age', true)})}
				getDefault={() => this.setState({data: this.sortResults(this.state.data, 'id', true)})}
				open ={this.state.open}
				handleOpen={this.handleOpen}
	 			handleClose={this.handleClose}
	 			finder={searchID}
			/>
			<br/>
			<br/>

		  <Table
		  	height={'400px'}
		  	fixedHeader={true}
		  	selectable={true}
		  >
	    	<TableHeader
	    		adjustForCheckbox={false}
	    		displaySelectAll={false}
	    		enableSelectAll={false} >
	      <Header />
  			</TableHeader>
				<TableBody
					showRowHover={true}
          stripedRows={true}
				>
					{everyUser}
				</TableBody>
			</Table>
			</div>
		)
	}
}