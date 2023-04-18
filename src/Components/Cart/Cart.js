import React from 'react';
import logo from '..//../images/Color logo with background.png'
import Session from '../Session/Session';
import Contact from '../Contact/Contact';
import AboutUs from '../AboutUs/AboutUs';

const Cart = (props) => {
    const { exerciseTime, cart } = props;
    const tax = parseFloat((cart * 0.2).toFixed(2));
    const gTotal =tax + cart;

    return (
        <div>
            <img src={logo} alt="" />
            <Session exerciseTime={exerciseTime}></Session>
            <h1 className='text-3xl font-bold mt-5 mb-3'>Cart Details</h1>
            <div className='bg-slate-300  rounded-md m-1'>
                <div className=' flex justify-between p-2 '>
                    <p>Total Cost :</p>
                    <p><span>${(cart).toFixed(2)}</span></p>
                </div>
                <div className='flex justify-between p-2 '>
                    <p>Tax :</p>
                    <p><span>${(tax).toFixed(2)}</span></p>
                </div>
                <div className=' flex justify-between p-2 '>
                    <p>Grand Total :</p>
                    <p><span>${(gTotal).toFixed(2)}</span></p>
                </div>
                <button className='bg-sky-400 hover:bg-sky-600 w-full p-3 rounded-md font-semibold'>Check Out</button>


            </div>
            <Contact></Contact>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Cart;