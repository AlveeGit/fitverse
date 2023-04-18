import React from 'react';
import Plan from '../Plan/Plan';

const Plans = (props) => {
    const {addToCart} = props;
    const planOptions = [
        {
            id: 1, name: 'Fresh', price: 0.99, features: [
                'Almost free ',
                '3 days/month',
                '30 min/session',
                'Jump Rope',
                'Treadmill',
                'Cancel any time'
            ]
        },
        {
            id: 2, name: 'Standard', price: 9.99, features: [
                '$9.99/month ',
                '15 days/month',
                '60 min/session',
                'Weight Bars',
                'Dumbbells',
                'Cancel any time'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, features: [
                '$19.99/month ',
                '30 days/month',
                '120 min/session',
                'All equipments',
                'Free Snacks',
                'Cancel any time'
            ]
        },
    ]
    return (
        <div>
            <h2 className='text-3xl font-bold mt-5'>Subscription Plans</h2>
            <div className='grid md:grid-cols-3 gap-1 mt-4'>
                {
                    planOptions.map(option => <Plan
                        key={option.id}
                        option={option}
                        addToCart={addToCart}
                    >
                    </Plan>)
                }
            </div>
        </div>
    );
};

export default Plans;