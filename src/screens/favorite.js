import React from 'react';
import Logout from '../components/logout'
import {Link} from 'react-router-dom'

const Favorite = props => {
    return (
        <div>
            <Logout></Logout>
            <p>Fav</p>
            <Link to='/home'>Home</Link>
        </div>
    );
};

export default Favorite;