import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    //the constructor function is not required but its more a function that belongs to JS rather than just react.this gets called first whenever a new instance of a class is made. automatically gets called with props - also always need to call super and pass props too, its just required

    //instead of doing whole function constructor(props){
        //super(props)
        //this.state = 
    //} can refactor to below: 

    state = { lat: null, errorMessage: ""}; //new constructor func


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //we called setState!! we know it was position.coords.latitude cos we console logged the position and dug into it. 
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        );
    }

        //the below code was in the render method but lect says that if you have conditional logic or multiple return statements in the render() move it to a helper function and then call it in the render()
    renderContent() {

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} /> //here we are passing SeasonDisplay a PROP of lat and assigning it a value of this.state.lat - ****WE CAN TAKE STATE FROM ONE COMPONENT AND PASS IT AS A PROP DOWN TO THE CHILD - IN THIS CASE THE CHILD IS THE SEASONDISPLAY*** after we did this we went back to SeasonDisplay.js to pass it the prop and check it was getting the lat by adding a console.
        }

        return <Spinner message="Please accept location request" />;
        
    }

    //react says we must always call the render method/function
    render() {

        return(
            <div className="border red">
            {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);