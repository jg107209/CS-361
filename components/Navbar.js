import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';
import {IoHelpCircleOutline} from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';
import {useNavigate} from "react-router-dom"


function Navbar () {

  const [buttonPopup, setButtonPopup] = useState(false);

  let navigate = useNavigate();
  const helpRoute = () => {
    let path = '/HelpPage';
    navigate(path);
  }

    return (
        <div className="Navbar">
            <div className="Navbar-link">
                <Link className="text-link" to="/">Home</Link>
            </div>
            <div className="Navbar-link">
                <Link className="text-link" to="/Inventory">Game Inventory</Link>
            </div>
            <div className="Navbar-link">
                <Link className="text-link" to="/WishList">Game Wishlist</Link>
            </div> 

            <div className="Admin-login">
                <Link className="text-link" to="/" onClick={ () => setButtonPopup(true)}>Login</Link>
                <IconContext.Provider value={{ style: {fontSize: '35', color: 'white'}}}>
                    <div>
                        <IoHelpCircleOutline onClick={helpRoute} />
                    </div>
                </IconContext.Provider>
            </div>
            
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            </Popup>
        </div>
    );
}

export default Navbar;