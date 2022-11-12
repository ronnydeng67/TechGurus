import csrfFetch from "./csrfFetch";

export const RECEIVE_REVIEW = '/RECEVIE_REVIEW';
export const RECEIVE_REVIEWS = '/RECEVIE_REVIEWS';
export const CREATE_REVIEW = '/CREATE_REVIEW';
export const UPDATE_REVIEW = '/UPDATE_REVIEW';
export const REMOVE_REVIEW = '/REMOVE_REVIEW';

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const getReview = reviewId => ({ reviews }) => (reviews ? reviews[reviewId] : null);
export const getReviews = ({ reviews }) => (reviews ? Object.values(reviews): []);

export const fetchReviews = (itemId) => async dispatch => {
    const res = await csrfFetch(`/api/items/${itemId}/reviews`);
    const data = await res.json();
    dispatch(receiveReviews(data));
}

export const fetchReview = (itemId, reviewId) => async dispatch => {
    const res = await csrfFetch(`/api/items/${itemId}/reviews/${reviewId}`);
    const data = await res.json();
    dispatch(receiveReview(data));
}