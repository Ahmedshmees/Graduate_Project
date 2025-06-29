import { Link } from "react-router-dom";
import Nav from "./Nav";
import science from "../assets/image/science.png";
import scan from "../assets/image/scan.png";
import analysis from "../assets/image/analysis.png";

import Pops from "./Pops";

const Serv = () => {
  const list = [
    {
      id: 1,
      img: scan,
      title: "Rapid Risk Assessment",
      description:
        "We provide an instant AI-based assessment tool for patients with diabetes, providing your health and lifestyle data.",
      delay: 300,
    },
    {
      id: 2,
      img: science,
      title: "Health Awareness and Education",
      description:
        "We provide you with comprehensive educational content about diabetes, including causes, prevention methods, and the latest research in the health field.",
      delay: 200,
    },
    {
      id: 3,
      img: analysis,
      title: "Track and analyze health trends",
      description:
        "track the development of your health condition over time through our smart system, which helps you make better health decisions.st research in the health .",
      delay: 100,
    },
  ];

  return (
    <>
      <div className="services">
        <h2 data-aos="fade-right">
          Welcome to <br /> Services Section
        </h2>
        <div className="card">
          {list.map((item) => (
            <div
              data-aos="fade-up"
              data-aos-delay={item.delay}
              className="box"
              key={list.id}
            >
              <img src={item.img} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <p className="last">
          Start analyzing your health data now and take a step towards
          preventing diabetes! 🚀{" "}
          <Link to="/prediction">
            <i class="fa-solid fa-play"></i>
          </Link>
        </p>
      </div>
      {/* <Pops /> */}
    </>
  );
};

export default Serv;
