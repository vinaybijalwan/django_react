import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export const ToDoDetail_02 = () => {
    const [formdata, SetFormdata] = useState([])

    const { id } = useParams()


    const getSingledata = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/todo/${id}`);
          console.log('API response:', response.data);
    
          if (Array.isArray(response.data)) {
            SetFormdata(response.data);
          } else {
            console.error('API response is not an array:', response.data);
            SetFormdata([response.data]);
            console.log([response.data])
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
          
          
      }
  
      useEffect(() => {
        getSingledata()
      }, [id])


  return (
    <div>
        {
            formdata.map(item => {
                console.log(item.pk)

                return (
                    <>
                        <Card key={item.pk}>
                            <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.details}</Card.Text>
                            <Card.Text>{item.date}</Card.Text>
                            </Card.Body>

                            <Link to={`/todoshow/${item.pk}/update`}>
                                <Button>Update</Button>
                            </Link>
                            
                        </Card>
                    </>    
                )
            
                
            })}

    </div>
  )
}
