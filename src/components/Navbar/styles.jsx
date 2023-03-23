import styled from "styled-components";

export const Nav = styled.nav`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    transition: all ease 0.5s;
`

export const Logo = styled.h1`
    font-size: 2rem;
    letter-spacing: 2px;
`

export const SearchBox = styled.div`
    max-width: 400px;
    &:hover > input{
       background-color: rgba(41, 44, 55, 0.8);
    }
    &:hover > button{
        color: #b11623;
        cursor: pointer;
        background-color: rgba(41, 44, 55, 0.9);
    }
`

export const InputSearch = styled.input`
    padding: 0.8rem;
    background-color: rgba(0, 0, 0, 0.171);
    border: none;
    outline: none;
    border-radius: 15px;
    font-size: 1.3rem;
    color: #c1c1c1;
    transition: ease-in 0.3s;
    text-transform: capitalize;
`

export const BtnSearch = styled.button`
    color: white;
    float: right;
    transform: translate(-120%, 10%);
    font-size: 1rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.171);
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    transition: ease-in 0.3s;
`


