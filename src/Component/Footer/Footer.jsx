import React,{useState, useEffect} from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {

    //Icon
    const faArrowIcon = <FontAwesomeIcon icon={faArrowUp}/>

    //State
    const [isvisible, setIsvisible] = useState(false)

    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    const listenToScroll=()=>{
        let heightToHidden=250;
        const windowScroll=document.body.scrollTop || document.documentElement.scrollTop;

        (windowScroll > heightToHidden) ? setIsvisible(true) : setIsvisible(false);
    }

    useEffect(()=>{
       window.addEventListener("scroll", listenToScroll);
    })
  return (
    <>
     <section className="container">
        <footer className="footer">
            <p>@ All Right Reserved 2023 Designed By <a href="/">Code4education</a> </p>
        </footer>
     </section>

     {/* Scroll To Top */}
     {
        isvisible && (
            <div className="scroll_top" onClick={scrollToTop}>
            {faArrowIcon}
         </div>
        )
     }
     
    </>
  )
}
