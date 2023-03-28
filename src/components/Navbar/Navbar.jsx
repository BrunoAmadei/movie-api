import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { BtnSearch, InputSearch, Logo, Nav, SearchBox } from './styles';
import { BsSearch } from "react-icons/bs";

function Navbar() {
    const [search, setSearch] = useState("")
    const [bgHeader, setBgHeader] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        if (scrollPosition > 100) {
            setBgHeader(true);
        } else {
            setBgHeader(false);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!search) return
        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return (
        <Nav style={{ backgroundColor: bgHeader ? '#1b1d24' : 'transparent' }}>
            <Link to={'/'}>
                <Logo>Get Movies</Logo>
            </Link>

            <SearchBox>
                <form onSubmit={handleSubmit}>
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