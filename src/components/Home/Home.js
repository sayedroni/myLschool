import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './home.css'

const Home = () => {
    const [course,setcourse] = useState([]);
    useEffect(()=>{
        fetch('./mydata.json')
        .then(res => res.json())
        .then(data => setcourse(data))
    },[])
    return (
        <div>
        <div className="img-container">
           <h1>We Provide best courses...</h1>
        </div>

        <div className="courses">
            <h2>Our Current Course</h2>
            <div className='container '>
           <div className="single-service">
            
            
                    {
                      course.slice(0,4).map(service=> <Course
                        key = {service.id}
                        course={service}>

                        </Course>)
                    }
                    
            
             
           </div>
           </div>
        </div>
        </div>
       
        
    );
};

export default Home;