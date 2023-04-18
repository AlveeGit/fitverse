import React from 'react';
import './Course.css'

const Course = (props) => {
    const { picture, name, fee, about , time} = props.course;
    const {addToList} = props;
    return (

        <div className='bg-gray-200 relative rounded-md p-3 '>
            
            <h4 className='h-15 text-2xl font-bold mb-3'>{name}</h4>

            <img src={picture} alt="" />

            
            <p className='font-bold mt-2 mb-3'>Exercise Time : {time} seconds</p>
            <p className='mb-7'>Benefits : {about}</p>

            <button onClick={() => addToList(time)} className='bg-gray-500 hover:bg-sky-900 mt-4 w-full rounded-md py-2 text-white font-bold absolute inset-x-0 bottom-0'>Add to List</button>

        </div>

    );
};

export default Course;