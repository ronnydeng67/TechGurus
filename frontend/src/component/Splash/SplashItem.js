import { Link } from "react-router-dom";

const SplashItem = (item) => {

    console.log(item)
    return (
        <div className="splash-item-container">
            <div className="splash-item-wrap">
                <div className="splash-item-pic">
                    <Link to={`/items/${item.item.id}`}>
                        <img src={item.item.photoUrl} alt="" id="splash-item-pic"/>
                    </Link>
                </div>
                <div className="splash-item-text">
                    <Link to={`/items/${item.item.id}`}>{item.item.name}</Link>
                </div>
                <div className="splash-item-price">
                    ${item.item.price}
                </div>
            </div>
        </div>
    );
}
 
export default SplashItem;