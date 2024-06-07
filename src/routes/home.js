import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home (){
 return(
    <>
    <Navbar />
    <Hero 
    cName="hero"
    heroImg = "https://www.oceanfrontrecovery.com/wp-content/uploads/2019/10/fbr.jpeg"
    title="Your Journey Your Story"
    text ="Choose Your Favorite Destination."
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
    />
    <Destination/>
    <Trip />
    <Footer/>
    </>
 );
}

export default Home;