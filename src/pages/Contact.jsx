import Nav from "../components/Nav";
import contImg from "../assets/image/content.png";
const Contact = () => {
  return (
    <>
      <Nav />
      <div className="contact">
        <div className="image" data-aos="fade-down" >
          <img src={contImg} />
        </div>
        <div className="text" data-aos="fade-up">
          <h1>Get in <br />touch</h1>
          <p className="first">
            Call , email , Text me , whatever work for you. i'll be here . let's
            Talk!{" "}
          </p>
          <div className="icon">
            <div className="one">
              <i class="fa-solid fa-user"></i>
              <h4>Name</h4>
              <div className="names">
                <p><a target="blank" href="https://www.linkedin.com/in/ahmed-shmees/">Ahmed Eltamemy Shmees</a></p>
                <p><a href="#">Ahmed Maher Younes</a></p>
                <p><a target="blank" href="https://www.linkedin.com/in/ahmed-rady-61a969232/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Ahmed Rady Hammad</a></p>
                <p><a target="blank" href="https://www.linkedin.com/in/ahmed-elsaeed-a15664261/">Ahmed Elsaeed AbdelMajed</a></p>
                <p><a target="blank" href="https://www.linkedin.com/in/ahmed-morad-5951552a7/">Ahmed Magdy Morad</a></p>
              </div>
            </div>
            <div className="one">
              <i class="fa-solid fa-address-book"></i>
              <h4>Address</h4>
              <p>Mansoura , Egypt</p>
            </div>
            <div className="one">
              <i class="fa-solid fa-laptop-code"></i>
              <h4>Freelance</h4>
              <p>Available</p>
            </div>
            <div className="two">
              <a href="/"><i class="fa-brands fa-facebook"></i></a>
              <a href="/"><i class="fa-brands fa-github"></i></a>
              <a href="/"><i class="fa-brands fa-instagram"></i></a>
              <a href="/"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
