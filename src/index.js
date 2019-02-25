import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './App.js';
import Post from './Blog.js';
import * as serviceWorker from './serviceWorker';


//Creating a post object literal
const post = {
    title: "What did my cat do again?!",
    author: "Eunice Brackett",
    body: "Missing until dinner time lick left leg for ninety minutes, still dirty purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table ooh, are those your $250 dollar sandals? lemme use that as my litter box so eat a plant, kill a hand russian blue. Sweet beast paw your face to wake you up in the morning attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently or stuff and things bring your owner a dead bird for i like cats because they are fat and fluffy.Licks paws i cry and cry and cry unless you pet me, and then maybe i cry just for fun, annoy kitten brother with poking i'm going to lap some water out of my master's cup meow.",
    comments: ["Greatest blog post ever!!!!!", "Your kitty is amazing!", "Say whaaat?"]
};

ReactDOM.render (
    <Post
    title={post.title}
    author={post.author}
    body={post.body}
    comments={post.comments} />,
    document.getElementById('root')
);

// ReactDOM.render takes 2 arguments, the component (in this case Hello) and the DOM element (in this case entire document with id of 'root')
// ReactDOM.render (
//     <Hello name={"Eunice"} last={"Abimzy"} age={30}/>,
//     document.getElementById('root')
// )


// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
