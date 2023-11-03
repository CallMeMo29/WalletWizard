import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

const EingabeList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://wallet-wizzard-backend.onrender.com/eingabe"
        );

        const sortedData = response.data.sort(
          (a, b) => new Date(b.Datum).getTime() - new Date(a.Datum).getTime()
        );

        setData(sortedData);
        setLoading(false);
        console.log(sortedData);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Initialize Einnahmen and Ausgaben totals
  let einnahmenTotal = 0;
  let ausgabenTotal = 0;

  data.forEach((item) => {
    if (item.Einzahlung !== undefined) {
      if (item.Einzahlung) {
        einnahmenTotal += parseFloat(item.Betrag.$numberDecimal);
      } else {
        ausgabenTotal += parseFloat(item.Betrag.$numberDecimal);
      }
    }
  });

  const bilanz = einnahmenTotal - ausgabenTotal;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="getItems monatsliste">
      <h2>
        <span className="monath-jahr">August 2023</span>
        <span
          className={
            bilanz >= 0 ? "monatsbilanz positiv" : "monatsbilanz negativ"
          }
        >
          Bilanz z.b. {bilanz.toFixed(2)} €
        </span>
      </h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            <span className="titel">{item.Titel || "No title"}</span>
            <span className="betrag">
              {item.Betrag && item.Betrag.$numberDecimal
                ? `${item.Betrag.$numberDecimal} €`
                : ""}
            </span>
            <span
              className={`titel titel2 ${
                item.Einzahlung ? "einnahme" : "ausgabe"
              }`}
            >
              {item.Einzahlung !== undefined
                ? item.Einzahlung
                  ? "Einnahme"
                  : "Ausgabe"
                : ""}
            </span>
            <span className="datum">
              {item.Datum ? new Date(item.Datum).toLocaleDateString() : ""}
            </span>
            <button className="entfernen-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EingabeList;
