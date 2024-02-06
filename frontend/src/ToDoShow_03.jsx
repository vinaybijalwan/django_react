import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ToDoAdd.css';
import { Link } from 'react-router-dom';

export const ToDoShow_03 = () => {

    const[mydata, Setmydata] = useState([])

    const url = "http://127.0.0.1:8000/todo/"


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


  return (
    <div>
        {
            mydata.map(item => {
                console.log(item.pk)

                return (
                    <>
                        <Container >
                            <Row className="justify-content-center mynew" >
                                <Col key={item.pk} xs={12} md={4} className="mb-3">
                                    <Card className="text-center">
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>{item.details}</Card.Text>
                                            <Card.Text>{item.date}</Card.Text>
                                        </Card.Body>

                                        <Link to={`/todoshow/${item.pk}`}>
                                        <Button>Detail</Button>
                                        </Link>
                                
                                    </Card>
                                </Col>
                            
                            </Row>
                        </Container>
                    </>    
                )
            
                
            })}



    </div>
  )
}
