import React from 'react';
import logo from '..//../images/Color logo with background.png'
import Session from '../Session/Session';

const Cart = (props) => {
    const { exerciseTime } = props;
    return (
        <div>
            <img src={logo} alt="" />
            <Session exerciseTime={exerciseTime}></Session>
            <h1 className='text-3xl font-bold mt-5 mb'>Cart Details</h1>
            <div className='bg-slate-300  rounded-md'>
                <div className=' flex justify-between p-2 '>
                    <p>Total Cost : { }</p>
                    <p><span>${ }</span></p>
                </div>
                <div className='flex justify-between p-2 '>
                    <p>Tax : { }</p>
                    <p><span>${ }</span></p>
                </div>
                <div className=' flex justify-between p-2 '>
                    <p>Grand Total : { }</p>
                    <p><span>${ }</span></p>
                </div>


            </div>
        </div>
    );
};

export default Cart;