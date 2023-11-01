import React from 'react';
import MenuListe from './DropDown';

export default function Navbar() {
  return (

    <div id="navigationsleiste" className="container text-center">
      <div className="row">
        <div className="col">
          
        </div>
        <div className="col">
          <a href="#">
            <span id="markenname">Wallet-Wizard</span>
            <p>@MoCa mit Schuss!</p>
          </a>
        </div>
        <div className="col">
          <MenuListe />
        </div>
      </div>
    </div>
    );
}