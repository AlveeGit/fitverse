import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = (props) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('db.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    const {addToList} = props;

    return (
        <div>
            <h1 className='text-5xl font bold bg-sky-400 text-black p-3 py-10 border-4 border-double border-teal-100' >Welcome to The Fitverse</h1>
            <div className='grid md:grid-cols-3 gap-1 mt-4'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                        addToList={addToList}
                    ></Course>)
                } 
            </div>



        </div>
    );
};

export default Courses;