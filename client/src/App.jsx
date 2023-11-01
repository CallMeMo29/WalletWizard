
//import "../components/AlfisCss.css";
import Navbar from "../components/Navbar";
import Eingabeformular from "../components/Eingabeformular";
import MoPost from "../components/MoPost";
import EingabeList from "../components/Mofetch";

function App() {
  return (
    <>
      <div>

        <div>
          <Navbar></Navbar>
        </div>
        
//         <Eingabeformular></Eingabeformular>
        <Footer></Footer>

        <Navbar />
      
        <MoPost />
        <EingabeList />

      </div>
    </>
  );
}

export default App;
