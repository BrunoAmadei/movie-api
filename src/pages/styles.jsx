import styled from "styled-components";

export const Container = styled.div`
    margin: 1.8rem;
    overflow: hidden;
`

export const Cards = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1.5rem;
    flex-wrap: wrap;
`

export const Card = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.25rem;
    gap: 15px;    
`

export const MovieTitle = styled.span`
    font-weight: bold;
    font-size: 1.35rem;
`