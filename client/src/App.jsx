//import "../components/AlfisCss.css";
import Navbar from "../components/Navbar";
import MoPost from "../components/MoPost";
import EingabeList from "../components/Mofetch";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <div>
        {/* <div>
        <Navbar />
        </div> */}

        {/* <Eingabeformular></Eingabeformular> */}
        <Navbar />
        <MoPost />
        <EingabeList />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
