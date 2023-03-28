import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-position: center;
    position: relative;
    width: 100%;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-image: url(${props => props.background});
        background-size: cover;
        filter: blur(8px); 
    }

    & > div {
        z-index: 1; 
        display: flex;
        padding: 2rem;
        background-color: rgba(0, 0, 0, 0.4); 
        width: 100%;
        height: 100%;
        flex-direction: column;
    }

    h1 {
        font-size: 2rem;
        padding: 10px;
        color: #9f111b;
        margin: 0;
        text-align: center;
        z-index: 1; 
    }
`;

export const DetailsArea = styled.div`
    display: flex;
    align-items: center;
    margin: 0 2rem ;
`
export const InfoBox = styled.div`
    padding: 0.5rem;
`

export const Info = styled.div`
    display: flex;
    font-size: 1rem;
    gap: 1rem;
`
export const DescriptionContainer = styled.section`
    border: 1px solid blue;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const VideoContainer = styled.div`
    h2{
        
        padding: 12px;
    }
`;

export const Description = styled.div`
    font-size: 1.3rem;   
    padding: 0.5rem;
    color: #fff;
    width: 100%;
`


