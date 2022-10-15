import './Splash.css';

const Splash = () => {

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

                            </div>
                            <div className="pick-2">
                                
                            </div>
                            <div className="pick-3">
                                
                            </div>
                            <div className="pick-4">
                                
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
 
export default Splash;