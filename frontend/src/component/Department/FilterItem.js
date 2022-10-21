import { Link } from "react-router-dom";
import './Department.css'

const FilterItem = (filterItem) => {
    console.log(filterItem)
    return (

        <div className="filter-item-container">
            <div className="filter-item-wrap">
                <div className="filter-item-pic">
                    <Link to={`/items/${filterItem.filterItem.id}`}>
                        <img src={filterItem.filterItem.photoUrl} alt="" id="filter-item-pic" />
                    </Link>
                </div>
                <div className="filter-item-name">
                    <Link to={`/items/${filterItem.filterItem.id}`}
                        style={{color: "#0346be", fontFamily: "bestbuy-medium"}}
                    >
                        {filterItem.filterItem.name}
                    </Link>
                </div>
                <div className="filter-item-price">
                    ${filterItem.filterItem.price}
                </div>
            </div>
        </div>
    );
}
 
export default FilterItem;