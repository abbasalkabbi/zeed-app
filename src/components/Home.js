import  image from "../assets/slider-left-img.png"

function Home(){
    return(
        <div className="Home">
            {/* slider-area */}
            <div className="slider-area">
                {/* slider-img */}
                <div className="slider-img">
                    <img src={image}/>
                </div>
                {/* slider-img End */}
            </div>
            {/* slider-area End */}
        </div>
    )
}
export default Home