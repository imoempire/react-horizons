import React from 'react';
import image1 from '../images/logo white.jpg';
import image2 from '../images/th.jpg';
import image3 from '../images/th (1).jpg';
import image4 from '../images/th (2).jpg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-default navbar-home">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand navbar-content logo" href="#"><img src={image1} /></a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
           
           <ul className="nav navbar-nav navbar-right">
              <li><a href="#">ABOUT US</a></li> 
            </ul>
            <section className="text-center">
              <ul className="nav navbar-nav navbar-center flag">
                <li><a href="#"><img src={image2} className="img-reponsive flag text-center" alt="flag" /></a></li>
                <li><a href="#"><img src={image3} className="img-reponsive flag" alt="flag" /></a></li>
                <li><a href="#"><img src={image4} className="img-reponsive flag" alt="flag" /></a></li>
              </ul>
            </section>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </nav>
    );
}

export default Navbar;
