import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';
import '@fortawesome/fontawesome-free/css/all.css';
import ContinuousScrollZoom from './components/home/ContinuousScrollZoom';

function App() {
  return (
    <div>
      <Navbar />
      <ContinuousScrollZoom />
      <Footer />
    </div>
  );
}

export default App;
