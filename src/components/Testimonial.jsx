import p1 from "../assets/image/p2.jpeg"
// import p4 from "../assets/image/p2.jpg"
import p2 from "../assets/image/p1.jpg"
import p3 from "../assets/image/p3.png"
import Slider from "react-slick"; // 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {

    // const settings = {
    //     dots: true,
    //     fade: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     waitForAnimate: false
    //   };
    
    const person = [
        {id:1 , img:p1 , name:"Mamdouh nasrallah" , addrees:"Cairo , Egypt" , opinion:"This website is a game-changer! The diabetes prediction tool provided me with clear insights, and the visualizations were incredibly informative." , delay:270 , daos:"zoom-in"},
        {id:2 , img:p2 , name:"Omar Khaled" , addrees:"Mansoura , Egypt" , opinion:"The user-friendly interface and detailed predictions helped me better understand my risk factors for diabetes. Highly recommended!",delay:180,daos:"zoom-in"},
        {id:3 , img:p3 , name:"Amr Nsoohy" , addrees:"Alex , Egypt" , opinion:"As a healthcare professional, I appreciate the transparency and accuracy of this tool. It's a valuable resource for both patients and clinicians.",delay:90,daos:"zoom-in"},
        // {id:2 , img:p4 , name:"Omar Khaled" , addrees:"Mansoura , Egypt" , opinion:"The user-friendly interface and detailed predictions helped me better understand my risk factors for diabetes. Highly recommended!"},
    ]
    return (
        <div className="testimonial">
            <h2>Feedback from Our Users</h2>
            <div className="cards" >
            {/* <Slider {...settings}> */}
                {person.map((item) => (
                    <div data-aos={item.daos} data-aos-delay = {item.delay} className="box" key={item.id}>
                        <div className="flex">
                        <img src={item.img} alt={item.name} />
                       <div className="text">
                       <h3>{item.name}</h3>
                       <span>{item.addrees}</span>
                       </div>
                        </div>
                        <p>{item.opinion}</p>
                    </div>
                    ))}
        {/* </Slider> */}
            </div>
        </div>

    );
}

export default Testimonial;
