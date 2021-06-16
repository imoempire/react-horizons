import React from 'react';

const Footer = (props) => {
    return (
        <div className="footer">
        <div className="row">
     <div className="col-md-4">
            <h3>{props.texts}</h3>
            <h4>Nairobi, Kenya</h4>
            <p>Belgravia Center, 14 Riverside Road <br />
              4th floor Off Riverside Drivebr <br />
              Hanover Center, 14 Riverside Drive <br />
              16th, Off Riverside Drive</p>
          </div>
          <div className="col-md-4">
            <h3>VISIT US IN GHANA</h3>
            <h4>Accra, Ghana</h4>
            <p>One Airport Square, Airport City <br /> 8th floor</p>
          </div>
          <div className="col-md-4">
            <h4>VISIT US IN NIGERIA</h4>
            <h3>Lagos, Nigeria</h3>
            <p>Sterling Bank Building</p>
          </div>       
        </div>
        </div>
    );
}

export default Footer;
