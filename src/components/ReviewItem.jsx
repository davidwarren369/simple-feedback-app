import React from 'react'
import { FaTrash, FaEdit } from "react-icons/fa";

// Purpose of the component is to display the details of each reivew submitted by the user.

const ReviewItem = ({review, handleDelete, handleEdit}) => {  // ({review}) - where the component receives it's props from ReviewList, in this instance it is the actual review object.
  return (                          // Destructuring directly extracts the review property from that props object into a local variable .
    <>
    <div className="reviewItem">
        <h3 className="name">Name:</h3>
        <h2>{review.name}</h2>  {/* Renders the name part of the review - {} used for embedding JS expression within JSX - review.name accesses the 'name' property from the review object */}
        <h3 className="review">Review:</h3>
        <p className="reviewContent">{review.review}</p>      {/* Renders the review part of the review - {} used for embedding JS expression within JSX - review.review accesses the 'review' property from the review object */}
        <div className='buttons'>
          <button onClick={() => handleDelete(review.id)}>
            <FaTrash/> Delete
          </button>
          
          <button onClick={() => handleEdit(review.id)}> {/*when edit button is clicked the review 'id' */}
            <FaEdit/> Edit                               {/*is passed to the 'handleEdit' function*/}
          </button>
        </div>
    </div>
    </>
  )
}

export default ReviewItem


// ({review}) is the local variable created by destructuring, and it holds the value of the review prop passed down from the parent. 
// This makes it convenient to use review.name and review.review directly within the component's JSX.