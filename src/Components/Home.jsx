import great from '../assets/images/esim1.jpg'
import first from '../assets/images/prepaid.svg'
import second from '../assets/images/postpaid.svg'
import third from '../assets/images/devIces.jpeg'
import fourth from '../assets/images/ic_fixedinternet_small.svg'
import fifth from '../assets/images/data bundles.jpeg'
import sixth from '../assets/images/voice bundles.jpeg'
import seventh from '../assets/images/postpaid div.jpeg'
import eighth from '../assets/images/devIces.jpeg'
import ninth from '../assets/images/submit nin.jpeg'
import tenth from '../assets/images/fixed internet 2.jpeg'
import eleven from '../assets/images/4G_SIM-removebg-preview.png'
import twelve from '../assets/images/My-Airtel-App-5.png'
import thirteen from '../assets/images/call now.jpeg'
import fourteen from '../assets/images/download.jpeg'
import fifteen from '../assets/images/box.jpeg'
import sixteen from '../assets/images/find out more 2.jpeg'
import seventeen from '../assets/images/find out more.jpeg'
import eighteen from '../assets/images/find.jpeg'
import ninteen from '../assets/images/airtel5g-ban-2.jpg'

const Home = () => {

    return (
        <div>
            <div className="banner-img">
                <img src={great} id="corsel-img" />
            </div>
            <div className="recharge">
                <div className="pay-bills">
                    <h6 id="rrr">Recharge & Pay bills</h6>
                    <div className="pre">
                        <div className="sim">
                            <img src={first} width="30px" />
                            <img src={second} width="30px" />
                            <img src={third} width="30px" />
                            <img src={fourth} width="30px" />
                        </div>
                        <div className="plce">
                            <input type="tel" placeholder="Enter mobile number" id="mobile" />
                            <p id="airtime">Buy Airtime/data</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="parent">
                <img src={fifth} alt="" />
                <img src={sixth} alt="" />
                <img src={seventh} alt="" />
                <img src={eighth} alt="" />
                <img src={ninth} alt="" />
                <img src={tenth} alt="" />

            </div>

            <div className="parent2">
                <div className="container">
                    <p>Upgrade to 4G</p>
                    <p id="init">Get free 4gb data</p>
                    <div className="linking">
                        <a id="ind" href="#">KNOW MORE</a>
                        <img id="imgg" src={eleven} alt="" />
                    </div>
                </div>
                <div className="container2">
                    <p>open your world up to more</p>
                    <p>on MY AIRTEL APP</p>
                    <p id="soft">Click to download or Scan</p>
                    <div className="linking">
                        <a id="ind" href="#">KNOW MORE</a>
                        <img id="img2" src={twelve} alt="" />
                    </div>
                </div>

            </div>
            <div className="new">
                <div className="newlife">
                    <p id="gg">Airtel Hello tunes</p>
                    <p>Make your callers tingle</p>
                    <p id="init">Dial *791#</p>
                    <div className="linking2">
                        <a id="ind2" href="#">KNOW MORE</a>
                        <img id="imgg2" src={thirteen} alt="" />
                    </div>
                </div>
                <div className="newlife2">
                    <p id="soft2">Airtel Touching Lives</p>
                    <p>Empowering People</p>
                    <div className="linking">
                        <a id="ind" href="#">KNOW MORE</a>
                        <img id="img3" src={fourteen} alt="" />
                    </div>
                </div>

            </div>

            <div className="co">
                <div className="aa">
                    <p> “@AirtelNigeria, now I have seen the light! Airtel internet is one of the best”</p>
                    <p>decisions I've make.. bigups guys"</p>
                </div>

            </div>

            <div className="parent2">
                <div className="container">
                    <p>Welcome to Airtel!</p>
                    <p id="init">Enjoy Double Data</p>
                    <p>on smartCONNECT</p>
                    <div className="linking">
                        <a id="ind" href="#">KNOW MORE</a>
                        <img id="imgg" src={fifteen} alt="" />
                    </div>
                </div>
                <div className="container2">



                    <p id="soft"> All the information you</p>
                    <p>need about SIM</p>
                    <p>Registration</p>
                    <div className="linking">
                        <a id="ind" href="#">KNOW MORE</a>
                        <img id="img2" src={sixteen} alt="" />
                    </div>
                </div>

            </div>
            <div className="new">
                <div className="newlife">
                    <p id="init">Join the Airtel Premier</p>
                    <p>enjoy exclusive</p>
                    <p>lifestyle benefits</p>
                    <div className="linking2">
                        <a id="ind2" href="#">KNOW MORE</a>
                        <img id="imgg2" src={seventeen} alt="" />
                    </div>
                </div>
                <div className="newlife2">
                    <p> Find an Airtel Store</p>
                    <p>close to you</p>
                    <div className="linking">
                        <a id="ind" href="#">KNOW MORE</a>
                        <img id="img3" src={eighteen} alt="" />
                    </div>
                </div>

            </div>

            <div className="new-img">
                <img src={ninteen} id="soft-img" />
            </div>

        </div>
    )
}

export default Home;