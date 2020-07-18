import React from 'react';
import './footer.css'

let FooterComponent = function () {
    return (
        <div className="footer-container">
            <a href=""><i class="fa fa-github" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-codepen" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <p style={{marginTop: "2vmin"}}>Made with <span style={{color: "red", fontWeight: "400"}}>Love</span> by <span style={{fontWeight: "400"}}>Sparsh Singhal</span> </p>
        </div>
    )
}

export default FooterComponent;