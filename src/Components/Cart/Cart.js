import React from 'react';
import logo from '..//../images/Color logo with background.png'
import Session from '../Session/Session';

const Cart = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <Session></Session>
            <h1 className='text-3xl font-bold mt-5'>Cart Details</h1>


        </div>
    );
};

export default Cart;