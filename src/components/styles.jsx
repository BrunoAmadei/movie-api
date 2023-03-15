import styled from "styled-components";

export const Nav = styled.nav`
    border: 1px solid black;
    height: 15vh;
    display: flex;
    align-items: center;
    padding: 2rem;
    justify-content: space-between;
`

export const Form = styled.form`
    display: flex;
    width: 300px;
    justify-content: space-around;
`

export const Btn = styled.button`
    background: transparent;
    /* outline: none;
    border: none; */
    font-size: 2rem;
    transition: ease-in 0.3s;
    &:hover{
        cursor: pointer;
        color: red;
    }
`