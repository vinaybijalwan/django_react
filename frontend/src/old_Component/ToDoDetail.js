import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

import { useParams } from 'react-router'
import { Link } from 'react-router-dom'


export const ToDoDetail = () => {

    const [formdata, SetFormdata] = useState([])

    // const { id } = useParams()

    const { pk } = useParams()

    const getSingledata = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/todo/${pk}`);
        console.log('API response:', response.data);
  
        if (Array.isArray(response.data)) {
          SetFormdata(response.data);
        } else {
          console.error('API response is not an array:', response.data);
          SetFormdata(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
        
        
    }

    useEffect(() => {
      getSingledata()
    }, [pk])
    
  return (
    <div className="card-container">
       <div>
          <p>{formdata.title}</p>
          <p>{formdata.details}</p>
          <p>{formdata.date}</p>
       </div>
    <div className='btnClass'>
          <Link to={`/todoshow/${formdata.pk}/update`}>       
            <Button className="btn btn-primary">Update</Button>
          </Link>
          </div>
        
    </div>
  )
}
