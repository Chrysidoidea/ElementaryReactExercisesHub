import styled from 'styled-components';

export const ConverterWrapper = styled.div`
    display: flex;
    flex-direction: column;

    & > input, button {
        margin: 0.4rem 0;
        padding: 0.5rem;
        border-radius: 0.3rem;
        outline: none;
        border: none;
        color: #000000B6;
    }

    & > input {
        background-color: #FFFFFFB6;
        height: 2rem;
        font-weight: bold;
    }

    & > label {
        color: white;
    }

`;