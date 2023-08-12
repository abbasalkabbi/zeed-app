function Pricing(){
    return(
        <div className="Pricing">
            <h2>Pricing Plan</h2>
            <p>Nemo enim ipsam voluptatem quia voluptas sit</p>
            {/* price-area */}
            <div className="price-area">
                {/* price-item */}
                <div className="price-item">
                    {/* prc-head */}
                    <div className="prc-head">
                        <span>Silver</span>
                        <h5> <small>$</small>50/m</h5>
                    </div>
                    {/* prc-head */}
                    {/* prc-content */}
                    <ul className="prc-content">
                        <li>10 User</li>
                        <li>1 Year</li>
                        <li>512 Mb Memory</li>
                        <li>30GB SSD Disk</li>
                        <li>1 TB Transfer</li>
                    </ul>
                    {/* prc-content End */}
                    <button>Order Now</button>
                </div>
                {/* price-item End */}
                 {/* price-item */}
                <div className="price-item">
                    {/* prc-head */}
                    <div className="prc-head">
                        <span>Platinum</span>
                        <h5> <small>$</small>100/m</h5>
                    </div>
                    {/* prc-head */}
                    {/* prc-content */}
                    <ul className="prc-content">
                        <li>10 User</li>
                        <li>1 Year</li>
                        <li>512 Mb Memory</li>
                        <li>30GB SSD Disk</li>
                        <li>1 TB Transfer</li>
                    </ul>
                    {/* prc-content End */}
                    <button>Order Now</button>
                </div>
                {/* price-item End */}
                 {/* price-item */}
                <div className="price-item">
                    {/* prc-head */}
                    <div className="prc-head">
                        <span>Golden</span>
                        <h5> <small>$</small>200/m</h5>
                    </div>
                    {/* prc-head */}
                    {/* prc-content */}
                    <ul className="prc-content">
                        <li>10 User</li>
                        <li>1 Year</li>
                        <li>512 Mb Memory</li>
                        <li>30GB SSD Disk</li>
                        <li>1 TB Transfer</li>
                    </ul>
                    {/* prc-content End */}
                    <button>Order Now</button>
                </div>
                {/* price-item End */}
            </div>
            {/* price-area End */}
        </div>
    )
}
export default Pricing ;