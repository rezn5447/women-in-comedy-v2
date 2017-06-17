// import React, { Component }from 'react';
// import ReactDOM from 'react-dom';


// class Event extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state {
// 			title: 'Event'
// 		}
// 	}
// 	render () {
// 		return (
// 			<h1>{this.state.title}</h1>
// 		);
// 	}
// }


class Post extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>    
  }
}