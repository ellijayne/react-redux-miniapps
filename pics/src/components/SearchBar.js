//anywhere that has a classname with ui is taking styling from the pics/public/index.html file where we imported semantic ui min.css
import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="ui segment">
                <form className = "ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type='text' />
                </div>
                </form>

            </div>
        ) 
    }
}

export default SearchBar;