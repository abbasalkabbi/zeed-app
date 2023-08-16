function Menu(props){
return(
      <div className="menu show" >
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
)
}
export default Menu;