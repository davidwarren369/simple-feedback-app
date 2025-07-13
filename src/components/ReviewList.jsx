import React from 'react'
import ReviewItem from './ReviewItem'


// Purpose of the component is take a list of review data and render each individual review using another component - ReviewItem 

const ReviewList = ({ reviews }) => {  // ({reviews}) - this is how ReviewList receives it's props passed down from 'App' - Parent Component. 
                                       // {} - object destructuring. React bundles all props into a single prob object. Destructuring enables access to all props
    return (
    <>
    <div className="reviewList">
    <h2>Reviews</h2>

        {/* The core logic for rendering the reviews*/}
        {reviews.map((review) => { // 'reviews' is the array of review objects, passed as a prop to ReviewList
                                   // map() function executes the code inside its callback 
                                   // (reivew) => { return ...} - is the callback function passes to 'map'
            return <ReviewItem key={review.id} review={review}/>
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