import  slider_left_img from "../assets/slider-left-img.png"
import service_img1 from "../assets/service-img1.png"
import service_img2 from "../assets/service-img2.png"
import service_img3 from "../assets/service-img3.png"
import abt_left_img from "../assets/abt-left-img.png"
function Home(){
    return(
        <div className="Home" id="Home">
            {/* slider-area */}
            <div className="slider-area">
                {/* slider-img */}
                <div className="slider-img">
                    <img src={slider_left_img} alt="slider_left_img"/>
                </div>
                {/* slider-img End */}
                {/* slider-inner */}
                <div className="slider-inner">
                    <h2>Who Else Wants To User</h2>
                    <h5>And Use Our Zeed App !</h5>
                </div>
                {/* slider-inner End */}
            </div>
            {/* slider-area End */}
            {/* service-area */}
            <div className="service-area">
                {/* service-single */}
                <div className="service-single">
                    {/*  service-img*/}
                    <div className="service-img">
                        <img src={service_img1} alt="service_img1"/>
                    </div>
                    {/* service-img End */}
                    <h2>Call service</h2>
                    <p>Take The initative to call</p>
                </div>
                {/* service-single  End*/}
                {/* service-single */}
                <div className="service-single">
                    {/*  service-img*/}
                    <div className="service-img">
                        <img src={service_img2} alt="service_img2"/>
                    </div>
                    {/* service-img End */}
                    <h2>Active warning</h2>
                    <p>Timely detection of accidents</p>
                </div>
                {/* service-single  End*/}
                {/* service-single */}
                <div className="service-single">
                    {/*  service-img*/}
                    <div className="service-img">
                        <img src={service_img3} alt="service_img3"/>
                    </div>
                    {/* service-img End */}
                    <h2>Care plan</h2>
                    <p>The care content is pushed</p>
                </div>
                {/* service-single  End*/}
            </div>
            {/* service-area End  */}
            {/* about-area */}
            <div className="about-area">
                <h2>About App</h2>
                <p>Nemo enim ipsam voluptatem quia voluptas sit</p>
                {/* info-about */}
                <div className="info-about">
                    <img src={abt_left_img} alt="abt_left_img"/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiuiosmod terttmpor incididunt 
                    ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. doliuor in reprehenderit in voluptate velit esse dolore eu fugiat nulla pariatur. cdatat non proident
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tuiempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>
                </div>
                {/* info-about End */}
            </div>
            {/* about-area End */}
        </div>
    )
}
export default Home