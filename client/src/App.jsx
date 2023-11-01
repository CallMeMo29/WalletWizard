//import "../components/AlfisCss.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";
import MoPost from "../components/MoPost";
import EingabeList from "../components/Mofetch";
import Footer from "../components/Footer";


function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <MoPost />
        <EingabeList />
        <Footer />
      </div>
    </>
  );
}

export default App;
