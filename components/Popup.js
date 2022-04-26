import React from "react"
import {useNavigate} from "react-router-dom"

function Popup (props) {

    let navigate = useNavigate();
    const routeChange = () => {
        let closeWindow = () => props.setTrigger(false);
        let path = '/AdminPage';
        navigate(path);
        closeWindow();
    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                
                <button className="close-btn" onClick={ () => props.setTrigger(false)}>close</button>
                <h1>Login System in Development</h1>
                
                <div className="admin-check">
                    <h3>Are you a site admin?</h3>
                    <button className="admin-yes" onClick={routeChange}>yes</button>
                </div>
            </div>
            { props.children }
        </div>
    ) :"";
}

export default Popup