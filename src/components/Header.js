import Menu from "./Menu";

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
            <Menu ishome={props.ishome}  isfeatures={props.isfeatures}   ispricing={props.ispricing} isdownload={props.isdownload} iscontact={props.iscontact}/>
            {/* menu End */}
        </div>
    )
}
export default Header