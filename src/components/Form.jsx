import React from 'react'
import uuid from 'react-uuid' // The react-uuid library generates Universally Unique Identifiers 


// 'Form' Component - Purpose: For handling information inputted into the form by the user.

const Form = ({form, reviews, editing, setForm, setReviews, setEditing}) => {   
  

    // handleChange function - Purpose: To handle input changes in the form made by the user.

    const handleChange = e => {               // 'e' (event) is the function parameter, when an event happens the browser creates an 'Event object' and passes it as an argument to the function assigned to handle that event.
        const { name, value } = e.target      // This line extracts the 'name' and 'value' properties from the e.target object.
        setForm({...form, [name]: value})     // this line creates a new form object where the 'name' property (feedback & review) is updated with its new value
    }                                        
    //const [form, setForm] = useState({feedback: "", review: "", id: uuid()})

    // 1. Event Trigger: The handleChange function is assigned as the 'onChange' event listener to the input (for feedback) and textarea (for review)
    // 2. Event Object Received: When an OnChange event happens, the browser provides an 'event object' as an 'argument' to the handleChange function
    // 3. Object Destructuring: Two new local variables are created - 'name' (the 'input' & 'textarea' name attribute) and 'value' (what the user inputted) 
    // 3. E.Target: refers to the DOM element that triggered the event, i.e. 'input' element or 'textarea' element
    // 3. E.Target.Name: This property accesses the 'name attribute' of the input and textarea elements
    // 3. E.Target.Value: This property looks the 'current value' of the input and textarea elements
    // 4. setForm: 'setter' function called to update the 'form' state variable.
    // 4. Spread Operator: ...form - this creates a 'new' object by copying the 3 existing values key-value pairs from the current 'form' state.  
    // 4. Spread Operator: ...form - the original state object isn't modified. Instead a new 'copied' one is created with the desired changes.
    // 4. Computed Property Name: [name] - This is the copmuted name 'property' for the new object and is based on the name variable from e.target.name
    


    // handleSubmit function - Purpose: To handle the submission of the form when the user wants to add a new review.

    const handleSubmit = e => {
      e.preventDefault()                                // The preventDefault method stops the browser's default form submission behavior (page reload)
      setReviews([...reviews, form])                    // This is the core logic for creating a new array and adding the latest review to that array.
      setForm({feedback: "", review: "", id: uuid()})   // Resets the forms input fields, clearing them out for the next entry
    }
    // const [reviews, setReviews] = useState([])

    // 1. Event Trigger: The handleSubmit function is assigned as the onSubmit event listener to the <form> element. 
    // 1. Event Trigger: When "Submit" pressed, the onSubmit event fires, and the handleSubmit function is executed.
    // 2. e.preventDefault() - Stops the browser's default form submission behavior (page reload)
    // 3. setReviews - 'setter' function called to update 'reviews state variable
    // 3. Spread Operator: ...reviews - this unpacks or spreads all the existing elements from the reviews array into a new array being created.
    // 3. Form Object: form - this represents the newly submitted review submitted and is added as the last element in the new array.



    // handleSubmit function - Purpose: Processing the form data when the user is editing an existing review. It updates the specific review in the list and then resets the form.

    const handleUpdate = e => {
      e.preventDefault()
      setEditing(false)
      const updatedReviews = reviews.map(review => review.id === form.id ? form : review)
      setReviews(updatedReviews)
      setForm({feedback: "", review: "", id: uuid()})   //Resets the forms input fields, clearing them out for the next entry
    }
    // const [editing, setEditing] = useState(false)

    // 1. Event Trigger:

    // reviews.map: map array used to iterate over the existing array and return a new array
    // reivew =>: This is a 'callback' function, which map() executes for each reivew in the array
    // 


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
      onChange={handleChange}   // Onchange 'event listener' assigned to the 'Input' element in order to call the handleChange function. 
      />
      
      <label htmlFor="review">Review</label>
      
      <textarea 
      placeholder="Enter your review" 
      id="review"               // corresponding 'matching' value to the 'htmlfor' value
      name="review"             // handleChange function
      value={form.review}       // This makes the input a 'controlled component'. Its displayed value is synchronized with the feedback property of your form state.
      onChange={handleChange}   // Onchange 'event listener' assigned to the 'Textarea' element in order to call the handleChange function. 
      />
      
      <button type="submit">{editing ? "Update" : "Submit"}</button>
    
    </form>
    </>
  )
}

export default Form