import React from 'react';

import UsersList from '../components/UsersList'

const Users = () => {
    const USER = [
        {
            id: 'u1', 
            name: 'Tim Laxton', 
            image: 'https://images.pexels.com/photos/57627/pexels-photo-57627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
            places: 2 
        }
    ];


    return <UsersList items={USER}/>
};

export default Users;