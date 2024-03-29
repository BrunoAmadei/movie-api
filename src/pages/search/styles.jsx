import styled from "styled-components";

export const Container = styled.div`
    overflow-x: hidden;
    padding: 1.5rem;
    text-transform: capitalize;
    h2{
        margin-top: 5rem;
        font-size: 1rem;
        font-style: italic;
        @media screen and (max-width: 760px) {
            padding-top: 50px;
        }   
    }
`

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 25px;
`

export const Movie = styled.div`
    width: 100%; 
    max-width: 220px;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    img{
        width: 100%;
        border-radius: 1rem;
        border: 3px solid #9f111b; 
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transform: scale(0.9);
        transition: all ease-in 0.3s;
    }
    img:hover{
        transform: scale(1);
        cursor: pointer;
    }

    /* media query para telas menores */
    @media screen and (max-width: 760px) {
        max-width: 300px;
        margin: 12px auto;
    }
`
