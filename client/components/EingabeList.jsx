import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Swal from "sweetalert2";

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
        // console.log(sortedData);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  const removeBetrag = async (id) => {
    try {
      await axios.delete(
        `https://wallet-wizzard-backend.onrender.com/eingabe/${id}`
      );

      setData(data.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error removing the item: ", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="getItems monatsliste">
      <h2>
        {/* {data.map((item)=> (
          <span key={item._id} className="monath-jahr">
            {new Date(item.Datum).toLocaleString("de-DE", {
              month: "long",
              year: "numeric"
            })}
          </span>
        ))} */}
      </h2>  
      <h2>  
        <span
          className={
            bilanz >= 0 ? "monatsbilanz positiv" : "monatsbilanz negativ"
          }
        >
          Bilanz {bilanz.toFixed(2)} €
        </span>
      </h2>
      <ul>
        {data.map((item) => (
          <li key={item._id} className={item.Einzahlung ? "einnahme" : "ausgabe"}>
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
            <button
              className="entfernen-button"
              onClick={()=>{
                Swal.fire({
                  title: 'Willst du den Eintrag wirklich löschen?', 
                  text: 'Du kannst dies nicht rückgängig machen!',                 
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#d33',
                  cancelButtonColor: '#3085d6',
                  confirmButtonText: 'Löschen!',
                  cancelButtonText:'Abbruch!'
                }).then((result) => {   
                  if (result.isConfirmed) {                    
                    removeBetrag(item._id)                                       
                    Swal.fire(
                      'Eintrag wurde Gelöscht!',
                      '',
                      'success'
                    )
                  }
                })
              }}
              aria-label="Delete item"
            >
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