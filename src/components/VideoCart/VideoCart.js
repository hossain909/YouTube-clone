import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './VideoCart.css'

function VideoCart({image,title,channel, views, timestamp,channelImage}) {
    return (
        <div className="videoCard">
           <img src={image} className="videoCard_thumbnail" alt="" />
           <div className="videoCard_info">
                <Avatar className='videoCard_avatar' 
                alt={channel}
                src={channelImage}
                />
                <div className="video_textCard">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
           </div>
        </div>
    )
}

export default VideoCart
