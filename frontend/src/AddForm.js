import React, { useState } from 'react'
import './AddForm.css';

export const AddForm = () => {
    
    const[userRigestertion, setuserRigestertion] = useState({
        username:"",
        email:"",
        phone:""
    })

    const[records, SetRecords] = useState([])
    
    const handleInput = (e) => {
        const value = e.target.value
        const name = e.target.name
        // console.log(name, value)
        setuserRigestertion({...userRigestertion, [name]: value})
                
        
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const newRecords = {...userRigestertion, id: new Date().getTime().toString()}
        console.log(newRecords)
        SetRecords([...records, newRecords])

        //for again show all data in screen after submission 
        setuserRigestertion({username:"", email:"", phone:""})
        
    }


  return (
    <>
        <form action='' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>User Name </label>
                <input type='text' autoComplete='off' placeholder='Enter Your User Name'
                value={userRigestertion.username}
                onChange={handleInput}
                name='username' id='username'/>
            </div>

            <div>
                <label htmlFor='email'>Email</label>
                <input type='text' autoComplete='off' placeholder='Enter Your Email'
                value={userRigestertion.email}
                onChange={handleInput}
                name='email' id='email'/>
            </div>

            <div>
                <label htmlFor='phone'>Phone</label>
                <input type='text' autoComplete='off' placeholder='Enter Your Phone'
                value={userRigestertion.phone}
                onChange={handleInput}
                name='phone' id='phone'/>
            </div>

            <button className='btn' type='submit'>Submit</button>
        
        </form>

        <>
            {
                records.map((currElem) => {
                    return (
                        <div className='dataShow'>
                            <p>{records.username}</p>
                        </div>
                    )

                }

                )
            }
        </>

    </>
  )
}
