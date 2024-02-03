import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router'


export const UpdateToDo = () => {

    const [formdata, setFormData] = useState({
        title:"",
        details:"",
        date:""
        })

    const { id } = useParams()

    //load product

    const loadFormData = async() => {
        axios.get(`http://127.0.0.1:8000/todo/${id}`)
        .then(response => {
            const { title, details, date } = response.data;
            console.log(response.data)
            setFormData({ title, details, date })

        })
    }

    useEffect(() => {
        loadFormData()
    }, [id])


    const handleSubmit = (event) => {
        event.preventDefault();

        // Update data on the server
        const updateUrl = `http://127.0.0.1:8000/todo/${id}/`;
        axios.put(updateUrl, formdata)
        .then(response => {
            console.log('Data updated successfully', response.data);
            // Redirect or perform any necessary actions after updating
        })
        .catch(error => {
            console.error('Error updating data', error);
        });
    }

    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormData({
      ...formdata,
      [name]: value,
    });
    }

  return (
    <div>
        <h2>Update Item Here</h2>
        <form action='' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='title'>Title</label>
                <input type='text' autoComplete='off'
                value={formdata.title}
                onChange={handleInput}
                name='title' id='title'/>
            </div>

            <div>
                <label htmlFor='details'>Details</label>
                <input type='text' autoComplete='off'
                value={formdata.details}
                onChange={handleInput}
                name='details' id='details'/>
            </div>

            <div>
                <label htmlFor='date'>Date</label>
                <input type='datetime-local' autoComplete='off'
                value={formdata.date}
                onChange={handleInput}
                name='date' id='date'/>
            </div>

            <button type='submit'>Update</button>
        </form>

    </div>

  )
}
