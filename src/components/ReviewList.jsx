import React from 'react'
import ReviewItem from './ReviewItem'


// Purpose of the component is take a list of review data and render each individual review using another component - ReviewItem 

const ReviewList = ({ reviews, setReviews, setEditing, setForm }) => {  // ({reviews}) - this is how ReviewList receives it's props passed down from 'App' - Parent Component. 
                                       // {} - object destructuring. React bundles all props into a single prop object. Destructuring enables access to all props
    
    
    // handleDelete funtion - Purpose: 
    const handleDelete = id => {
      const updatedReviews = reviews.filter(review => review.id !== id)
      setReviews(updatedReviews)
    }
    
    // handleEdit funtion - Purpose: 
    const handleEdit = id => {
      const editedPost = reviews.filter(review => review.id === id)  // this line is responsible for finding the specific review object that the user wants to edit.
      setForm(editedPost[0])
      setEditing(true)
    }
    // const [editing, setEditing] = useState(false)

    // 1. Trigger: When the 'edit' button is pressed, the review 'id' is passed to the handleEdit function
    // 2. editedPost: reviews.filter 
    //      - reviews: refers to the array of all reivew objects 
    //      - .filter() - JavaScript array method, creates a new array containing all elements of original array
    // 2. editedPost: 'review => review.id === id' 
    //      - 'review' represents the current review object
    //      -  'review.id' accesses the unique ID of the current review onject
    //      - '===' strictly equal operator, checks if the 'id' of the current review is equal ot the'id' that was paased into the handleEdit function
    //      - if the condition 'review.id === id' is true, that review object is included in the editedPost array. If false the review object is skipped.
    // 3. setForm: 'editedPost[0]
    //      - setForm setter function is called with the 'review to edit' object. 
    //      - This updates the 'form state' in App.jsx to contain the data of the review to be edited
    //      - The form input fields are 'controlled components, so this populates the input fields with the feedback and review text
    // 4. Set Editing Mode: 'setEditing(true)'
    // - The setEditing 'setter' function is called to set 'editing' to (true)
    // - The editing boolean prop is passed to Form.jsx which changes the forms behaviour
    //        - The submit button's text changes from "Submit" to "Update".
    //        - The 'onSubmit' handler will now call 'handleUpdate' instead of 'handleSubmit' 
    



    return (
    <>
    <div className="reviewList">
    <h2>Reviews</h2>
        {/* The core logic for rendering the reviews*/}
        {reviews.map((review) => { // 'reviews' is the array of review objects, passed as a prop to ReviewList
                                   // map() function executes the code inside its callback 
                                   // (reivew) => { return ...} - is the callback function passes to 'map'
            return <ReviewItem 
                      key={review.id} 
                      review={review} 
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}/>
            // the above code renders an instance of the ReviewItem component
            // For every 'review' object in the 'reviews' array, one 'ReviewItem' component will be created
            // 'key' prop is used to identify reviews that have been added, changed or removed,
            // key must be unique, the 'review' objects have a unique UUID - 'review.id' is an ideal value for 'key'. 
        })}
    </div>
    
    </>
    
  )
}

export default ReviewList