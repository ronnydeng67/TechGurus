import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchItem } from '../../store/items';
import { FaExchangeAlt } from 'react-icons/fa';
import { FiHeadphones, FiShield } from 'react-icons/fi';
import { MdHandyman } from 'react-icons/md';
import moment from 'moment';
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

    const returnDate = moment().add(15, 'days').format('MMM Do')

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
                                    <div className='or'>or</div>
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
                                    Up to 24 months of product protection on most Best Buy purchases, with active membership
                                </div>
                                <div className="tech-4">
                                    <MdHandyman style={{color: "green", marginRight: "10px"}}/>
                                    Free delivery and standard installation
                                </div>
                                <div className="tech-price">
                                    $199.99 per year
                                </div>
                                <div className="learn-abot">
                                    <button>Purchase Totaltech</button>
                                </div>
                            </div>
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