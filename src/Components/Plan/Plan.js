import React from 'react';
import Feature from '../Feature/Feature';

const Plan = (props) => {
    const {addToCart, option} = props;
    const { features } = option;
    return (
        <div className='bg-sky-400  rounded-md p-3'>
            <div>
                <h3>
                    <span className='text-6xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl text-gray-200'>/mon</span>
                </h3>
                <p className='text-3xl my-4'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button onClick={() => addToCart(option.price)} className='bg-gray-500 
            hover:bg-sky-900 mt-4 w-full rounded-md py-2 text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default Plan;