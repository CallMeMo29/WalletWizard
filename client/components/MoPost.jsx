import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const MoPost = () => {
  const [titel, setTitel] = useState("");
  const [typ, setTyp] = useState("");
  const [betrag, setBetrag] = useState("");
  const [datum, setDatum] = useState("");

  //überschreibt das standard ereignis, lässt raum für ein custom ereigniss
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Schema = Data
    const data = {
      Titel: titel,
      Betrag: betrag,
      Einzahlung: typ === "einnahme",
      Datum: datum || undefined,
    };
    //Backend verbindung + Data = Wenn Daten gesendet dann Alert
    try {
      const response = await axios.post(
        "https://wallet-wizzard-backend.onrender.com/eingabe",
        data
      );
      console.log(response.data);
      alert("Eingabe gesendet");
      window.location.reload();
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Something went wrong!");
    }
  };
  //Eingabeformular
  return (
    <section id="eingabeformular-container">
      {/* handleSubmit function is a wrapper for react-hook-form to manage your data inputs, validation, errors, etc.. before calling your own sendData function. */}
      <form id="eingabeformular" onSubmit={handleSubmit}>
        <div className="eingabe-zeile">
          <h1>Neue Einnahme / Ausgabe hinzufügen</h1>
        </div>
        <div className="eingabe-zeile">
          <div className="titel-typ-eingabe-gruppe">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="titel"
              value={titel}
              onChange={(e) => setTitel(e.target.value)}
              placeholder="z.B. Einkaufen"
              size={10}
              title={"Titel des Eintrags"}
            />
            <input
              type="radio"
              id="einahme"
              name="typ"
              value="einnahme"
              checked={typ === "einnahme"}
              onChange={(e) => setTyp(e.target.value)}
              title={"Typ des Eintrags"}
            />
            <label htmlFor="einnahme" title={"Typ des Eintrags"}>
              Einnahme
            </label>
            <input
              type="radio"
              id="ausgabe"
              name="typ"
              value="ausgabe"
              checked={typ === "ausgabe"}
              onChange={(e) => setTyp(e.target.value)}
              title="Typ des Eintrags"
            />
            <label htmlFor="ausgabe" title="Typ des Eintrags">
              Ausgabe
            </label>
          </div>
        </div>
        <div className="eingabe-zeile">
          <div className="betrag-datum-eingabe">
            <label htmlFor="betrag">Betrag:</label>
            <input
              type="number"
              id="betrag"
              name="betrag"
              value={betrag}
              onChange={(e) => setBetrag(e.target.value)}
              placeholder="z.B. 10,42"
              size={10}
              step="0.01"
              title="Betrag des Eintrags (max. zwei Nachkommastellen, kein €-Zeichen)"
            />
            <label htmlFor="datum">Datum:</label>
            <input
              type="date"
              id="datum"
              name="datum"
              value={datum}
              onChange={(e) => setDatum(e.target.value)}
              placeholder="jjjj-mm-tt"
              size={10}
              title={"Datum des Eintrags (Format: jjjj-mm-tt)"}
            />
          </div>
        </div>
        <div className="eingabe-zeile">
          <button className="standard" type="submit" form="eingabeformular">
            Hinzufügen
          </button>
        </div>
      </form>
    </section>
  );
};
export default MoPost;
