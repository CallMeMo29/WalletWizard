import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {     
    return (    
        <footer id="footer1" className="col">
            <div className="col">
                <a href="https://www.instagram.com/" target="blank">
                    <img className="footerIcons" src="./Public/FooterImg/insta.png" />
                </a>    
                <a href="https://de-de.facebook.com/" target="blank">
                    <img className="footerIcons" src="./Public/FooterImg/face.png" />
                </a>
                <a href="https://de.linkedin.com/" target="blank">
                    <img className="footerIcons" src="./Public/FooterImg/linked.png" />
                </a>                
            </div>

        </footer>  
    );
}
