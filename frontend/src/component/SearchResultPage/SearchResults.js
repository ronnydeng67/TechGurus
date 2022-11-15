import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchReviews, getReviews } from "../../store/reviews";

const SearchResults = ({ resultItem }) => {
    
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false)
    const reviews = useSelector(getReviews);

    useEffect(() => {
        dispatch(fetchReviews(resultItem.item.id)).then(() => (
            setLoaded(true)
        ))
    },[])

    console.log(reviews)

    if(loaded) {
        return (
            <div className="result-item-container">
                <div className="result-pic-container">
                    <Link to={`/items/${resultItem.item.id}`}>
                        <img src={resultItem.item.photoUrl} alt="" id="result-pic"/>
                    </Link>
                </div>
                <div className="result-info-container">
                    <div className="result-name">
                        <Link to={`/items/${resultItem.item.id}`}>
                            {resultItem.item.name}
                        </Link>
                    </div>
                    <div className="total-reviews">
                        {reviews?.length}
                    </div>
                </div>
                <div className="result-price-container">
        
                </div>
            </div>
        );
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }
}
 
export default SearchResults;