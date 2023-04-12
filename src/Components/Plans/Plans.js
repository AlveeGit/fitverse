import React from 'react';
import Plan from '../Plan/Plan';

const Plans = () => {
    const planOptions = [
        {
            id: 1, name: 'Free', price: 0, features: [
                '100% free ',
                '3 days/month',
                '30 min/session',
                'Jump Rope',
                'trademil',
                'Cancel any time'
            ]
        },
        {
            id: 2, name: 'Standard', price: 9.99, features: [
                '$9.99 ',
                '15 days/month',
                '60 min/session',
                'Weights',
                'Dumbbels',
                'Cancel any time'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, features: [
                '$19.99 ',
                '30 days/month',
                '120 min/session',
                'all equipments',
                'Snacks',
                'Cancel any time'
            ]
        },
    ]
    return (
        <div>
            <h2 className='text-3xl font-bold'>Subscription Plans</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
                {
                    planOptions.map(option => <Plan
                        key={option.id}
                        option={option}
                    >
                    </Plan>)
                }
            </div>
        </div>
    );
};

export default Plans;