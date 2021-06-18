import React from 'react';
import image6 from '../../images/luke-chesser-wnShDP37vB4-unsplash.jpg';
import image7 from '../../images/nastuh-abootalebi-ZtC4_rPCRXA-unsplash.jpg';
import image8 from '../../images/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg';
import image9 from '../../images/benjamin-child-0sT9YhNgSEs-unsplash.jpg';

const Plans = (props) => {
  return (
    <div className="container plans">
      <h2 className="text-center">{props.text}</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="thumbnail">
            <img src={image6} alt="office" />

            <h4>VIRTUAL OFFICE</h4>
            <p>Our virtual offices allow your business to get our location,
              phone services and also you become a member of our community with benefit such as to our meeting room</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="thumbnail">
            <img src={image7} alt="office" />

            <h4> CUSTOMIZED OFFICE</h4>
            <p>Our virtual offices allow your business to get our location,
              phone services and also you become a member of our community with benefit such as to our meeting room</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="thumbnail">
            <img src={image8} alt="office" />

            <h4>SERVICED OFFICE</h4>
            <p>
              Our virtual offices allow your business to get our location,
              phone services and also you become a member of our community with benefit such as to our meeting room
            </p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="thumbnail">
            <img src={image9} alt="office" />
            <div className="caption">
              <h4>MEETING ROOM</h4>
              <p> Our virtual offices allow your business to get our location,
                phone services and also you become a member of our community with benefit such as to our meeting room</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Plans;
