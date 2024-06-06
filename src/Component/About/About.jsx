import React from 'react'
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone} from '@fortawesome/free-solid-svg-icons';
import AboutImage from "../../assets/about/about_img.jpg"

export default function About() {

     //Icon
     const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime}/>
     const faChartIcon = <FontAwesomeIcon icon={faChartPie}/>
     const faTruckIcon = <FontAwesomeIcon icon={faTruckFast}/>
     const faUserIcon = <FontAwesomeIcon icon={faUserClock}/>
     const faHouseIcon = <FontAwesomeIcon icon={faHouseLaptop}/>
     const faPhoneIcon = <FontAwesomeIcon icon={faPhone}/>

  return (
    <>
    <section id="about">
        <div className="container">
            <div className="title_heading">
                <h3>We provides Shortage Remarkable Ideas!</h3>
                <p>
                    Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
                    asperiores repellat.</p>
            </div>
            <div className="about_box_wrapper">
                <div className="about_box">
                    <div className="about_icon">
                     {faBusinessIcon}
                    </div>
                    <div className="about_contant">
                        <h5>Development</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                            laudan sit accusa.
                        </p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon green_icon">
                     {faChartIcon}
                    </div>
                    <div className="about_contant">
                        <h5>Integration</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                            laudan sit accusa.
                        </p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon blue_icon">
                     {faTruckIcon}
                    </div>
                    <div className="about_contant">
                        <h5>Branding</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                            laudan sit accusa.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about_box_details">
                <div className="about_col">
                    <div className="about_image">
                        <img src={AboutImage} alt="About_image" />
                    </div>
                    <div className="img_info_box">
                        <h6 className="img_info_title">GET A PRICE QUOTE TODAY!</h6>
                        <p>Nemo enim ipsum oluptatem quia oluptas <br/> sit aspernatur aut odit aut fugit.</p>
                        <a href="/">{faPhoneIcon} <span>91+ 901-292-2055</span></a>
                    </div>
                </div>
                <div className="about_col more_space">
                    <h3>We have business skills that will increase your earnings</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cupiditate. Quibusdam tempora aspernatur beatae soluta repellendus fugiat vel id saepe numquam corporis consequuntur, in quas.</p>

                    <div className="grid_info">
                        <div className="icon">{faUserIcon}</div>
                        <div className="detail">
                            <h4>Start your own business in minutes</h4>
                            <p>Excepteur sint occaecat cupidatat non porident, sunt in culpa quiofficia
                                deserrunt mollit.
                            </p>
                        </div>
                    </div>
                    <div className="grid_info">
                        <div className="icon green_icon">{faHouseIcon}</div>
                        <div className="detail">
                            <h4>Open a business account online</h4>
                            <p>Excepteur sint occaecat cupidatat non porident, sunt in culpa quiofficia
                                deserrunt mollit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
