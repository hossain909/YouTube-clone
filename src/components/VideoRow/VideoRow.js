import React from 'react'
import './VideoRow.css'

function VideoRow({views,sub,description,timestamp,channel,title,image}) {
    return (
        <div className="VideoRow">
            {/* <h5>Latest from Jhankar Mahbub</h5> */}
            <img src={image} alt="" />
            <div className="videoRow_text">
                <h4>{title}</h4>
                <p className="videoRow_headline"> {channel} ⚬  {' '}
                <span className = "videoRow_subs">
                <span className="videoRow_subscriberNumber"> {sub} </span> Subscribers
                </span> {' '} {views} ⚬ {timestamp}  </p>
                <p className="videoRow_description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow;
