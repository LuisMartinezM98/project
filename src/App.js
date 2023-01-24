import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className='App'>
      <Router >
        <Header/>
        <Navbar/>
        <Main/>
        <Footer/>
      </Router>
    </div>

  );
};

export default App;
