import React from 'react'
import ReviewItem from './ReviewItem'


// Purpose of the component is take a list of review data and render each individual review using another component - ReviewItem 

const ReviewList = ({ reviews, setReviews, setEditing, setForm }) => {  // ({reviews}) - this is how ReviewList receives it's props passed down from 'App' - Parent Component. 
                                       // {} - object destructuring. React bundles all props into a single prop object. Destructuring enables access to all props
    
    
    // handleDelete funtion - Purpose: removing a specific review from the displayed list when a user clicks the "Delete" button
    const handleDelete = id => {
      const updatedReviews = reviews.filter(review => review.id !== id)
      setReviews(updatedReviews)
    }
    
    // 1. Event Trigger: 
    //         - The handleDelete function is passed as a prop from ReviewList.jsx to each ReviewItem.jsx component.
    //         - When the "Delete" button is clicked, the handleDelete function is called, 
    //         - The review 'id' from the 'ReviewItem'component is passed to the handleDelete function
    //  2. reviews.filter
    //         - reviews: This refers to the current array of all review objects
    //         - .filer() JS array method, creates a new array containing only those elements from the original array
    //               - *provided* callback function returns a 'true'
    // 2. review => review.id !== id
    //         - This is the callback function executed for each 'review' object in the 'reviews' array
    //         - review: this represents the current review object being examined by the filter method
    //         - review.id !== id: This is the test condition
    //               - it checks if the 'id' of the 'current review' is not equal to the 'id' that was passed to the handleDelete function 
    // 2. Results of the condition
    //         - If 'review.id' is not equal to the 'id' we want to delete, the condition 'true', and that review object is 'included' in the new updatedReviews array.
    //         - If 'r'eview.id' is equal to the 'id' we want to delete, the condition is 'false', and that review object is 'excluded' from the new updatedReviews array.
    // 3. setReviews(updatedReviews): 
    //      - 'updateReviews' is passed to 'setReviews', 
    //      - telling React to replace the current reviews state (old array) with this updatedReviews array (new array)
    //      - the review that was just "deleted" (i.e., excluded from the new array) will no longer be displayed in the UI.


    // handleEdit funtion - Purpose: enabling users to modify existing reviews. It works by identifying the specific review to be edited, populating the form with its data, and then switching the application's state to "edit mode"
    const handleEdit = id => {
      const editedPost = reviews.filter(review => review.id === id)  // this line is responsible for finding the specific review object that the user wants to edit.
      setForm(editedPost[0])
      setEditing(true)
    }

    // 1. Trigger: When the 'edit' button is pressed, the review 'id' is passed to the handleEdit function
    // 2. editedPost: reviews.filter 
    //      - reviews: refers to the array of all reivew objects 
    //      - .filter() - JavaScript array method, creates a new array containing all elements of original array
    // 2. editedPost: 'review => review.id === id' 
    //      - 'review =>' Callback function, to determine which review object to include in the 'editedPost' array
    //      -  'review.id' accesses the unique ID of the current review object
    //      - '===' strictly equal operator, checks if the 'id' of the current review is equal ot the'id' that was paased into the handleEdit function
    //      - if the condition 'review.id === id' is true, that review object is included in the editedPost array. If false the review object is skipped.
    // 3. setForm: 'editedPost[0]
    //      - setForm setter function is called with the 'review to edit' object. 
    //      - editedPost[0]: [0] Array indexing is needed to access the first element in the array, regardless if it the only element.
    //      - This updates the 'form state' in App.jsx to contain the data of the review to be edited
    //      - The form input fields are 'controlled components, so this populates the input fields with the name and review text
    // 4. Set Editing Mode: 'setEditing(true)'
    //      - The setEditing 'setter' function is called to set 'editing' to (true)
    //      - The editing boolean prop is passed to Form.jsx which changes the forms behaviour
    //          - The submit button's text changes from "Submit" to "Update".
    //          - The 'onSubmit' handler will now call 'handleUpdate' instead of 'handleSubmit' 
    



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