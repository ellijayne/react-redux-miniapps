//anywhere that has a classname with ui is taking styling from the pics/public/index.html file where we imported semantic ui min.css
import React from 'react';
import SearchBar from './SearchBar';

const App = () => {
    return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar />
        </div>

    ) 
};

export default App;