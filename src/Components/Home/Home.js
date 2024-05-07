import './Home.css';
import orb from '../../Assets/Images/orb.png';
import bottom_blur from '../../Assets/Images/bottom-blur.svg';
import bottom from '../../Assets/Images/bottom.svg';
function Home() {
    //

    return (
        <>
            <div className="home">
                <div className="top-gradient">
                    <div className="top"></div>
                    <div className="bottom"></div>
                </div>
                <div className="grid"/>
                <div className="container">
                    <img src={orb} className="orb" alt="orb"/>
                    <h1 className="title">PolyBot</h1>
                    <div className="divider"></div>
                    <p className="description">The discord bot that does not want your fucking money.</p>
                </div>
                <img src={bottom} className="bottom"/>
                <img src={bottom_blur} className="bottom-blur"/>

            </div>

        </>
    )
}

export default Home