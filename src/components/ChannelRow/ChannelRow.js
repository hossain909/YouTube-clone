import { Avatar } from '@material-ui/core';
import React from 'react'
import './ChannelRow.css'
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
function ChannelRow({image,channel,verified,subs,noOfVideos,description}) {
    return (
        <div className= 'channelRow'>
            <Avatar className='channelRow_logo' alt={ channel} src={ image }/>
            <div className="channelRow_text">
                <h4>
                    {channel} {verified && <VerifiedUserOutlinedIcon className='icons' />}
                </h4>
                <p>{subs} Subscribers . {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow;
