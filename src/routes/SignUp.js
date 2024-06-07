import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SignupImg from "../assets/img11.jpg"
import Footer from "../components/Footer";
import SignupForm from "../components/SignupForm";

function Contact (){
    return(
       <>
       <Navbar />
      <Hero 
      cName="hero-mid"
      heroImg = {SignupImg}
      title="Sign Up"
      btnClass="hide"
      />
      <SignupForm/>
      <Footer/>
       </>
    )
   }
   
   export default Contact;