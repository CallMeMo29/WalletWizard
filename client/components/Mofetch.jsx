import { useState, useEffect } from "react";
import axios from "axios";

const EingabeList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // fetching data from backend
      try {
        const response = await axios.get(
          "https://wallet-wizzard-backend.onrender.com/eingabe"
        );
        // data wird gleich backend data gesetzt
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
    //] stellt sicher, dass die Funktion nur einmal nach dem ersten Rendern ausgeführt wird.
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="getItems">
      <h2>Liste der Eingaben</h2>
      <ul>
        <div className="">
          {data.map((item) => (
            <li key={item._id}>
              <strong>{item.Titel || "No title"}</strong>
              {item.Betrag && item.Betrag.$numberDecimal
                ? `${item.Betrag.$numberDecimal} €`
                : ""}{" "}
              {item.Einzahlung !== undefined
                ? item.Einzahlung
                  ? "Einnahme"
                  : "Ausgabe"
                : ""}{" "}
              {item.Datum ? new Date(item.Datum).toLocaleDateString() : ""}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default EingabeList;
