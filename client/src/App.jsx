//import "../components/AlfisCss.css";
import Navbar from "../components/Navbar";
import Eingabeformular from "../components/Eingabeformular";
import MoPost from "../components/MoPost";
import EingabeList from "../components/Mofetch";

function App() {
  return (
    <>
      <div>
        <Navbar />
        {/* <Eingabeformular></Eingabeformular> */}
        <MoPost />
        <EingabeList />
      </div>
    </>
  );
}

export default App;
