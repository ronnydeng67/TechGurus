import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, getUser } from "../../store/users";
import Rating from '@mui/material/Rating';

const Review = ({ review }) => {
    const dispatch = useDispatch();
    const reviewer = useSelector(getUser(review.reviewerId))
    
    console.log(review.reviewerId)
    useEffect(() => {
        dispatch(fetchUser(review.reviewerId))
    },[])
    

    if (reviewer) {
        return (
            <div className="review-container">
                <div className="review-left">{reviewer.name}</div>
                <div className="review-right">
                    <div className="review-title">
                        <div className="rating">
                            <Rating name="read-only"
                            precision={0.25}
                            value={review.rating} 
                            readOnly 
                            id="rating"/>
                        </div>
                        <div className="title">
                            {review.title}
                        </div>
                    </div>
                    <div className="post-date">
                        {review.createdAt}
                    </div>
                    <div className="review-body">
                        {review.body}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>Loading....</div>
        )
    }
}
 
export default Review;