import React from 'react';
import './Course.css'

const Course = (props) => {
    const { picture, name, fee, about } = props.course;
    return (

        <div className='relative border bg-slate-300  p-3'>
            <h4 className='text-2xl font-bold'>Course : {name}</h4>
            <img  src={picture} alt="" />
            <p className='font-bold'>Course Fee : {fee}</p>
            <p>Details : {about}</p>
            <button className=' bottom-0 rounded-full bg-black text-white p-2'>Add to Cart</button>
        </div>

    );
};

export default Course;