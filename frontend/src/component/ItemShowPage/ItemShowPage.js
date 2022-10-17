import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchItem } from '../../store/items';
import './ItemShowPage.css';

const ItemShowPage = () => {

    const { itemId } = useParams();
    // const item = useSelector(state => state.items[itemId])
    const dispatch = useDispatch();
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        dispatch(fetchItem(itemId)).then((res) => {
            setItem(res)
        }).then(() => {
            setIsLoading(false)
        })
    },[itemId])

    // useEffect(() => {
    //     dispatch(fetchItem(itemId))
    // },[])


    console.log(item)

    if(isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="page-container">
                <div className="item-container">
                    <div className="item-left">
                        <div className="item-name">{item.name}</div>
                        <div className="item-pic"></div>
                    </div>
                    <div className="item-right">
                        <div className="item-price">{item.price}</div>
                        <div className="total-tech">
                            Total Tech
                        </div>
                        <div className="add-cart-container">
                            <div className="add-cart-button">
                                <button id='add-cart'> Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="overview-container">
                        <div className="overview">
                            <div className="item-desription">{item.description}</div>
                            <div className="item-details">{item.details}</div>
                        </div>
                    </div>
            </div>
        );
    }

}
 
export default ItemShowPage;