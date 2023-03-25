import styled from "styled-components";

export const MovieRow = styled.div`
    margin: 0 0 1.135rem 1.8rem;
    &:hover > div{
        opacity: 1;
        color: #9f111b;
    }
`

export const Cards = styled.div`
    overflow-x: hidden;
    padding-left: 2rem;
`

export const Card = styled.div`
    width: 9999999px;
`

export const Item = styled.div`
    display: inline-block;
    width: 230px;
    img{
        width: 100%;
        border-radius: 1rem;
        /* border: 3px solid #9f111b; */
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transform: scale(0.9);
        transition: all ease-in 0.3s;
    }img:hover{
        transform: scale(1);
        cursor: pointer;
    }
`
export const BackArrow = styled.div`
    margin-top: 1rem;
    position: absolute;
    left: 1.3%;
    font-size: 50px;
    width: 70px;
    height: 315px;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    opacity: 0;
    border-radius: 1rem 0 0 1rem;
    transition: all ease-in 0.3s;
`
export const ForwardArrow = styled.div`
    margin-top: 1rem;
    position: absolute;
    right: 0;
    font-size: 50px;
    width: 70px;
    height: 315px;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    opacity: 0;
    border-radius: 0 1rem 1rem 0;
    transition: all 0.5s;
`