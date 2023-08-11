

function Header(){
    return(
        <div className="Header">
            {/* logo */}
            <div className="logo">
                <h1>
                ZEED APP
                </h1>
                
            </div>
            {/* logo End */}
            {/* menu */}
            <div className="menu">
                <ul>
                    {/* home */}
                    <a className="home active"> 
                        <li className="active">
                            Home
                        </li>
                    </a>
                    {/* Home End */}
                    {/* Features */}
                    <a>
                        <li>
                            Features
                        </li>
                    </a>
                    {/* Features End */}
                    {/* Screenshot */}
                    <a>
                        <li>
                        Screenshot
                        </li>
                    </a>
                    {/* Screenshot End */}
                    {/* Pricing */}
                    <a>
                        <li>
                        Pricing 
                        </li>
                    </a>
                    {/* Pricing End */}
                    {/* Team */}
                    <a>
                        <li>
                        Team 
                        </li>
                    </a>
                    {/* Team End */}
                    {/* Download */}
                    <a>
                        <li>
                        Download 
                        </li>
                    </a>
                    {/* Download End */}
                    {/* Contact  */}
                    <a>
                        <li>
                        Contact  
                        </li>
                    </a>
                    {/* Contact  End */}
                    
                    
                </ul>
            </div>
            {/* menu End */}
        </div>

    )
}
export default Header