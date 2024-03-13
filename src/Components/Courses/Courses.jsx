import { useEffect } from "react";
import Course from "../Course/Course";
import { useState } from "react";
import PropTypes from 'prop-types';


const Courses = ({handleCourseSelection}) => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="grid gap-5  grid-cols-3 w-4/5">
            {
                courses.map((course) => <Course 
                handleCourseSelection={handleCourseSelection}
                key={course.id} course={course}></Course>)

            }
            
           
        </div>
    );
};
Courses.propTypes={
    handleCourseSelection:PropTypes.func.isRequired
  }
export default Courses;