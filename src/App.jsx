import React, {useState} from 'react'               // Import 'React' required to bring in the entire core functionality of the React library
import Form from './components/Form'
import ReviewList from './components/ReviewList'
import uuid from 'react-uuid'                       // The react-uuid library generates Universal Unique Identifier 
import './App.css'                                  // all css styling in app.css flows downwards and is applied to the children components


function App() {  
  
//Hooks

  //useState Hook - Purpose: To track and manage the state (data) entered into the input fields of the form
  const [form, setForm] = useState({name: "", review: "", id: uuid()})   // 'name' and 'review' come from the 'name' attributes in the 'input' and 'textare' form elements
                                                                                                                                                  
  // useState Hook - Purpose: To manage the list of reviews submitted by users
  const [reviews, setReviews] = useState([])

  // useState Hook - Purpose: To manage a boolean value that indicates whether the appl is in "edit" mode for a review OR "submit" mode for the form.
  const [editing, setEditing] = useState(false)


  return (
    <>
      <div className="app">
        <h1>Feedback App</h1> 
        <Form   
          form={form}                // Method for passing the properties down to the Form 'child' component 
          setForm={setForm}          // property(prop)={variable}
          reviews={reviews}          
          setReviews={setReviews}
          editing={editing}
          setEditing={setEditing}
          /> 
            
        
        <ReviewList 
        reviews={reviews} 
        setReviews={setReviews}  
        setForm={setForm}
        setEditing={setEditing}
        /> 
      </div>
      
    </>
  )
}

export default App


