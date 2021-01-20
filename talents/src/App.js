import logo from './logo.svg';
import './App.css';
import HeadBanner from './Components/HeadBanner'
import Footer from './Components/Footer'
import MainBody from './Components/MainBody'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <HeadBanner />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
