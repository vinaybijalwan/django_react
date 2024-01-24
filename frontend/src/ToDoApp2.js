import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ToDoAdd.css';

//using axious 
export const ToDoApp2 = () => {

    const[mydata, Setmydata] = useState([])

    const url = "http://127.0.0.1:8000/todo/"

    const dataGet = () => {
        axios.get(url)
            .then(response => {
            //console.log(response.data);
            Setmydata(response.data.reverse())   //here we add .reverse()  show last added in screen
                })
        .catch(error => {
            console.log(error);
                })
    }

    useEffect(() => {
        dataGet()
    }, [mydata]) //when update mydata value it will automatically update 
        

  return (
    <div className="card-container">
        {mydata.map(item => (
        <>
        <Card key={item.id}>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.details}</Card.Text>
            <Card.Text>{item.date}</Card.Text>
          </Card.Body>
        </Card>
        </>
      ))}
    </div>
  )
}
