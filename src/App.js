//Bring in React and Component instance from react
import React, {Component} from 'react';
import './App.css';

//Define our Hello component
class Hello extends Component {
  //What should the component render
  render() {
    //Make sure to return some UI
    return ( 
    <div>
      <h1> Hello {this.props.name} {this.props.last} </h1> 
      <p> You are {this.props.age} years young beautiful!</p> 
      </div>
    )
  }
}
export default Hello;
 