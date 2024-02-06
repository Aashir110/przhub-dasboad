import React from "react";
import "../styles/View.css";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Cards from "../components/Cards";
import "../styles/Home.css";
import { useParams ,useLocation} from "react-router-dom";
import Categeory from "../data/fake";
import MiniList from "../components/MiniList";



const ComponentScreen = (props) => {
  const location = useLocation();
  // const { itemData } = props.location.state; // Accessing passed data from location state
  const itemdata = location.state ? location.state.itemData : null;

console.log(itemdata); // T
//   console.log(parsedItem);

//   const decodedTitle = decodeURIComponent(title);
//   const decodedBg = decodeURIComponent(bg)

  // Access 'item' properties correctly from 'itemData'
//   const { title: itemTitle, bg: itemBg } = itemData || {};

//   console.log(itemTitle, itemBg);  

  const findSubcatByTitle = () => {
    const category = Categeory.find((cat) => cat.title === "Gardening");
    // console.log(itemData?.title)

    if (category) {
      return category.subcat;
    }

    return [];
  };

  const titleToFind =  "Gardening" ;
  const subcatArray = findSubcatByTitle(titleToFind);
  const findAllcatByTitle = () => {
    const category = Categeory.find((cat) => cat.title === "gardening");

    if (category) {
      return category.all;
    }

    return [];
  };
  const allcatArray = findAllcatByTitle(titleToFind);
  console.log(allcatArray);
  return (
    <div>
              <div className="views">
        <img src="" alt="img" />
        <div className="View-Heading">
          <h2>Find  professionals near you</h2>
          <div className="services-form">
            <h5>What sevice do You need?</h5>
            <InputField type={"text"} />
            <h5>Where do you need it?</h5>
            <InputField
              type={"text"}
              placeholder={"Enter Your zipcode & Town"}
            ></InputField>
            <Button title={"Continue"} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row space">
          <div className="col-sm-12">
            <div className="details-description">
              <h2>Need help finding a professional?</h2>
              <p>
                You can find the bestprofessionals on Bark.
                Start your search and get free quotes now!
              </p>
              <p>
                First time looking for a  professional and not
                sure where to start? Tell us about your project and we’ll send
                you a list of professionals to review. There’s no
                pressure to hire, so you can compare profiles, read previous
                reviews and ask for more information before you make your
                decision.{" "}
              </p>
              <p>Best of all - it’s completely free!</p>
            </div>
          </div>
        </div>
      </div>
      <Cards title="" />

      


    </div>
  )
}

export default ComponentScreen