import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch }) => {

    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
            <Link to='/about' ><button>About</button></Link>
            <Link to='/home' ><button>Home</button></Link>
        </nav>
    )
}

export default Nav;