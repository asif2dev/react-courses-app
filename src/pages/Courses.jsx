import React from 'react'
import '../styles/courses.css'
import brandLogo from "../images/logo.svg";
import Course from '../components/Course'
import {CoursesList} from '../helpers/CoursesList'

function Courses() {
  return (
    <div className="coursesList">
        {CoursesList.map((course,key) =>{
            return (
                <Course 
                    key={key} 
                    title = {course.title} 
                    img = {course.img}
                    description = {course.description} 
                    price = {course.price} 
                />
            );
        })}
    </div>    
  )
}

export default Courses