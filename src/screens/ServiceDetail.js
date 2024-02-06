import React from "react";
import house from "../images/house.jpg";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Cards from "../components/Cards";
function ServiceDetail() {
  return (
    <div>
      <div className="views">
        <img src={house} alt="img" />
        <div className="View-Heading">
          <h2>Find title professionals near you</h2>
          <div className="services-form">
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
              <h2>Need help finding a title professional?</h2>
              <p>
                You can find the best title professionals on Bark. Start your
                search and get free quotes now!
              </p>
              <p>
                First time looking for a title professional and not sure where
                to start? Tell us about your project and we’ll send you a list
                of titleprofessionals to review. There’s no pressure to hire, so
                you can compare profiles, read previous reviews and ask for more
                information before you make your decision.{" "}
              </p>
              <p>Best of all - it’s completely free!</p>
            </div>
          </div>
        </div>
      </div>
      <Cards title={"title"} />
    </div>
  );
}

export default ServiceDetail;
