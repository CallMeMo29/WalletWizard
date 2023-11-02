import React from 'react';
class Gesamtbilanz extends React.Component {
  constructor() {
    super();
    this.state = {
      einnahmen: 0,
      ausgaben: 0,
      bilanz: 0,
      html: this.htmlGenerieren()
    };
  }

  aktualisieren(eintraege) {
    let einnahmen = 0;
    let ausgaben = 0;
    let bilanz = 0;

    eintraege.forEach(eintrag => {
      switch (eintrag.typ()) {
        case "einnahme":
          einnahmen += eintrag.betrag();
          bilanz += eintrag.betrag();
          break;
        case "ausgabe":
          ausgaben += eintrag.betrag();
          bilanz -= eintrag.betrag();
          break;
        default:
          console.log(`Der Typ "${eintrag.typ()}" ist nicht bekannt.`);
          break;
      }
    });

    this.setState({
      einnahmen: einnahmen,
      ausgaben: ausgaben,
      bilanz: bilanz,
      html: this.htmlGenerieren()
    });

   this.anzeigen(); 
 }

 htmlGenerieren() {       
   return (
     <div id="gesamtbilanz">
       <h1>Gesamtbilanz</h1>
       <div className="gesamtbilanz-zeile">
         <span>Einnahmen:</span>
         <span>{(this.state.einnahmen /100).toFixed(2).replace(/\./, ",")} €</span>
       </div>
       <div className="gesamtbilanz-zeile">
         <span>Ausgaben:</span>
         <span>{(this.state.ausgaben /100).toFixed(2).replace(/\./, ",")} €</span>
       </div>
       <div className="gesamtbilanz-zeile">
         <span>Bilanz:</span>
         <span className={this.state.bilanz >= 0 ? "positiv" : "negativ"}>
           {(this.state.bilanz /100).toFixed(2).replace(/\./, ",")} €
         </span>
       </div>
     </div> 
   );
 }

 anzeigen() {
   let gesamtbilanz = document.querySelector("#gesamtbilanz");
   if (gesamtbilanz !== null) {
     gesamtbilanz.remove();
   }
   document.querySelector("body").insertAdjacentElement("beforeend", this.state.html);
 }

 render() {
    return (
      <>
        {this.state.html}
      </>
    );
  }
}

export default Gesamtbilanz;