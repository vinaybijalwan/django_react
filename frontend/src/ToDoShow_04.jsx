import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Card, Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ShowCard.css'

import { Link, useNavigate } from 'react-router-dom';

export const ToDoShow_04 = () => {

    const[mydata, Setmydata] = useState([])

    const url = "http://127.0.0.1:8000/todo/"

    const navigate = useNavigate()


    const dataGet = () => {
        axios.get(url)
            .then(response => {
            //console.log(response.data);
            Setmydata(response.data.reverse())      // .reverse()//here we add .reverse()  show last added in screen
           
            
            
                })
          .catch(error => {
            console.log(error);
                })
    }

    useEffect(() => {
        dataGet()
    }, [])  

    const deleteItem = (id) =>{
        axios.delete(`${url}${id}`)
        .then(response => {
            console.log(response);
            //After deletion, fetch the updated data
            // navigate('/todoshow')
            dataGet()
        })
    }

  return (
    <div>
        <h2>List of Items</h2> 
        <Container fluid>
            <div className="d-flex flex-wrap justify-content-around">
                {mydata.map(item => (
                    <Card key={item.pk} className="text-center m-3" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.details}</Card.Text>
                            <Card.Text>{item.date}</Card.Text>
                        </Card.Body>
                        <div className="conatiner">
                            <Link to={`/todoshow/${item.pk}`}>
                                <Button>Detail</Button>
                            </Link>
                            <Link to={`/todoshow/${item.pk}`}>
                                <Button className='btn btn-danger' onClick={() => deleteItem(item.pk)}>Delete</Button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </Container>


    </div>
  )
}
