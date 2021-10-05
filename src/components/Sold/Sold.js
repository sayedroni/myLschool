import React from 'react';
import { Table } from 'react-bootstrap';
import './sold.css'

const Sold = () => {
    return (
        <div>
            <div className="container">
            <div className="sold">
            <h2>Most Sold Courses  </h2>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>ID</th>
      <th>Course Name</th>
      <th>Total Sold</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>UI/UX</td>
      <td>10</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>WEB DEVELOPMENT</td>
      <td>15</td>
      
    </tr>
    <tr>
      <td></td>
      <td>WEB DESIGN</td>
      <td>8</td>
      
    </tr>
    <tr>
      <td>4</td>
      <td>ANDROID DEVELOPMENT</td>
      <td>12</td>
      
    </tr>
    <tr>
      <td>5</td>
      <td>SEO </td>
      <td>7</td>
      
    </tr>
    
  </tbody>
</Table>
</div>
        </div>
        </div>
    );
};

export default Sold;