import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

import { useParams } from 'react-router'
import { Link } from 'react-router-dom'


export const ToDoDetail = () => {

    const [formdata, SetFormdata] = useState({})

    const { id } = useParams()

    const getSingledata = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/todo/${id}`);
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
    }, [id])
    
  return (
    <div className="card-container">
       <div>
          <p>{formdata.title}</p>
          <p>{formdata.details}</p>
          <p>{formdata.date}</p>
       </div>
    <div className='btnClass'>
          <Link to={`/${id}/update`}>
            <Button className="btn btn-primary">Update</Button>
          </Link>
          </div>
        
    </div>
  )
}
