import './App.css';
import Header from './components/Header';
import Main2 from './components/Main2';
import Footer from './components/Footer';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className='App'>
      <Router >
        <Header/>
        <Navbar/>
        <Main2/>
        <Footer/>
      </Router>
    </div>

  );
};

export default App;
