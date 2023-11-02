//import "../components/AlfisCss.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import MoPost from "../components/MoPost";
import EingabeList from "../components/EingabeList";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <div className="container1">
        <Navbar />
        <MoPost />
        <EingabeList />
        {/* <Gesamtbilanz /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
