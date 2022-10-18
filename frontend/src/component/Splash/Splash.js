import { fontSize } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItems } from '../../store/items';
import './Splash.css';

const Splash = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        dispatch(fetchItems()).then((res) => {
            setItems(Object.values(res))
        }).then(()=> {
            setIsLoading(false)
        })
    }, [])

    const handleClearance = (e) => {
        e.preventDefault();

    }

    console.log(items)

    if(isLoading){
        return <div>Loading....</div> 
    } else {
        return (
            <div className="splash-main">
                <div className="top-layer">
                    <div className="top-deal">
                        <div className="top-deal-text">
                            Deal Mode Activated
                        </div>
                        <div className="top-deal-button">
                            <button id="shop-now">Shop Now</button>
                        </div>
                    </div>
                    <div className="top-right">
                        <div className="today-picks-box">
                            <div className="today-pick-text">
                                Today's Top Picks
                            </div>
                            <div className="today-picks">
                                <div className="pick-1">
                                    <Link id="pick-1-link" to='/items/1'>
                                        <img src={items[0].photoUrl} id='pick-1' />
                                        <p id='pick-name'>{items[0].name.length > 60 ? items[0].name.slice(0, 60) + '...' : items[0].name}</p>
                                    </Link>
                                </div>
                                <div className="pick-2">
                                    <Link id="pick-1-link" to='/items/2'>
                                        <img src={items[1].photoUrl} id='pick-2' />
                                        <p id='pick-name'>{items[1].name.length > 60 ? items[1].name.slice(0, 60) + '...' : items[1].name}</p>
                                    </Link>
                                </div>
                                <div className="pick-3">
                                    <Link id="pick-1-link" to='/items/3'>
                                        <img src={items[2].photoUrl} id='pick-3' />
                                        <p id='pick-name'>{items[2].name.length > 60 ? items[2].name.slice(0, 60) + '...' : items[2].name}</p>
                                    </Link>
                                </div>
                                <div className="pick-4">
                                    <Link id="pick-1-link" to='/items/4'>
                                        <img src={items[3].photoUrl} id='pick-4' />
                                        <p id='pick-name'>{items[3].name.length > 60 ? items[3].name.slice(0, 60) + '...' : items[3].name}</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="top-right-bottom">
                            <div className="outlet-container">
                                <div className="outlet">
                                    <div className="button-box">
                                        <button id='outlet'>Outlet</button>
                                        <button id='deal'>Deals</button>
                                    </div>
                                    <div className="below-button" onClick={handleClearance}>
                                        <div className="clearance" style={{color: "#bb0628", fontSize: '3.6rem', textAlign: 'center', marginTop: "50px", fontFamily: 'bestbuy-medium'}}>
                                            Clearance,
                                        </div>
                                        <div className="open-box" style={{color: "black", fontSize: '3.6rem', textAlign: 'center', fontFamily: 'bestbuy-medium'}}>
                                            open-box and more.
                                        </div>
                                    </div>
                                        <div className="outlet-details">
                                            <Link style={{color: "#0346be", fontSize: "medium"}}>View Outlet deals</Link>
                                        </div>
                                </div>
                            </div>
                            <div className="deal-of-day-container">
                                <div className="deal-of-day">
                                    <div className="deal-title">
                                        <div className="deal-text">
                                            Deal
                                        </div>
                                        <div className="deal-rest-title">
                                            of the day
                                        </div>
                                    </div>
                                    <div className="deal-item">
                                        <Link id="deal-link" to='/items/5'>
                                            <img src={items[4].photoUrl} id="deal-pic" />
                                            <p id="deal-name">{items[4].name.length > 60 ? items[4].name.slice(0, 60) + '...' : items[4].name}</p> 
                                        </Link>
                                            <div className="deal-price" style={{color: "black", fontFamily: "inter", fontSize: "0.9rem"}}>
                                                ${items[4].price}
                                            </div>
                                    </div>
                                    <div className="bonus-deals">
                                        <Link style={{color: "#0346be", fontSize: 'medium'}}>See bonus deals</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Splash;