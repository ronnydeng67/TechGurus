import { fontSize } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItems, getItems } from '../../store/items';
import './Splash.css';
import SplashItem from './SplashItem';

const Splash = () => {
    const dispatch = useDispatch();
    // const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const items = useSelector(getItems)

    useEffect(() => {
        dispatch(fetchItems()).then((res) => {
            // setItems(Object.values(res))
        }).then(()=> {
            setIsLoading(false)
        })
    }, [])

    const jumpToDeal = e => {
        e.preventDefault()
        return <a href="#deal-section"></a>
    }

    const handleClearance = (e) => {
        e.preventDefault();

    }

    function shuffle(arr) {
        return arr.sort(() => Math.random() - 0.5)
    }

    let splashItems = []
    // splashItems = shuffle(items).map(item => <SplashItem key={item.id} item={item}/>)
    splashItems = items.map(item => <SplashItem key={item.id} item={item}/>)
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
                            <button id="shop-now"><a href="#deal-section" id="link-shop-now">Shop now</a></button>
                            {/* <a href="#deal-section" id="shop-now">Shop now</a> */}
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
                                            <Link to="/" style={{color: "#0346be", fontSize: "medium"}}>View Outlet deals</Link>
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
                                        <Link to="/" style={{color: "#0346be", fontSize: 'medium'}}>See bonus deals</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="deal-section"className="deal-center">
                    <div className="splash-divider">
                        Top Deal
                    </div>
                    <div className="deal-container">
                        {splashItems}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Splash;