//import "../components/AlfisCss.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import MoPost from "../components/MoPost";
import EingabeList from "../components/EingabeList";
import Footer from "../components/Footer";
import Herbst from "../components/Herbst";

function App() {
  return (
    <>   
      <div className="container1">
        <Herbst></Herbst>
        {/* <Navbar />
        <MoPost />
        <EingabeList />
        <Footer /> */}
      </div> 
    </>
  );
}

export default App;
