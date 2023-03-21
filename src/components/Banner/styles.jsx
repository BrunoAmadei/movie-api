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
    background: linear-gradient(to right, #292c37, transparent);
`

export const Title = styled.div`
    font-size: 3.7rem;
    font-weight: bold;
    color: #b11623;
    
`

export const Info = styled.div`
    font-size: 1.35rem;
    margin-top: 0.6rem;
    display: flex;
    align-items: center;
    gap: 1rem;
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
        font-size: 1.2rem;
    }
`
export const Description = styled.div`
`