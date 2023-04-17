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
        <div>
            <h2 className='text-2xl font-semibold'>Session Plan</h2>
            <p>Add a break</p>
            <div className='bg-slate-300  rounded-full py-2'>
                {
                    breaks.map(singleBreak =>
                        <button key={singleBreak.id} onClick={() => sessionBreak(singleBreak.time)} className='p-1 mr-2 rounded-full bg-slate-400 '>{singleBreak.time}s</button>
                    )
                }

            </div>

            <p>Exercise details</p>
            <div className='bg-slate-300  rounded-full flex justify-between p-2 '>
               <p>Exercise Time :</p> <p className=''><span>{exerciseTime}</span> seconds</p>
            </div>

            <p>Session Break</p>
            <div className='bg-slate-300  rounded-full flex justify-between p-2 '>
               <p>Break Time :</p> <p className=''><span>{breakTime}</span> seconds</p>
            </div>

        </div>
    );
};

export default Session;