import { Link } from 'react-router-dom'
import { BtnSearch, InputSearch, Logo, Nav, SearchBox } from './styles';
import { BsSearch } from "react-icons/bs";

function Navbar() {
    return (
        <Nav>
            <Logo>Get Movies</Logo>

            <SearchBox>
                <InputSearch type="text" placeholder='search' />
                <BtnSearch type='submit'><BsSearch /></BtnSearch>
            </SearchBox>
        </Nav>
    )
}

export default Navbar;