import Navbar from '../components/Navbar';
import MoPost from '../components/MoPost';
import EingabeList from '../components/EingabeList';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className='container1'>
        <Navbar />
        <MoPost />
        <EingabeList />
        <Footer />
      </div>
    </>
  );
}

export default App;
