import React,{useState} from 'react'
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import avater from '../images/unnamed.jpg'
import './Header.css'
import { Link } from 'react-router-dom';


function Header() {
    const [inputSearch, setInputSearch] = useState(''); 
    return (
        <div className="header">
            <div className="left_header">
                <MenuSharpIcon/> 
                <Link to='/'><img className="header__logo"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="googleImage"/></Link>
            </div>

            <div className="header-input">
            <input onChange={e=>setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
            
            <Link to ={`/search/${inputSearch}`}>
            <SearchIcon  className='searchButton'/>
            </Link>
          
            </div>
            
            <div className="right-header">
            <VideoCallIcon className="header_Icons"/>
            <Apps className="header_Icons"/>
            <NotificationIcon className="header_Icons"/>
            <img src={avater} className="avaterStyle" alt="" />
            </div>
            
        </div>
    )
}

export default Header
