import { Link, useHistory } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/carts";

const SearchResults = ({ resultItem }) => {
    
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const history = useHistory();

    const addItem = e => {
        if (sessionUser) {
            dispatch(addToCart({
                itemId: resultItem.item.id,
                userId: sessionUser.id,
                quantity: 1
            }))
        } else {
            history.push('/login')
        }
    }

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
                    <button id='result-add-cart' onClick={addItem}>
                        <ShoppingCartIcon style={{marginRight: "10px", fontSize: "medium"}}/>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default SearchResults;