import {Routes, Route, Link} from 'react-router-dom';
import Header from './header';


function Nav () {
    return(
        <nav>
            <Link to ="/" className='nav-item'> Homepage</Link>
        </nav>
        <Routes>
        <Route path="/" element={ <Header />} />
        </Routes>
    );
};

export default Nav;