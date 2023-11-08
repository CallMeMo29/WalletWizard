/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Herbst from "./Herbst"; // Import the Herbst component

const MenuListe = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  // Initialize selectedBackground state from localStorage or default to ''
  const [selectedBackground, setSelectedBackground] = useState(
    localStorage.getItem("selectedTheme") || ""
  );

  const backgroundClasses = {
    WB: "WB-background",
    spring: "spring-background",
    summer: "summer-background",
    dark: "dark-background",
    winter: "winter-background",
    Neon: "dark-neon-background",
    Schneeflocken: "snow",
    Clouds: "cloud-background",
    // Add other background options as needed
  };

  const specialComponents = {
    Herbst: <Herbst />,
    // Add other special components here if needed
  };

  useEffect(() => {
    // Apply the theme when the component mounts
    const theme = localStorage.getItem("selectedTheme");
    if (theme) {
      applyBackground(theme);
    }
  }, []);

  const handleBackgroundChange = (background) => {
    setSelectedBackground(background);
    applyBackground(background);
    localStorage.setItem("selectedTheme", background); // Save to localStorage
    setShowDropdown(false);
  };

  const applyBackground = (background) => {
    if (backgroundClasses[background]) {
      document.body.className = backgroundClasses[background];
    } else {
      document.body.className = "";
    }
  };

  return (
    <div className="custom-dropdown">
      <button className="btn" onClick={() => setShowDropdown(!showDropdown)}>
        {selectedBackground || "Theme"}
      </button>
      {showDropdown && (
        <div className="custom-dropdown-menu">
          {Object.keys({ ...backgroundClasses, ...specialComponents }).map(
            (background) => (
              <button
                key={background}
                className="btn"
                onClick={() => handleBackgroundChange(background)}
              >
                {background}
              </button>
            )
          )}
        </div>
      )}
      {selectedBackground === "Herbst" && specialComponents[selectedBackground]}
    </div>
  );
};

export default MenuListe;
