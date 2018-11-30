import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'; //this is how we are getting our images.
import CommentDetail from './CommentDetail' //have to provide relative path ref here its at the same level as this file so we use ./ to say 'look in to the same folder we are currently in'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            {/* tell app it needs to show commentdetail compoenent             */}

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>            
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    commentContent="This is awesome!" 
                    profilePic={faker.image.avatar()}
                /> 
                {/* can write it like the above OR below. doesnt matter, is same */}
            </ApprovalCard>

            <ApprovalCard> 
                <CommentDetail author="Alex" timeAgo="Today at 2:00AM" commentContent="haha, i love this" profilePic={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard> 
                <CommentDetail author="Jane" timeAgo="Yesterday at 7:10AM" commentContent="same." profilePic={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));