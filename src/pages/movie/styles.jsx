import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-position: center;
    position: relative;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-image: url(${props => props.background});
        background-size: cover;
        filter: blur(8px); /* Aplica o efeito de blur na imagem de fundo */
    }

    & > div {
        z-index: 1; /* Coloca o conteúdo por cima da imagem de fundo */
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
        z-index: 1; /* Coloca o título por cima da imagem de fundo */
    }
`;

export const DetailsArea = styled.div`
    border: 1px solid pink;

`