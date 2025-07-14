import React from 'react'
import uuid from 'react-uuid' // The react-uuid library generates Universally Unique Identifiers 


// Form component - for handling user inputted information
const Form = ({form, reviews, editing, setForm, setReviews, setEditing}) => {    //destructure the props
  

    //const [form, setForm] = useState({feedback: "", review: "", id: uuid()})
    // handleChange function - Handles 'input' changes in the form buy the user. 
                                             // Object Destructuring { name, value } - creates two new variables: name (holding the input's name attribute) and value (holding the input's current value)
    const handleChange = (e) => {            // 'e' is the 'event object', that contains information about the event that occured. 
        const { name, value } = e.target     // (e.target.name - looks at the "name" attribute of the input element) & (e.target.value - looks at the current value of the input element)
        setForm({...form, [name]: value})    // setForm - setter function. ...form - spread operator (spread syntax): ensures that other properties of the form object (like id) are unchanged and not accidentally overwritten
    }                                        // [name]:value - [name] = computed property name. Taking the "name" and set it equal to the value.

    
    // const [reviews, setReviews] = useState([]) 
    // handleSubmit function - Handles the submission of the form

    const handleSubmit = e => {
      e.preventDefault()   //Prevents the browser's default form submission behavior (page reload)
      setReviews([...reviews, form])   // ...reviews - spread operator creates a new array in the 'reviews' objects. 'form' is added as an item to the array (containing: feedback, review & id data) 
      setForm({feedback: "", review: "", id: uuid()})   //Resets the forms input fields, clearing them out for the next entry
    }
    
    const handleUpdate = e => {
      e.preventDefault()
      setEditing(false)
      const updatedReviews = reviews.map(review => review.id === form.id ? form : review)
      setReviews(updatedReviews)
      setForm({feedback: "", review: "", id: uuid()})   //Resets the forms input fields, clearing them out for the next entry
    }



    return (
    <>
    
    <form className="form" onSubmit={editing ? handleUpdate : handleSubmit}> {/* handleSubmit fuction is called when the user submits the form*/}

      <h2>Leave a Review</h2>
     
      <label htmlFor="feedback">Name</label>   {/* htmlFor is a 'prop' - Its value must match the id attribute of the input element it's labeling. */}
                                               {/* Used to explicitly associate the <label> with a specific form control, i.e. the <input>  */}
                                               {/* When you click on a label associated with an input, it often focuses or activates the corresponding input field, making it easier for users to interact with your forms. */}
      
      <input 
      type="text" 
      placeholder="Enter your feedback" 
      id="feedback"             // corresponding 'matching' value to the 'htmlfor' value
      name="feedback"           // handleChange function
      autoComplete='off'
      value={form.feedback}     // This makes the input a 'controlled component'. Its displayed value is synchronized with the feedback property of your form state.
      onChange={handleChange}   // The 'event listener'. Whenever a user types into this input, the handleChange function is called.
      />
      
      <label htmlFor="review">Review</label>
      
      <textarea 
      placeholder="Enter your review" 
      id="review"               // corresponding 'matching' value to the 'htmlfor' value
      name="review"             // handleChange function
      value={form.review}       // This makes the input a 'controlled component'. Its displayed value is synchronized with the feedback property of your form state.
      onChange={handleChange}   // The 'event listener'. Whenever a user types into this input, the handleChange function is called.
      />
      
      <button type="submit">{editing ? "Update" : "Submit"}</button>
    
    </form>
    </>
  )
}

export default Form