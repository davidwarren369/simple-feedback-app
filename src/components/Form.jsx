import React, { useState } from 'react'
// import {uuid} from "uuidv4"
// import { v4 as uuidv4 } from 'uuid'
import uuid from 'react-uuid'

const Form = () => {
  
    const [form, setForm] = useState({feedback: "", review: "", id: uuid()})
  
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({...form, [name]: value})
    }


    return (
    <form>

      <h2>Leave a Review</h2>
      
      <label htmlFor="Feedback">Name</label>
      
      <input 
      type="text" 
      placeholder="Enter your feedback" 
      id="feedback" 
      name="feedback" 
      autoComplete='off'
      value={form.feedback}
      onChange={handleChange}
      />
      
      <label htmlFor="Review">Review</label>
      
      <textarea 
      placeholder="Enter your review" 
      id="review" 
      name="review" 
      value={form.review}
      onChange={handleChange}
      />
      
      <button type="submit">Submit</button>
    
    </form>
  )
}

export default Form