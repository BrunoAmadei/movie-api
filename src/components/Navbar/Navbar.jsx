import { Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";

import { Nav, Btn, Form, Input } from './styles';

function Navbar() {
    return (
        <Nav>
            <Link to={'/'}>
                <h1 className='link'>Titulo legal</h1>
            </Link>
            <Form>
                <Input type="text" placeholder='search movie' />
                <Btn type='submit'>
                    <AiOutlineSearch />
                </Btn>
            </Form>
        </Nav>
    )
}

export default Navbar;