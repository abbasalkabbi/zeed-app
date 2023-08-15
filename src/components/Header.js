

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
                    <a href="#Home"> 
                        <li className={`${props.ishome?'active':''}`}>
                            Home
                        </li>
                    </a>
                    {/* Home End */}
                    {/* Features */}
                    <a href="#Features">
                        <li className={`${props.isfeatures?'active':''}`}>
                            Features
                        </li>
                    </a>
                    {/* Features End */}
                    {/* Pricing */}
                    <a href="#Pricing">
                        <li className={`${props.ispricing?'active':''}`}>
                        Pricing 
                        </li>
                    </a>
                    {/* Pricing End */}
                    {/* Download */}
                    <a href="#Download">
                        <li className={`${props.isdownload?'active':''}`}>
                        Download 
                        </li>
                    </a>
                    {/* Download End */}
                    {/* Contact  */}
                    <a href="#Contact"> 
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