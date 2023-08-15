

function Header(props){
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
                    <a > 
                        <li className={`${props.ishome?'active':''}`}>
                            Home
                        </li>
                    </a>
                    {/* Home End */}
                    {/* Features */}
                    <a>
                        <li className={`${props.isfeatures?'active':''}`}>
                            Features
                        </li>
                    </a>
                    {/* Features End */}
                    {/* Pricing */}
                    <a>
                        <li className={`${props.ispricing?'active':''}`}>
                        Pricing 
                        </li>
                    </a>
                    {/* Pricing End */}
                    {/* Download */}
                    <a>
                        <li className={`${props.isdownload?'active':''}`}>
                        Download 
                        </li>
                    </a>
                    {/* Download End */}
                    {/* Contact  */}
                    <a>
                        <li className={`${props.iscontact?'active':''}`}>
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