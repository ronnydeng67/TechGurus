import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, getUser } from "../../store/users";
import Rating from '@mui/material/Rating';
import moment from "moment";
import { deleteReview } from "../../store/reviews";
import { Modal } from "@mui/material";
import { updateReview } from "../../store/reviews";


const Review = ({ review, sessionUser }) => {
    const dispatch = useDispatch();
    const reviewer = useSelector(getUser(review.reviewerId));
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);
    const [newRating, setNewRating] = useState(review.rating);
    const [newTitle, setNewTitle] = useState(review.title);
    const [newBody, setNewBody] = useState(review.body);
    const [editError, setEditError] = useState(false)
    
    useEffect(() => {
        dispatch(fetchUser(review.reviewerId))
    },[dispatch])

    const handleDelete = e => {
        e.preventDefault();
        dispatch(deleteReview(review))
        window.location.reload(false)
    }
    
    // const handleEditRating = e => {
    //     e.preventDefault();

    // }

    // const handleEditTitle = e => {
    //     e.preventDefault();
    //     setNewTitle(e.target.value)
    // }

    // const handleEditBody = e => {
    //     e.preventDefault();
    //     setNewBody(e.target.value)
    // }

    const update = field => {
        let setState
        switch (field) {
            case 'rating':
                setState = setNewRating;
                break;
            case 'title':
                setState = setNewTitle;
                break;
            case 'body':
                setState = setNewBody;
                break
            default:
                throw Error("something went wrong!")
        }
        return e => setState(e.target.value)
    }

    const handleChange = e => {
        if (newRating !== 0 && newBody.length && newTitle.length) {
            dispatch(updateReview({
                title: newTitle,
                body: newBody,
                rating: newRating,
                reviewerId: review.reviewerId,
                itemId: review.itemId,
                id: review.id
            }))
            window.location.reload(false);
        } else {
            setEditError(true)
        }
    }


    if (reviewer) {
        return (
            <div className="review-container">
                <div className="review-left">{reviewer.name}</div>
                <div className="review-right">
                    <div className="review-title">
                        <div className="rating">
                            <Rating name="read-only"
                            precision={0.5}
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
                        {sessionUser?.id === reviewer.id ? 
                            <div className="edit-delete">
                                <button id="edit-review-button" onClick={handleOpen}>edit</button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <div className="edit-review-modal">
                                            <div className="edit-text">Edit your review</div>
                                            {editError ? <div className="edit-error">
                                                "Please fill out all the fields below!"
                                            </div> : "" }
                                            <div className="edit-review-container">
                                                <div className="edit-rating">
                                                    <div className="rating-text">
                                                        Rating*
                                                    </div>
                                                    <Rating 
                                                    name="simple-controlled" 
                                                    value={newRating}
                                                    onChange={update('rating')}
                                                    precision={0.5}
                                                    required
                                                    />
                                                </div>
                                                <div className="edit-title">
                                                    <div className="title-text">Title* </div>
                                                    <input type="text" id='edit-title' onChange={update('title')} value={newTitle} required/>
                                                </div>
                                                <div className="edit-body">
                                                    <div className="body-text">Your review* </div>
                                                    <textarea name="" id="edit-body" cols="60" rows="8" onChange={update('body')} value={newBody} required></textarea>
                                                </div>
                                                <div className="edit-button-container">
                                                    <button id="edit-button" onClick={handleChange}>Submit Change</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal>
                                <button id="delete-review-button" onClick={handleDelete}>delete</button>
                            </div> :
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