import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import house from "../images/house.jpg";
import MultiStep from "react-multistep";
import Step from "./Step";
function CategeoryList({ title, sub, bg }) {
  const subToDisplay = sub.slice(0, 3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const openModal = (item) => {
    setIsModalOpen(true);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
  useEffect(() => {}, [selectedItem]);

  return (
    <div className="container">
      <div className="row space">
        <div className="col-sm-6">
          <div className="heading">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="view">
            <Link
              to={`/ViewAll/${encodeURIComponent(title)}/${encodeURIComponent(
                bg
              )}`}
            >
              View All 
            </Link>{" "}
          </div>
        </div>
      </div>

      <div className="row">
        {subToDisplay.map((item) => (
          <div className="col-sm-4">
            <div className="item-box" onClick={() => openModal(item)}>
              <Link to="/">
                <img src={item.img} alt="images" />
              </Link>
              <h5>{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedItem && (
        <div className="modals">
          <div className="modal-box">
            <div className="inner-modal">
              <div className="close-btn" onClick={closeModal}>
                <i class="fa-solid fa-xmark"></i>
              </div>
              <div className="modals-header">
                <div className="modals-detail">
                  <MultiStep
                    nextButton={{
                      title: "Next",
                      style: {
                        background: "#3062d9",
                        border: "0px",
                        padding: "5px 20px",
                        borderRadius: 5,
                        color: "#ffff",
                        margin: 10,
                      },
                    }}
                    prevButton={{
                      title: "Back",
                      style: {
                        background: "#ffff",
                        border: "1px solid gray",
                        padding: "5px 20px",
                        borderRadius: 5,
                        color: "black",
                        margin: 10,
                      },
                    }}
                  >
                    {selectedItem?.step1?.map((step1) => (
                      <Step
                        name={"abcd"}
                        id={"abcd"}
                        type={"radio"}
                        image={house}
                        showNavigation={false}
                        showTitles={false}
                        item={step1.question}
                        heading={step1.heading}
                      />
                    ))}
                  </MultiStep>
                </div>
              </div>
              {/* <div className="modals-btns">
                <div className="back-btn">
                  <button className="back">back</button>
                </div>

                <div className="next-btn">
                  <button className="next">Next</button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategeoryList;
