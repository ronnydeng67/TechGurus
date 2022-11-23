import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useParams } from 'react-router-dom';
import { fetchItem, getItem } from '../../store/items';
import { FaExchangeAlt } from 'react-icons/fa';
import { FiHeadphones, FiShield } from 'react-icons/fi';
import { MdHandyman, MdOutlineStore, MdLocalShipping, MdShoppingCart } from 'react-icons/md';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment';
import './ItemShowPage.css';
import { addToCart, editCart } from '../../store/carts';
import { useHistory } from 'react-router-dom';
import { createReview, fetchReviews, getReviews } from '../../store/reviews';
import Review from './Reivew';
import { Rating } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


const ItemShowPage = () => {
    const history = useHistory();
    const { itemId } = useParams();
    const dispatch = useDispatch();
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const sessionUser = useSelector(state => state.session.user);
    const state = useSelector(state => state);
    const reviews = useSelector(getReviews);
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [reviewError, setReviewError] = useState(false)
    const lol = useSelector(getItem(itemId))
    const carts = useSelector(state => state.carts)

    const handleRating = e => {
        setRating(e.target.value)
    }

    const handleTitle = e => {
        setTitle(e.target.value)
    }

    const handleBody = e => {
        setBody(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (sessionUser) {
            if (title.length && body.length && rating !== 0) {
                dispatch(createReview({
                    title: title,
                    body: body,
                    rating: rating,
                    reviewerId: sessionUser.id,
                    itemId: itemId
                }))
                window.location.reload(false);
            } else {
                setReviewError(true)
            }
        } else {
            history.push('/login')
        }
    }

    console.log(reviews)

    useEffect(() => {
        dispatch(fetchReviews(itemId))
        dispatch(fetchItem(itemId)).then((res) => {
            setItem(res)
        }).then(() => {
            setIsLoading(false)
        })
    },[itemId, dispatch])


    const addItem = e => {
        // e.preventDefault();
        if (state.session.user) {
            dispatch(addToCart({itemId: itemId, userId: sessionUser.id, quantity: 1}))
        } else {
            history.push('/login')
        }
    }

    let month
    if(lol) {
        if((lol.price > 200 && lol.price < 500)) {
            month = 12;
        } else if (lol.price > 500 && lol.price < 800) {
            month = 24;
        } else if (lol.price < 200){
            month = 4;
        } else {
            month = 36;
        }
    }

    const returnDate = moment().add(15, 'days').format('MMM Do')
    const pickup = moment().add(2, 'days').format('dddd, MMM Do')
    const ship = moment().add(3, 'days').format('dddd, MMM Do')

    const handleTotalTech = () => {
        // alert("Sorry, Totaltech is unavailable at this moment, please check back with us later!")
        if (state.session.user) {
            dispatch(addToCart({itemId: 27, userId: sessionUser.id, quantity: 1}))
        } else {
            history.push('/login')
        }
    }

    if(isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="page-container">
                <div className="item-container">
                    <div className="item-left">
                        <div className="item-name">{lol.name}</div>
                        <div className="item-pic" style={{textAlign: 'center'}}>
                            <img width='auto' height='350' style={{margin: '150px'}} src={lol.photoUrl} alt="" />
                        </div>
                    </div>
                    <div className="item-right">
                        <div className="item-price">
                            <div className="price-text">
                                <div className="price">
                                    {lol.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}
                                </div>
                                <div className='price-divider'>
                                    <div style={{flex: '1 0 40%', borderLeft: '1px', border: '1px solid black', height: '8px'}}></div>
                                    <div className='item-or'>or</div>
                                    <div style={{flex: '1 0 40%', borderLeft: '1px', border: '1px solid black', height: '8px'}}></div>
                                </div>
                                <div className="payment">
                                    <div className="monthly">
                                        ${((lol.price) / month).toFixed(2)}/mo.*
                                    </div>
                                    <div className="four-payment">
                                        suggested payments with
                                    </div>
                                    <div className="payment-terms">
                                        {month}-Month financing
                                    </div>
                                    <div className="show-more">
                                        <Link to="https://snapfinance.com/finance/electronics">Show me how </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="return-box-container">
                                <div className="return-box">
                                    <div className="return-icon">
                                        <FaExchangeAlt style={{paddingTop: '20px'}}/>
                                    </div>

                                    <div className="days-text">
                                        15-DAY FREE & EASY RETURNS
                                        <div className="return-details">
                                            If received today, the last day to return this item would {returnDate}.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="total-tech-container">
                            <div className="total-tech-box">
                                <div className="tech-1">
                                    TechGurus
                                    TotalTech
                                    <div className="inside-tech-1">
                                        The membership you and your tech deserve.
                                    </div>
                                </div>
                                <div className="tech-2">
                                    <FiHeadphones style={{color: "green", marginRight: "10px"}}/>
                                    Free TechSquad tech supoort available 24/7/365
                                </div>
                                <div className="tech-3">
                                    <FiShield style={{color: "green", marginRight: "10px"}}/>
                                    Up to 24 months of product protection on most 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TechGurus purchases, with active membership
                                </div>
                                <div className="tech-4">
                                    <MdHandyman style={{color: "green", marginRight: "10px"}}/>
                                    Free delivery and standard installation
                                </div>
                                <div className="tech-price">
                                    $199.99 per year
                                </div>
                                <div className="learn-about">
                                    <button id='total-tech' onClick={handleTotalTech}>Purchase Totaltech</button>
                                </div>
                            </div>
                        </div>
                        <div className="get-it-container">
                            <div className="get-it-title" style={{color: "green", fontFamily: "bestbuy-medium", fontSize: ""}}>
                                Get it in 3 days
                            </div>
                            <div className="pick-up" style={{fontSize: "0.8rem"}}>
                                <MdOutlineStore style={{fontSize: "large"}}/>
                                <p>Pickup:</p>&nbsp;Order now for pickup on {pickup} at Union Square
                            </div>
                            <div className="free-shipping" style={{fontSize: "0.8rem"}}>
                                <MdLocalShipping style={{fontSize: "large"}} />
                                <p>Free Shipping:</p>&nbsp;Get it by {ship}.
                            </div>
                        </div>
                        <div className="add-cart-container">
                            <div className="add-cart-button">
                                <button id='add-cart' onClick={addItem}>
                                    <MdShoppingCart  style={{marginRight: "10px"}}/>
                                     Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="more-container">
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography id="overview-title">Overview</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography component={'div'}>
                                <div className="overview-container">
                                    <div className="description">
                                        <div className="description-left">Description</div>
                                        <div className="description-right">{lol.description}</div>
                                    </div>
                                    <div className="feature">
                                        <div className="feature-left">Features</div>
                                        <div className="feature-right">{lol.details.split(/\r?\n/).map(detail => <li key={detail}>{detail}</li>)}</div>
                                    </div>
                                </div>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography id="review-title">Reviews</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography component={'div'}>
                                
                                {reviews.length ? reviews.map(review => (
                                    <Review key={review.id} 
                                    sessionUser={sessionUser} 
                                    review={review}
                                    />
                                ))
                                    :
                                    <div className="empty-review" style={{fontSize: "large"}}>
                                        This product has no reviews yet.
                                    </div>
                                }

                                {reviews.every(review => (
                                    review.reviewerId !== sessionUser?.id
                                )) ? 
                                <div className="write-review-container">
                                        <div className="leave-review-text">
                                            Leave a review
                                        </div>
                                        <div className="leave-review">
                                            <div className="write-review-left">
                                                {reviewError ? 
                                                    <div className="review-error">
                                                        Please fill out all the fields on the right, thank you!!
                                                        <br />
                                                        <ErrorOutlineIcon id="error-icon"/>
                                                    </div>
                                                        :
                                                        ""
                                                    }
                                                
                                            </div>
                                            <div className="write-review-right">
                                                <div className="write-review-rating">
                                                    <div className="rating-text">
                                                        Rating
                                                    </div>
                                                    <div className="write-rating">
                                                        <Rating
                                                            name="simple-controlled"
                                                            value={rating}
                                                            onChange={handleRating}
                                                            precision={0.5}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="write-review-title">
                                                    <div className="title-text">Title </div>
                                                    <input type="text" id='title-input' onChange={handleTitle} value={title}required/>
                                                </div>
                                                <div className="write-review-body">
                                                    <div className="body-text">Your review </div>
                                                    <textarea name="" id="body-input" cols="40" rows="5" onChange={handleBody} value={body} required></textarea>
                                                </div>
                                                <div className="submit-review-container">
                                                    <button id="submit-review-button" onClick={handleSubmit}>Submit Review</button>
                                                </div>
                                                <div className="require-text">
                                                    All fields are require to filled in order to leave a review!
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                :
                                <div className="one-review">
                                    Sorry, seems like you've already left a review on this item, you can edit or delete you previous review.
                                </div>
                                }
                            </Typography>
                            </AccordionDetails>
                        </Accordion>   
                    </div>
            </div>
        );
    }

}
 
export default ItemShowPage;