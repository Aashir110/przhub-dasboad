import React, { useState } from "react";
import "./Main.css";
import Categeory from "../data/fake";
function Main() {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const handleSearchInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);

    // Filter category and subcategory titles based on the first letter of the input
    const filteredSuggestions = Categeory.filter((category) =>
      category.title.toLowerCase().startsWith(input.toLowerCase())
    ).map((category) => category.title);

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    setSuggestions([]); // Clear the suggestion list when a suggestion is selected
  };

  return (
    <div className="">
      <div className="main">
        <div className="detail">
          <h1>Find the perfect professional for you</h1>
          <h3>Get free quotes within minutes</h3>

          <div className="container p">
            <div className="flex-box">
              <div className="">
                <div className="search-box p">
                  <div className="box">
                    <input
                      type="search"
                      placeholder="What service are you looking for?"
                      className="serch"
                      value={searchInput}
                      onChange={handleSearchInputChange}
                    />
                  </div>
                  <div className="box2">
                    <i class="fa-solid fa-location-dot"></i>
                    <input
                      type="text"
                      placeholder="postal code"
                      className="postal"
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <button className="search-btn"> Search</button>
              </div>
            </div>
          </div>
          {suggestions.length > 0 && (
            <ul className="suggestion-list">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
          <p>Popular: House Cleaning, Web Design, Personal Trainers</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
