import styled from "styled-components";

export const Featured = styled.section`
    height: 100vh;
    background-size: cover;
    background-position: center;
`

export const BannerVertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #292c37 5%, transparent 95%);
`

export const BannerHorizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #292c37 25%, transparent 65%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 50px;
    padding-top: 60px;
    @media screen and (max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`

export const Title = styled.div`
    font-size: 2.15rem;
    font-weight: bold;
    color: #b11623;
    @media screen and (max-width: 768px) {
        font-size: 1.8rem;
    }
`

export const Info = styled.div`
    font-size: 1rem;
    margin-top: 0.6rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
        flex-wrap: wrap;
    }
`

export const Vote = styled.div`
    span{
        color: #9f111b;
        font-size: 1rem;
    }
`
export const ReleaseDate = styled.div`
    span{
        color: #9f111b;
        font-size: 1rem;
    }
`
export const Runtime = styled.div`
    span{
        color: #9f111b;
        font-size: 1rem;
    }
`
export const Description = styled.div`
    margin-top: 0.6rem;
    font-size: 1.25rem;
    color: #fff;
    max-width: 45%;
    @media screen and (max-width: 768px) {
        font-size: 1rem;
        max-width: 100%;
    }
`

export const BtnArea = styled.div`
    margin-top: 0.6rem;
    max-width: 28%;
    display: flex;
    justify-content: center;
    a{
        width: 100%;
        text-decoration: none;
    }
    button{
        padding: 0.8rem;
        width: 100%;
        font-size: 1.2rem;
        font-weight: lighter;
        border-radius: 1rem;
        background-color: transparent;
        color: white;
        transition: ease-in 0.2s;
    }span{
        color: #9f111b;
    }
    button:hover{
        cursor: pointer;
        color: #9f111b;
        opacity: 0.7;
    }
    @media screen and (max-width: 768px) {
        max-width: 100%;
    }
`

export const Genres = styled.div`
    margin-top: 0.7rem;
    font-size: 1rem;
    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
    }
`