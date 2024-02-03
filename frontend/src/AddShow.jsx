import React, { useState, useEffect } from 'react'
import axios from "axios";
import './AddForm.css';
import { Card, NavLink, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AddShow = () => {

    const url = "http://127.0.0.1:8000/todo/"

    const[form, setForm] = useState({
        title:"",
        details:"",
        date:""
        });

    const[formdata, setFormData] = useState([])

    const[mydata, Setmydata] = useState([])
    
    const handleInput =(e) => {
        const name = e.target.name
        const value = e.target.value
        // console.log(name)
        // console.log(value)
        setForm({...form, [name]: value})
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newRecords = {...form, id: new Date().getTime().toString()}
        
        setFormData({...formdata, newRecords})
        try {
            await axios.post(url, newRecords);
            // Clear the form after a successful submission
            setForm({
              title: '',
              details: '',
              date: '',
            });
          } catch (error) {
            console.error('Error submitting data:', error);
            // Handle error if necessary
          }
    }


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



    
    const deleteItem = (id) => {
        console.log("Delete Button Work")
        console.log(id)
        const newData = mydata.filter((item, id) => item.id !== id );               //myArray.filter((element, index, array) => { /* ... */ })
       
        
       
        
    }

    

  return (
    <div>
        <h2>Add DoTo Item Here</h2>
        <form action='' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='title'>Title</label>
                <input type='text' autoComplete='off'
                value={form.title}
                onChange={handleInput}
                name='title' id='title'/>
            </div>

            <div>
                <label htmlFor='details'>Details</label>
                <input type='text' autoComplete='off'
                value={form.details}
                onChange={handleInput}
                name='details' id='details'/>
            </div>

            <div>
                <label htmlFor='date'>Date</label>
                <input type='datetime-local' autoComplete='off'
                value={form.date}
                onChange={handleInput}
                name='date' id='date'/>
            </div>

            <button type='submit'>Add</button>
        </form>

        <div>
            <div className="card-container">
                {mydata.map((item, id)=> (
                <>
                    <Card key={item.id}>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.details}</Card.Text>
                            <Card.Text>{item.date}</Card.Text>
                        </Card.Body>
                            <div className='btnClass'>
                                <NavLink>
                                <Button variant="info">Update</Button>
                                <Button variant="danger" id = {id} onClick={() => deleteItem(id)}>Delete</Button>
                                
                                </NavLink>
                            </div>
                    </Card>
                </>
                ))}
            </div>
        </div>
    </div>
  )
}
