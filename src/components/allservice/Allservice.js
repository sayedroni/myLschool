import React, { useEffect, useState } from 'react';
import Services from '../Service/Services';

const Allservice = () => {
    const [course,setcourse] = useState([]);
    useEffect(()=>{
        fetch('./mydata.json')
        .then(res => res.json())
        .then(data => setcourse(data))
    },[])
    return (
        <div>

        <div className="courses">
            <h2> All Course Here...</h2>
            <div className='container '>
           <div className="single-service">
                    
                     {
                       course.map(allserv => <Services allcourse={allserv}></Services>)
                     }
             
           </div>
           </div>
        </div>
        </div>
    );
};

export default Allservice;