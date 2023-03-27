import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-position: center;
    position: relative;
    width: 100%;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background-image: url(${props => props.background});
        background-size: cover;
        filter: blur(8px); 
    }

    & > div {
        z-index: 1; 
        display: flex;
        background-color: rgba(0, 0, 0, 0.4); 
        border: 1px solid blue;
        width: 100%;
        margin-top: 20px;
        flex-direction: column;
    }

    h1 {
        font-size: 2rem;
        padding: 10px;
        color: #fff;
        margin: 0;
        text-align: center;
        z-index: 1; 
    }
`;

export const DetailsArea = styled.div`
    display: flex;
    align-items: center;
    margin: 0 2rem ;
    border: 1px solid pink;
`
export const InfoBox = styled.div`
`

export const Info = styled.div`
    display: flex;
    font-size: 1rem;
    align-items: center;
    gap: 1rem;
`

export const Description = styled.div`
    font-size: 1.25rem;
    border: 1px solid green;
    color: #fff;
    width: 550px;
`