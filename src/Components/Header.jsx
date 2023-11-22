import soft from '../assets/images/airtel-logo.png'


const Header = () => {

    return (
        <div>
            <div className="fs-nav">
                <ul id="p-nav">
                    <li><a href="#" id="f-nav">DSARF</a></li>
                    <li><a href="#" id="f-nav">SMARTCASH</a></li>
                    <li><a href="#" id="f-nav">PERSONAL</a></li>
                    <li><a href="#" id="f-nav">BROADBAND</a></li>
                    <li><a href="#" id="f-nav">AIRTEL TOUCHING LIVES</a></li>
                    <li><a href="#" id="f-nav">BUSINESS</a></li>
                    <li><a href="#" id="f-nav">ABOUT US</a></li>
                    <li><a href="#" id="f-nav">CAREER</a></li>
                </ul>
            </div>
            <div className="second-nav">
                <ul id="c-nav">
                    <li><a href="#" id="s-nav"><img src={soft} width="150px"/></a></li>
                    <li><a href="#" id="s-nav">Get 5g</a></li>
                    <li><a href="#" id="s-nav">PAY & RECHARGE</a></li>
                    <li><a href="#" id="s-nav">VOICE & DATA</a></li>
                    <li><a href="#" id="s-nav">POSTPAID</a></li>
                    <li><a href="#" id="s-nav">SERVICES</a></li>
                    <li><a href="#" id="s-nav">OUR NETWORKS</a></li>
                    <li><a href="#" id="s-nav">PREMIER</a></li>
                    <li><a href="#" id="s-nav">GET HELP</a></li>
                    <li><a href="#" id="s-nav">eSIM</a></li>
                    <li><a href="#" id="s-nav">VoLTE</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;