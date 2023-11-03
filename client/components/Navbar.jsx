import React from "react";
import MenuListe from "./DropDown";

export default function Navbar() {
  return (
    <div id="navigationsleiste" className="text-center">
      <div className="row">
        {/* <div className="col"></div> */}
        <div className="col">
          <a href="#">
            <span id="markenname">Wallet-Wizard</span>
            <p>@MoCa mit Schuss!</p>
          </a>
        </div>
        <div id="MenuD" className="col">
          <MenuListe />
        </div>
      </div>
    </div>
  );
}
