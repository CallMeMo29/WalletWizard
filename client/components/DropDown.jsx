import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomDropdown.css"; // Import your custom CSS

const MenuListe = () => {
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
  const [selectedBackground, setSelectedBackground] = useState("");
  const backgroundClasses = {
    white: "white-background",
    spring: "spring-background",
    summer: "summer-background",
    autumn: "autumn-background",
    winter: "winter-background",
    Neon: "dark-neon-background",
    // Add other background options as needed
  };

  const handleBackgroundChange = (selectedBackground) => {
    setSelectedBackground(selectedBackground);
    applyBackground(selectedBackground);
    setShowDropdown(false); // Close the dropdown after selecting an option
  };

  // Function to apply the selected background to the body element
  const applyBackground = (selectedBackground) => {
    if (backgroundClasses[selectedBackground]) {
      document.body.className = backgroundClasses[selectedBackground];
    }
  };

  return (
    <div className="custom-dropdown">
      <button
        className="btn" // Use the custom button class
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className="icon">
          <svg viewBox="0 0 175 80" width="40" height="40">
            <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
          </svg>
        </span>
        <span className="text">MENU</span>
      </button>
      {showDropdown && (
        <div className="custom-dropdown-menu">
          {Object.keys(backgroundClasses).map((background) => (
            <button
              key={background}
              className="btn" // Use the custom button class
              onClick={() => handleBackgroundChange(background)}
            >
              <span className="icon">
                <svg viewBox="0 0 175 80" width="40" height="40">
                  <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                  <rect
                    y="30"
                    width="80"
                    height="15"
                    fill="#f0f0f0"
                    rx="10"
                  ></rect>
                  <rect
                    y="60"
                    width="80"
                    height="15"
                    fill="#f0f0f0"
                    rx="10"
                  ></rect>
                </svg>
              </span>
              <span className="text">{background}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuListe;
