import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
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


    let paymentPlans;
    let month = 4;
    if((item.price > 300 && item.price < 500)) {
        month = 12;
    } else if (item.price > 500 && item.price < 800) {
        month = 24;
    } else {
        month = 36;
    }

    console.log(month)

    if(isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="page-container">
                <div className="item-container">
                    <div className="item-left">
                        <div className="item-name">{item.name}</div>
                        <div className="item-pic" style={{textAlign: 'center'}}>
                            <img width='auto' height='400' style={{margin: '150px'}} src={item.photoUrl} alt="" />
                        </div>
                    </div>
                    <div className="item-right">
                        <div className="item-price">
                            <div className="price-text">
                                <div className="price">
                                    ${item.price}
                                </div>
                                <div className='price-divider'>
                                    <div className='hi'></div>
                                </div>
                                <div className="payment">
                                    <div className="monthly">
                                        ${((item.price) / month).toFixed(2)}/mo.*
                                    </div>
                                    <div className="four-payment">
                                        suggested payments with
                                    </div>
                                    <div className="payment-terms">
                                        {month}-Month financing
                                    </div>
                                    <div className="show-more">
                                        <Link>Show me how </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="return-box">
                                15-DAY FREE & EASY RETURNS
                            </div>
                        </div>
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
                            <div className="item-details">
                                <ul>
                                    {item.details.split(/\r?\n/).map(detail => <li>{detail}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }

}
 
export default ItemShowPage;