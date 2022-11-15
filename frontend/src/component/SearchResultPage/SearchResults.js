import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const SearchResults = ({ resultItem }) => {
    

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
            </div>
            <div className="result-price-container">
                <div className="result-price">
                    ${resultItem.item.price}
                </div>
                <div className="result-add-cart">
                    <button id='result-add-cart'>
                        <ShoppingCartIcon style={{marginRight: "10px", fontSize: "medium"}}/>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default SearchResults;