import React from 'react'
import SidebarRow from './SidebarRow/SidebarRow'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchlaterIcon from '@material-ui/icons/WatchLater'
import ThumUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltSharp'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreSharp';


function Sidebar() {
    return (
        <div className="sidebar">
           <SidebarRow selected Icons={HomeIcon} title="Home"/>
           <SidebarRow Icons={WhatshotIcon} title="Trending"/>
           <SidebarRow Icons={SubscriptionIcon} title="Subscriptions"/>
           <hr/>
           <SidebarRow Icons={VideoLibraryIcon} title="Library"/>
           <SidebarRow Icons={HistoryIcon} title="History"/>
           <SidebarRow Icons={OndemandVideoIcon} title="Your videos"/>
           <SidebarRow Icons={WatchlaterIcon} title="Watch later"/>
           <SidebarRow Icons={ThumUpAltOutlinedIcon} title="Like videos"/>
           <SidebarRow Icons={ExpandMoreOutlinedIcon} title="Show more"/>
           <hr/>
        </div>
    )
}

export default Sidebar;
