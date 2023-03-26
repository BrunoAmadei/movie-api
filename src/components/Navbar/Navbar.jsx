import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { BtnSearch, InputSearch, Logo, Nav, SearchBox } from './styles';
import { BsSearch } from "react-icons/bs";

function Navbar({ bgHeader }) {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(search)
    }

    return (
        <Nav style={{ backgroundColor: bgHeader ? '#1b1d24' : 'transparent' }}>
            <Logo>Get Movies</Logo>

            <SearchBox>
                <form action="">
                    <InputSearch
                        type="text" placeholder='search'
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <BtnSearch type='submit'><BsSearch /></BtnSearch>
                </form>
            </SearchBox>
        </Nav >
    )
}

export default Navbar;