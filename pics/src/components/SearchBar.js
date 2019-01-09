//anywhere that has a classname with ui is taking styling from the pics/public/index.html file where we imported semantic ui min.css
import React from 'react';

class SearchBar extends React.Component {
    //onInputChange is a community naming convention for functions related to change events.. they always start with on, the Input is the element name (here it is an input tag) and then Change is the event, can also have click or submit
    state = {term: ''};

    //the below func was being used as a callback in the input tag like 
    //<input onChange={this.onInputChange} when it was refactored using arrow func we didnt need the below func anymore.

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    // onInputClick(event) {
    //     console.log('input was clicked')
    // }
    onFormSubmit(event) {
        event.preventDefault();
        
        console.log(this.state.term);

    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className = "ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={(event) => this.setState({term: event.target.value})} 
                    />
                        {/* ONCHANGE IS an important property name it has event listening properties - this is the same for onClick event.. so we defined the func onInputClick above and then we put the callback in the onClick function inside the input with onClick={this.onInputClick}  */}
                </div>
                </form>

            </div>
        ) 
    }
}

export default SearchBar;