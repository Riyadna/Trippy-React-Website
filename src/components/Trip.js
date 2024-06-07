import "./TripStyles.css"
import TripData from "./TripData";
import  Trip1 from "../assets/img7.jfif"
import  Trip2 from "../assets/img8.jfif"
import  Trip3 from "../assets/img9.jfif"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading = "Trip in Indonesia"
                text = "Indonesia is the largest archipelago in the world1. It consists of five major islands and about 30 smaller groups. The islands are located at a crossroads between two oceans, the Pacific and Indian Oceans, and straddles two continents, Asia and Australia/Oceania. Indonesia is the world's fourth-most populous country and the most populous Muslim-majority country. It has a highly diverse population, with more than 300 local languages."
                />
                <TripData
                image={Trip2}
                heading = "Trip in Malaysia "
                text = "Malaysia is a Southeast Asian country with 13 states and three territories, divided into Peninsular Malaysia and East Malaysia. It shares borders with Thailand, Singapore, Vietnam, Indonesia, Brunei, Indonesia, and the Philippines. The national capital is Kuala Lumpur, and the administrative center is Putrajaya. With a population of over 33 million, Malaysia is a tropical, megadiverse country with numerous endemic species."
                />
                <TripData
                image={Trip3}
                heading = "Trip in France"
                text = "France, a country primarily in Western Europe, is one of the largest discontiguous exclusive economic zones in the world. It shares borders with Belgium, Luxembourg, Germany, Switzerland, Italy, Monaco, Andorra, Spain, and the United Kingdom. Its metropolitan area spans from the Rhine to the Atlantic Ocean and includes overseas territories. France is a unitary semi-presidential republic with a population of 68.4 million. Major urban areas include Paris, Marseille, Lyon, Toulouse, Lille, Bordeaux, Strasbourg, Nantes, and Nice."
                />

            </div>
            
        </div>
    );
}

export default Trip;