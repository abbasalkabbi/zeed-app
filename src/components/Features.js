import  ft_screen_img from "../assets/ft-screen-img.png";
import one from "../assets/icon/1.png"
import two from "../assets/icon/2.png"
import three from "../assets/icon/3.png"
import four from "../assets/icon/4.png"
import five from "../assets/icon/5.png"
import sex from "../assets/icon/6.png"
function Features(){
    return(
        <div className="Features">
            <h2>Features</h2>
            <p>Nemo enim ipsam voluptatem quia voluptas sit</p>
            {/* Features-info */}
            <div className="Features-info">
                {/* left */}
                <div className="left">
                    {/* itam */}
                    <div className="itam">
                        <h3>Full Optional</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, iumod tempor incididunt</p>
                        <img src={one} alt="a"/>
                    </div>
                    {/* itam End */}
                     {/* itam */}
                    <div className="itam">
                        <h3>Unique Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, iumod tempor incididunt</p>
                        <img src={two} alt="a"/>
                    </div>
                    {/* itam End */}
                     {/* itam */}
                    <div className="itam">
                        <h3>Voice Maker</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, iumod tempor incididunt</p>
                        <img src={three} alt="a"/>
                    </div>
                    {/* itam End */}
                    
                </div>
                {/* left End */}
                {/* center */}
                <div className="center">
                    <img src={ft_screen_img} alt="ft_screen_img"/>
                </div>
                {/* center End */}
                {/* right */}
                <div className="right">
                   {/* itam */}
                    <div className="itam">
                            <h3>Easy Settings</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, iumod tempor incididunt</p>
                            <img src={four} alt="a"/>
                        </div>
                        {/* itam End */}
                         {/* itam */}
                        <div className="itam">
                            <h3>Flat Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, iumod tempor incididunt</p>
                            <img src={five} alt="a"/>
                        </div>
                        {/* itam End */}
                         {/* itam */}
                        <div className="itam">
                            <h3>Easy Download</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, iumod tempor incididunt</p>
                            <img src={sex} alt="a"/>
                        </div>
                       {/* itam End */}
                </div>
                {/* right End */}
            </div>
            {/* Features-info End */}
        </div>
    )
}
export default Features;