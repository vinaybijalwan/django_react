import React, { useState } from 'react'
import axios from "axios";

export const ToDoAdd = () => {

    const url = "http://127.0.0.1:8000/todo/"

    const[form, setForm] = useState({
        title:"",
        details:"",
        date:""
        });

    const[formdata, setFormData] = useState([])
    
    const handleInput =(e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name)
        console.log(value)
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
    </div>
  )
}
