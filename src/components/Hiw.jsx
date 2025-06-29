import { Link } from "react-router-dom"
import work from "../assets/image/HIW.png"

const Hiw = () => {
    return (
         <div id="How" className="hiw">  
            <h2>How It works</h2>
            <div className="image" data-aos="flip-left">
                <img src={work} />
            </div>
            <div className="steps" data-aos="">
                <p>Enter your health data accurately</p>
                <p>Click the Predict button to start the analysis.</p>
                <p>Find out your health assessment now!</p>
                <p>Get personalized tips for your health!</p>
            </div>
        </div>
    );
}

export default Hiw;
