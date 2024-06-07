import Mountain1 from "../assets/img3.jfif"
import Mountain2 from "../assets/img4.jfif"
import Mountain3 from "../assets/img5.jfif"
import Mountain4 from "../assets/img6.jfif"
import "./Destination.css"
import DestinationData from "./DestinationData";

const Destination = () => {
    return(
     <div className="destination">
     <h1>Popular Destination</h1>
     <p>Tours give you the opportunity to see a lot, within a time frame</p>
     
     <DestinationData
     className="first-des"
     heading="Taal volcano, Batangas"
     text="Taal Volcano and its surrounding area are popular tourist destinations, known for their scenic beauty. Visitors often take boat tours to the volcano's island and hike up to its crater rim for breathtaking views of the crater lake and surrounding landscapes. However, due to its active nature, visitors need to be cautious, and the volcano's activity is closely monitored by Philippine authorities to ensure the safety of residents and tourists alike."
     img1={Mountain1}
     img2={Mountain2}
     />
    <DestinationData
    className="first-des-reverse"
    heading="Mt.Daguldul, Batangas"
    text="Mount Daguldol is a popular hiking destination located in San Juan, Batangas, Philippines. It's part of the larger Mounts Palay-Palay–Mataas-na-Gulod Protected Landscape.
    The mountain offers a relatively easy hike suitable for beginners, but it still provides breathtaking views of the surrounding landscapes and nearby bodies of water, including the Verde Island Passage. The trail to the summit passes through lush forests, open grasslands, and sometimes rocky terrain, providing a diverse hiking experience."
    img1={Mountain3}
    img2={Mountain4}
    />
     
     </div>
    );
};

export default Destination