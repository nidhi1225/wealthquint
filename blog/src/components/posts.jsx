import React from 'react';
import ReactPlayer from 'react-player';

const Posts = (props) => {
    return(
        <div  className="recent">
            <div className="listitem">RECENT POSTS</div>
            <div className="listitem">
                <div className="num">1.</div>
                <div className="listcontent">How to Close Indian Bank Account?</div>
            </div>
            <div className="listitem">
                <div className="num">2.</div>
                <div className="listcontent">Punjab and Sind Bank Timings & Working Hours</div>
            </div>
            <div className="listitem">
                <div className="num">3.</div>
                <div className="listcontent">ECS Full Form</div>
            </div>
            <div className="listitem">
                <div className="num">4.</div>
                <div className="listcontent">How to Close Federal Bank Account?</div>
            </div>
            <div className="listitem">
                <div className="num">5.</div>
                <div className="listcontent">IDFC First Bank Timings & Working Hours</div>
            </div>
            <div className="listitem">
                <div className="num">6.</div>
                <div className="listcontent">AEPS Full Form</div>
            </div>
            <div className="video">
                <ReactPlayer url="https://www.youtube.com/watch?v=_VMTaNgJWjc&t=3s" />
            </div>
        </div>
    )
}

export default Posts