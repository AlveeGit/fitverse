import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12 p-3 rounded-md hover:bg-sky-200'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;