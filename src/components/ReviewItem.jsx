import React from 'react'

// Purpose of the component is to display the details of each reivew submitted by the user.

const ReviewItem = ({review}) => {  // ({review}) - where the component receives it's props from ReviewList, in this instance it is the actual review object.
  return (                          // Destructuring directly extracts the review property from that props object into a local variable .
    <div className="reviewItem">
        <h3 className="name">Name:</h3>
        <h2>{review.feedback}</h2>  {/* Renders the feedback part of the review - {} used for embedding JS expression within JSX - review.feedback accesses the 'feedback' property from the review object */}
        <h3 className="review">Review:</h3>
        <p className="reviewContent">{review.review}</p>      {/* Renders the review part of the review - {} used for embedding JS expression within JSX - review.review accesses the 'review' property from the review object */}
    </div>
  )
}

export default ReviewItem


// ({review}) is the local variable created by destructuring, and it holds the value of the review prop passed down from the parent. 
// This makes it convenient to use review.feedback and review.review directly within the component's JSX.