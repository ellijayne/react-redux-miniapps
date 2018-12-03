import React from 'react';
import ReactDOM from 'react-dom';

//below is the old functional version of the class component below.
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         //fnction callbacks - this is the success callback, it gets called when our request was successful. the second one is the 'failure callback'
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     return <div>Latitude: </div>
// };

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
        
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div>Latitude: </div>
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);