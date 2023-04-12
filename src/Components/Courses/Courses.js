import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('db.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div>
            <h1 className='text-5xl font bold bg-cyan-200 text-black p-3' >Welcome to The Fitverse</h1>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>



        </div>
    );
};

export default Courses;