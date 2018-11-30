import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => { //passing props object as argument here this is how it is getting it from the parent. 
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.profilePic} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                    </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">{props.commentContent}</div>
            </div>
        </div>
    );
};

export default CommentDetail