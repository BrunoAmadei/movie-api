import { Link } from 'react-router-dom'
import { BtnSearch, InputSearch, Logo, Nav, SearchBox } from './styles';
import { BsSearch } from "react-icons/bs";

function Navbar({ bgHeader }) {
    return (
        <Nav style = {{ backgroundColor: bgHeader ? '#1b1d24' : 'transparent' }}>
            <Logo>Get Movies</Logo>

            <SearchBox>
                <InputSearch type="text" placeholder='search' />
                <BtnSearch type='submit'><BsSearch /></BtnSearch>
            </SearchBox>
        </Nav >
    )
}

export default Navbar;