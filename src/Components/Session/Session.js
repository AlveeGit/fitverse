import React, { useState } from 'react';

const Session = (props) => {
    const [breakTime,setBreakTime]= useState(0); 

    const breaks = [
        { id: 1, time: 10 },
        { id: 2, time: 20 },
        { id: 3, time: 30 },
        { id: 4, time: 40 },
        { id: 5, time: 50 },
    ]
     const {exerciseTime} =props;
    const sessionBreak = (breakTime) => {
        setBreakTime(breakTime);
    };

    return (
        <div className='bg-sky-400 m-1 rounded-md'>
            <h2 className='text-3xl font-bold mt-5'>Session Plan</h2>
            <p className='font-semibold mt-5'>Add a break</p>
            <div className='bg-slate-300  rounded-md py-2 '>
                {
                    breaks.map(singleBreak =>
                        <button key={singleBreak.id} onClick={() => sessionBreak(singleBreak.time)} className='p-1 mr-2 rounded-full bg-slate-400 hover:bg-slate-200'>{singleBreak.time}s</button>
                    )
                }

            </div>

            <p className='font-semibold mt-3'>Exercise details</p>
            <div className='bg-slate-300  rounded-md flex justify-between p-2 '>
               <p>Exercise Time :</p> <p className=''><span>{exerciseTime}</span> seconds</p>
            </div>

            <p className='font-semibold mt-3'>Session Break</p>
            <div className='bg-slate-300  rounded-md flex justify-between p-2 '>
               <p>Break Time :</p> <p className=''><span>{breakTime}</span> seconds</p>
            </div>

        </div>
    );
};

export default Session;