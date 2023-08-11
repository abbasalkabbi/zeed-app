import  slider_left_img from "../assets/slider-left-img.png"

function Home(){
    return(
        <div className="Home">
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
        </div>
    )
}
export default Home