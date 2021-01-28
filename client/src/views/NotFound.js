import React from 'react';
import image404 from '../resources/404Page.png'

const NotFound = () => {
        return (
        <div>
            <div className="spacer" > &nbsp; </div>
            <div style={{textAlign: "center", fontSize: "300%"}}>Page not found</div>
            <img src={image404} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "40%"}}/>
        </div>
        );
}

export default NotFound;
