import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        //fnction callbacks - this is the success callback, it gets called when our request was successful. the second one is the 'failure callback'
        (position) => console.log(position),
        (err) => console.log(err)
    );
    return <div>Hi There!</div>
};

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);