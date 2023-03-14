import { Link } from 'react-router-dom'
import { Nav } from './styles';

function Navbar() {
    return (
        <Nav>
            <Link to={'/'}>
                <h1 className='link'>Titulo legal</h1>
            </Link>
            <form>
                <input type="text" placeholder='search movie' />
                <button type='submit'>search</button>
            </form>
        </Nav>
    )
} 

export default Navbar;