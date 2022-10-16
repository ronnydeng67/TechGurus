import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchItems } from '../../store/items';
import './Splash.css';

const Splash = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        dispatch(fetchItems()).then((res)=> {
            setItems(Object.values(res))
        }).finally(()=> {
            setIsLoading(false)
        })
    }, [])

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
                                    {items[0].name}
                                </div>
                                <div className="pick-2">
                                    {items[1].name}
                                </div>
                                <div className="pick-3">
                                    {items[2].name}
                                </div>
                                <div className="pick-4">
                                    {items[3].name}
                                </div>
                            </div>
                        </div>
                        <div className="top-right-bottom">
                            <div className="outlet-container">
                                <div className="outlet">
    
                                </div>
                            </div>
                            <div className="deal-of-day-container">
                                <div className="deal-of-day">
    
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