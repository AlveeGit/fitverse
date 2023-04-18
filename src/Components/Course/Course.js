import React from 'react';
import './Course.css'

const Course = (props) => {
    const { picture, name, fee, about , time} = props.course;
    const {addToList} = props;
    return (

        <div className='bg-gray-200 relative m-3 rounded-md p-3 '>
            
            <h4 className='h-15 text-2xl font-bold mb-3'>{name}</h4>

            <img src={picture} alt="" />

            <p className='font-bold mb-3'>Course Fee : ${fee}</p>
            <p className='font-bold mb-3'>Exercise Time : {time} seconds</p>
            <p className='m-7'>Details : {about}</p>

            <button onClick={() => addToList(time, fee)} className='bg-gray-500 hover:bg-sky-900 mt-4 w-full rounded-md py-2 text-white font-bold absolute inset-x-0 bottom-0'>Add to List</button>

        </div>

    );
};

export default Course;