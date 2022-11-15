import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, getUser } from "../../store/users";
import Rating from '@mui/material/Rating';
import moment from "moment";
import { deleteReview } from "../../store/reviews";

const Review = ({ review, sessionUser }) => {
    const dispatch = useDispatch();
    const reviewer = useSelector(getUser(review.reviewerId))
    
    useEffect(() => {
        dispatch(fetchUser(review.reviewerId))
    },[dispatch])

    const handleDelete = e => {
        e.preventDefault();
        dispatch(deleteReview(review))
        window.location.reload(false)
    }
    

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
                        {moment(review.createdAt).startOf("day").fromNow()}
                    </div>
                    <div className="review-body">
                        {review.body}
                    </div>
                    <div className="delete-review">
                        {sessionUser.id === reviewer.id ? 
                            <button id="delete-review-button" onClick={handleDelete}>delete</button> :
                            ""
                        }
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