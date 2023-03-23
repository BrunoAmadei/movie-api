import styled from "styled-components";

export const Nav = styled.nav`
    position: fixed;
    z-index: 999;
    border: 1px solid blue;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.h1`
    padding: 1rem;
    font-size: 2rem;
    letter-spacing: 2px;
`

export const SearchBox = styled.div`
    padding: 0.8rem 2rem 0.8rem 0;
    max-width: 400px;
    border: 1px solid purple ;
    &:hover > input{
       background-color: rgba(41, 44, 55, 0.8);
    }
    &:hover > button{
        color: #b11623;
    }
`

export const InputSearch = styled.input`
    padding: 0.6rem;
    background-color: rgba(0, 0, 0, 0.171);
    border: none;
    outline: none;
    border-radius: 15px;
    font-size: 1.3rem;
    color: #c1c1c1;
    transition: ease-in 0.3s;
`

export const BtnSearch = styled.button`
    font-size: 1.3rem;
    padding: 0.4rem;
    transition: ease-in 0.3s;
`