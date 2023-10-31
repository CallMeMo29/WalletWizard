import React from "react";

const Eingabeformular = () => {
    return (
        <section id="eingabeformular-container">
            <form id="eingabeformular" action="#" method="get">
                <div className="eingabeformular-zeile">
                    <h1>Neue Einnahme / Ausgabe hinzufügen</h1>
                </div>
                <div className="eingabeformular-zeile">
                <div className="titel-typ-eingabe-gruppe">
                    <label htmlFor="titel">Titel</label>
                    <input type="text" id="titel" form="eingabeformular" name="titel" placeholder="z.B. Einkaufen" size={10} title={"Titel des Eintrags"}/>
                    <input type='radio' id='einnahme' name='typ' value='einnahme' form='eingabeformular' title={'Typ des Eintrags'}/>
                    <label htmlFor='einnahme' title={'Typ des Eintrags'}>Einnahme</label>
                    <input type='radio' id='ausgabe' name='typ' value= 'ausgabe'
                    form='eingabeformular'
                    title='Typ des Eintrags'
                    defaultChecked
                    />
                    <label htmlFor="ausgabe" title="Typ des Eintrags">Ausgabe</label> 
                </div> 
                </div> 
                <div className="eingabeformular-zeile">
                    <div className="betrag-datum-eingabe-gruppe">
                        <label htmlFor="betrag">Betrag</label> 
                        <input type="number" id="betrag" name="betrag"
                            form="eingabeformular"
                            placeholder="z.B. 10,42"
                            size = { 10 }
                            step= '0.01'
                            title= 'Betrag des Eintrags (max. zwei Nachkommastellen, kein €-Zeichen)'/> 
                        <label htmlFor='datum'>Datum</label>
                        <input type='date' id='datum' name='datum' form='eingabeformular' placeholder="jjjj-mm-tt" size={10} title={"Datum des Eintrags (Format: jjjj-mm-tt)"} />
                    </div>
                </div> 
                <div className="eingabeformular-zeile">
                    <button className="standard" type="submit" form="eingabeformular">Hinzufügen</button>
                </div> 
            </form>
        </section>
      
    );
  };
  
  export default Eingabeformular;
