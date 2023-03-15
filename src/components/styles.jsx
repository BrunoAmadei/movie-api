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
    transform:  translate(-50%,50%);
    background: #2f3640;
    margin-bottom: 28px;
    height: 40px;
    border-radius: 40px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    &:hover>Button{
        color: #b11623;
    }
`

export const Btn = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #cccccc;
    background: #2f3640;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: relative;
    top: -10px;
    transition: all 0.4s;
    &:hover{
        cursor: pointer;
    }
`

export const Input = styled.input`
    border:none;
    background: none;
    outline:none;
    float:left;
    color: #cccccc;
    font-size: 1rem;
`