import React from 'react';

//configuration object:
const seasonConfig = {
    summer: {
        text: 'Let\'s Hit the Beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Brrrr it\'s cold!',
        iconName: 'snowflake'
    }
};

//func below determines what season it is 
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'summer' : 'winter';
    }
    
}

const SeasonDisplay = (props) => {
    // console.log(props.lat) - using this console to check it could get the lat from the parent class component in index.js
    const season = getSeason(props.lat, new Date().getMonth());
    //need to deconstruct code out from config object above:
    const {text, iconName} = seasonConfig[season];
    return (
        <div>
            <i className={`${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`${iconName} icon`} />

        </div>
    ) 
};

export default SeasonDisplay