//Bring in React and Component instance from react
import React, { Component } from 'react';

//Define our Hello component
class Hello extends Component {
  //What should the component render
  render (){
    //Make sure to return some UI
    return (
      <div>
      <h1>Hello {this.props.name} {this.props.last}</h1>
      <p>You are {this.props.age} years young beautiful!</p>
      </div>
    )
  }
}
export default Hello




//import logo from './logo.svg';
//import './App.css'; 
//class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
