import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-position: center;
    position: relative;
    width: 100%;
    height: 100%;
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
        padding: 5rem;
        background-color: rgba(0, 0, 0, 0.4); 
        width: 100%;
        height: 100%;
        flex-direction: column;
        
    }
  
    @media screen and (max-width: 760px) {
      & > div {
        padding: 2rem;
      }   
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    padding: 10px;
    color: #b11623;
    padding-top: 130px;
    text-align: center;
    z-index: 1; 
  @media screen and (max-width: 760px){ 
      h1 {
        font-size: 1.5rem;
      }
    }
`

export const DetailsArea = styled.div`
    display: flex;
    align-items: center;
    margin: 0 2rem ;
    
    @media screen and (max-width: 760px) {
      flex-direction: column;
      margin: 1rem 0;
    }
`
export const InfoBox = styled.div`
    padding: 0.5rem;  
    img {
        width: 300px;
        border-radius: 1rem;   
        box-shadow: rgba(0, 0, 0, 0.815) 0px 5px 15px;
    }
    
    @media screen and (max-width: 760px) {
      img {
        width: 100%;
      }
    }
`

export const Info = styled.div`
    display: flex;
    font-size: 1rem;
    gap: 1rem;
    span{
      color: #b11623;
    }
    @media screen and (max-width: 760px) {
      gap: 0.8rem;
    }
`
export const Genre = styled.p`
  margin-top: 12px;
  font-size: 1rem;
`

export const DescriptionContainer = styled.section`
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 760px) {
      margin-left: 0;
      margin-top: 1rem;
      text-align: center;
    }
`;

export const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    @media screen and (max-width: 760px) {
        width: 370px;
        padding: 16px;
    }
`;

export const Video = styled.iframe`
    align-items: center;
    border: 1px solid  #9f111b;
    border-radius: 5px;
    @media screen and (max-width: 760px) {
        width: 375px;
    }
`
export const Description = styled.div`
    z-index: 1;
    font-size: 1.2rem;   
    padding: 0.5rem;
    color: #fff;
    width: 100%;
    h2{
        margin: 0.5rem 0;
        color:#cccccc;
    }
    @media screen and (max-width: 760px) {
        width: 375px;
        font-size: 16px;
    }
`