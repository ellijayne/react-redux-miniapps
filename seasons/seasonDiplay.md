// BELOW IS ANNOTATED REACT CODE that may be easier to understand

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    //the constructor function is not required but its more a function that belongs to JS rather than just react.this gets called first whenever a new instance of a class is made. automatically gets called with props - also always need to call super and pass props too, its just required

    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: "" }; //this is our state object that will later contain data thats really relevent to the thing we want (latitude) here we can just call it lat for short and give it a value of null cos we dont know what it will be yet. with RE to errorMessage - we set it here int he same way we do the lat but we will setState later if we need to show it that will edit it . 

        //can refactor the above code to be state = { lat: null, errorMessage: ""}; without constructor func!!!!

    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //we called setState!! we know it was position.coords.latitude cos we console logged the position and dug into it. 
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }

            //can refactor the above code to be as follows (but i think it's too difficult for me right now) :
            //  (position) => this.setState({ lat: position.coords.latitude }),
            //  (err) => this.setState({ errorMessage: err.message })
        );
    }

    //react says we must always call the render method/function
    render() {

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading...</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);