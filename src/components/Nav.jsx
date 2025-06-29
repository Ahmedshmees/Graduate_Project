import { Link } from "react-router-dom";

const Nav = () => {
  function toggleMenu() {
    const links = document.querySelector(".links");
    links.style.display = links.style.display === "flex" ? "none" : "flex";
    const mainContent = document.getElementById("main-content");

    const isOpen = links.classList.contains("active");

    if (isOpen) {
      links.classList.remove("active");
      if (mainContent) {
        mainContent.style.transform = "translateY(0)";
      }
    } else {
      links.classList.add("active");
      if (mainContent) {
        mainContent.style.transform = "translateY(250px)";
      }
    }

    if (mainContent) {
      mainContent.style.transition = "transform 0.3s ease";
    }
  }

  return (
    <nav>
      <div className="logo">
        <Link to="/">SugaPredict</Link>
      </div>
      <div  className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="links" >
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/prediction">Prediction</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;


