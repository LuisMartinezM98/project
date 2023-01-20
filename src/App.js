
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
    <div className='App'>
      <Router >
        <Header/>
        <Nav/>
        <Main/>
        <Footer/>
      </Router>
    </div>

  );
};

export default App;
