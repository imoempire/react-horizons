import React from 'react';
import image5 from '../images/Horizon-Media-offices-by-a-i-architecture-New-York-12.jpg'

const Carousel = () => {
    return (
        <div className="container-fluid slider">
        <div className="row"><div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            {/* <!-- Indicators --> */}
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>
          
            {/* <!-- Wrapper for slides --> */}
            <div className="carousel-inner carousel-content" role="listbox">
              <div className="item active">
            <img src={image5}  alt="pizza" />
              </div>
              
          </div></div>
    </div>
      </div>
    );
}

export default Carousel;
