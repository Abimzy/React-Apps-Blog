import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';
import * as serviceWorker from './serviceWorker';





//ReactDOM.render takes 2 arguments, the component (in this case Hello) and the DOM element (in this case entire document with id of 'root')
ReactDOM.render (
    <Hello name={"Eunice"} last={"Abimzy"} age={30}/>,
    document.getElementById('root')
)


// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
