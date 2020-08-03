import React from 'react';


import './UserItem.css'

const UsersItem = props => {
    return (
        <li className='user-item'>
            <div className='user-item_content'>
            <div className='user-item_image'>
            <img src={props.img} alt={props.name}/>
            </div>
            <div className="user-item_info">
            <h2>{props.name}</h2>
            <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</h3>
            </div>
            </div>
        </li>
    );

};

export default UsersItem;