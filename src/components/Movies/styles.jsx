import styled from "styled-components";

export const MovieRow = styled.div`
    margin: 0 0 1.135rem 1.8rem;
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
        border: 3px solid #9f111b;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transform: scale(0.9);
        transition: all ease-in 0.3s;
    }img:hover{
        transform: scale(1);
        cursor: pointer;
    }
`