import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer">
            <div className="columns">
                <div className="col">
                    <h2>SugaPredict </h2>
                    <p>This website provides a platform for users to predict their likelihood of developing diabetes based on various factors..</p>
                </div>
                <div className="col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/prediction">Prediction</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Contact Us</h3>
                    <div className="one">
                    <i class="fa-solid fa-location-dot"></i>
                        <p>23 Street Name , City Name , Country </p>
                    </div>
                    <div className="one">
                        <i class="fa-solid fa-envelope"></i>
                        <p>abc@gmail.com  </p>
                    </div>
                    <div className="one">
                        <i class="fa-solid fa-phone"></i>
                        <p>+ 123 456 789 </p>
                    </div>
                </div>
                <div className="col">
                    <h3>Stay Connected</h3>
                    <div className="icons">
                    <a href=""><i class="fa-brands fa-linkedin"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-github"></i></a>
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                    </div>
                </div>
            </div>
            <div className="lastp">
                <p>Copyright 2025 SugaPredict. All rights reserved.</p>
                <p>Developed by MET Students</p>
            </div>
        </div>
    );
}

export default Footer;
