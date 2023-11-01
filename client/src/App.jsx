
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
      
        <MoPost />
        <EingabeList />
      </div>
    </>
  );
}

export default App;
