// import '../components/AlfisCss.css';
import Navbar from '../components/Navbar';
import Eingabeformular from '../components/Eingabeformular';
// import Gesamtbilanz from '../components/Gesamtbilanz';
import Footer from '../components/Footer';

function App() {

  return (
    <>
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        
        <Eingabeformular></Eingabeformular>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
