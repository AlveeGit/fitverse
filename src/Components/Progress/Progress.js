import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Progress = () => {
    const data = [
        {
            day: 'Day 1',
            calorie: 4000,
            time: 2400,
            worth: 2400,
        },
        {
            day: 'Day 2',
            calorie: 3000,
            time: 1398,
            worth: 2210,
        },
        {
            day: 'Day 3',
            calorie: 2000,
            time: 9800,
            worth: 2290,
        },
        {
            day: 'Day 4',
            calorie: 2780,
            time: 3908,
            worth: 2000,
        },
        {
            day: 'Day 5',
            calorie: 1890,
            time: 4800,
            worth: 2181,
        },
        {
            day: 'Day 6',
            calorie: 2390,
            time: 3800,
            worth: 2500,
        },
        {
            day: 'Day 7',
            calorie: 3490,
            time: 4300,
            worth: 2100,
        },
    ];

    return (
        <div>
            <h1 className='text-3xl font-bold mt-5'>Your Fitness Growth Status </h1>
            <div className=''>
            <LineChart
                width={900}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="calorie" stroke="#8884d8" activeDot={{ r: 8 }} />

            </LineChart>
            </div>
            

        </div>
    );
};

export default Progress;