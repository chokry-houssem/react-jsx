import React from 'react';
import Avatar from '../avatar.png';
import Asvg from '../avatarsvg.svg';
import '../App.css';


 function Photo() {
    return (
        <div>
            <img src={Asvg} alt="my-avatar" className="myPhoto" />
        </div>
    )
}
export default Photo ; 