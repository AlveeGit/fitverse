import React from 'react';

const Session = () => {
    const breaks = [
        { id: 1, time: 10 },
        { id: 2, time: 20 },
        { id: 3, time: 30 },
        { id: 4, time: 40 },
        { id: 5, time: 50 }
    ]

    return (
        <div>
            <h2 className='text-2xl font-semibold'>Session Plan</h2>
            <p>Add a break</p>
            <div>
                {/* {
                    breaks.map((break) =>
                <button>Click me</button>
                );
                } */}
            </div>
 
            <p>Exercise details</p>
            <div>

            </div>

        </div>
    );
};

export default Session;