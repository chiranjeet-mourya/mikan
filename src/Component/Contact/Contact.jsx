import React from 'react'
import "./Contact.css"
import ContactImg from "../../assets/contact/contact.jpg"

export default function Contact() {
  return (
    <>
    <div id="contact">
        <div className="container">
            <div className="contact_wrapper">
                <div className="contace_col">
                    <div className="contact_image">
                        <img src={ContactImg} alt="Contact_Image" />
                    </div>
                </div>
                <div className="contace_col">
                    <h2>Contact US</h2>
                    <from>
                        <div className="imput_wrapper">
                            <input type="text" className="form_control" placeholder="Your Name..." autoComplete="off"/>
                        </div>
                        <div className="imput_wrapper">
                            <input type="text" className="form_control" placeholder="Your Phone..." autoComplete="off"/>
                        </div>
                        <div className="imput_wrapper">
                            <input type="email" className="form_control" placeholder="Your Email..." autoComplete="off"/>
                        </div>
                        <div className="imput_wrapper">
                            <textarea placeholder="Write a Massage..."></textarea>
                        </div>
                        <div className="btn_wrapper">
                            <button className="btn">Submit</button>
                        </div>
                    </from>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
