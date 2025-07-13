import React, {useState} from 'react'  // required to bring in the entire core functionality of the React library
import Form from './components/Form'
import ReviewList from './components/ReviewList'
import uuid from 'react-uuid' // The react-uuid library generates Universally Unique Identifiers 
import './App.css'     // all css styling in app.css flows downwards and is applied to the children components


// App is the parent, it can pass 'props' or properties down to it's children components (i.e. Form, ReviewList)
// Props are a way of passing data from the parent to the child components
// One-way data flow. Data always flows from parent to child

// If a child needs to communicate back up to its parent (input changed, button click), 
// it must call a 'function' that was passed down as a prop from the parent. 
// The parent function then updates the parent's state, which in turn causes the parent to re-render and pass down new props to the child.


function App() {  
  

  //useState Hook - Tracks the state (data), inputted into the inputs on the form, 
  //  state var, setter func          inital state (value), 
  const [form, setForm] = useState({feedback: "", review: "", id: uuid()})  //form is a variable, holds the initial value of the state
                                                                            //setForm, function called to update the 'form' state
                                                                            // uuid function is called so unique IDs are added to each user interaction

  // useState Hook - For managing the list of reviews.
  //  state var, setter func   inital state (empty array)
  const [reviews, setReviews] = useState([])


  return (
    <>
      <div className="app">
        <h1>Feedback App</h1> 
        <Form   
          form={form}  // passing the properties down to the Form 'child' component 
          setForm={setForm}  // property(prop)={variable}
          reviews={reviews}  // passing the properties down to the Form and ReviewList 'child' components
          setReviews={setReviews}/>   
        
        <ReviewList reviews={reviews}/> {/* property={variable} */}
      </div>
      
    </>
  )
}

export default App


