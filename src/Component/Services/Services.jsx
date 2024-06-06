import React from 'react'
import "./Services.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartBar, faCopy, faMarker, faUserGear, faCoins} from '@fortawesome/free-solid-svg-icons';

export default function Services() {

   //Icon
   const faLaptopIcon = <FontAwesomeIcon icon={faLaptopCode}/>
   const faChartIcon = <FontAwesomeIcon icon={faChartBar}/>
   const faCopyIcon = <FontAwesomeIcon icon={faCopy}/>
   const faMarkerIcon = <FontAwesomeIcon icon={faMarker}/>
   const faUserIcon = <FontAwesomeIcon icon={faUserGear}/>
   const faCoinsIcon = <FontAwesomeIcon icon={faCoins}/>
  return (
    <>
    <div id="Services">
      <div className="container">
        <div className="title_heading">
          <h3>What's Services we are Offreing to our Coustomers </h3>
          <p>Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
            doloribus asperiores repellat.</p>
        </div>
        <div className="services_wrapper">
          <div className="services_box">
            <div className="services_icon blue_icon">{faLaptopIcon}</div>
            <h4 className="number">01</h4>
            <div className="services_content">
              <h5>Cloud Computing</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla similique laborum atque natus nesciunt ipsam?</p>
              <a href="/" className="read">Read more</a>
            </div>
          </div>

          <div className="services_box">
            <div className="services_icon">{faChartIcon}</div>
            <h4 className="number">02</h4>
            <div className="services_content">
              <h5>Business Strategy</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla similique laborum atque natus nesciunt ipsam?</p>
              <a href="/" className="read">Read more</a>
            </div>
          </div>

          <div className="services_box">
            <div className="services_icon green_icon">{faCopyIcon}</div>
            <h4 className="number">03</h4>
            <div className="services_content">
              <h5>Reports Analysis</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla similique laborum atque natus nesciunt ipsam?</p>
              <a href="/" className="read">Read more</a>
            </div>
          </div>

          <div className="services_box">
            <div className="services_icon">{faMarkerIcon}</div>
            <h4 className="number">04</h4>
            <div className="services_content">
              <h5>Decision Maker</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla similique laborum atque natus nesciunt ipsam?</p>
              <a href="/" className="read">Read more</a>
            </div>
          </div>

          <div className="services_box">
            <div className="services_icon green_icon">{faUserIcon}</div>
            <h4 className="number">05</h4>
            <div className="services_content">
              <h5>Coustomer Oriented</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla similique laborum atque natus nesciunt ipsam?</p>
              <a href="/" className="read">Read more</a>
            </div>
          </div>

          <div className="services_box">
            <div className="services_icon blue_icon">{faCoinsIcon}</div>
            <h4 className="number">06</h4>
            <div className="services_content">
              <h5>Solution Focused</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla similique laborum atque natus nesciunt ipsam?</p>
              <a href="/" className="read">Read more</a>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}
