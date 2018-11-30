import React from 'react';


const ApprovalCard = (props) => {
    console.log( props.children ); //when you console.log (props) here it returned an object and in that object was an element called children which was the react code, so then we tested consoling props.children and it returned just the JS object with no 'proto'thing. so we then know this is what we need to pass in below to content. so we changed content from "Are you sure" to {props.children}
    return (
        <div className="ui card">
       
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
};


export default ApprovalCard;