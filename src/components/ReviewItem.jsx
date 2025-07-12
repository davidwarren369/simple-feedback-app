import React from 'react'

const ReviewItem = ({review}) => {
  return (
    <div>
        <h2>{review.feedback}</h2>
        <p>{review.review}</p>
    </div>
  )
}

export default ReviewItem