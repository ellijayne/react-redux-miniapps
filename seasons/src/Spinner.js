import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui active inverted dimmer">
                <div className="ui large text loader">{props.message}</div>
            </div>
        </div>
    );
   
};

//below defines the default text to show if we forget to pass <Spinner /> props in the index.js

Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;