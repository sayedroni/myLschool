import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './course.css'

const Course = (props) => {
  const{title,Duration,price,image}= props.course
    return (
        <div>
            <Card className='myCard'>
        <Card.Img variant="top" src={image} />
        
        <Card.Body>
          <Card.Title> <h4>{title}</h4> </Card.Title>
          <Card.Text>
         <p> Course Duration: {Duration}</p> 
          </Card.Text>
          <Card.Text>
         <h3> Price: ${price}</h3> 
          </Card.Text>
         
        </Card.Body>
        <Button variant="primary" size="lg">
            ENROLL THIS COURSE
          </Button>
      </Card>
        </div>
    );
};

export default Course;