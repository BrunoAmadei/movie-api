import { Link } from 'react-router-dom'
import { Logo, Nav } from './styles';

function Navbar() {
    return (
        <Nav>
            <Logo>Get Movies</Logo>

            <div>
                <input type="text"/>
                <button type='submit'>search</button>
            </div>
        </Nav>
    )
}

export default Navbar;