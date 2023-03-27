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
    transition: all ease 0.4s;
    @media screen and (max-width: 760px) {
        flex-direction: column;
        height: auto;
        padding: 1rem;
    }
`

export const Logo = styled.h1`
    color: #9f111b;
    font-size: 2rem;
    letter-spacing: 2px;
`

export const SearchBox = styled.div`
    max-width: 400px;
    position: relative;
    &:hover > form > input{
        background-color: rgba(41, 44, 55, 0.8);
    }
    &:hover > form > button{
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
    width: 100%;
    @media (max-width: 760px) {
       margin-top: 15px;
    }
`

export const BtnSearch = styled.button`
    color: white;
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
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-25%, 10%);
    @media (max-width: 760px) {
        transform: translate(-40%, 50%);
    }
`

