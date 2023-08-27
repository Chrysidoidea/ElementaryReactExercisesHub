import styled from 'styled-components';

export const RegistrationWrapper = styled.div`
    display: flex;
    flex-direction: column;

    & > label {
        color: white;
    }

    & > input, button {
        border-radius: 0.3rem;
        color: #000000B6;
        border: none;
    }

    & > input {
        margin: 0.4rem 0;
        padding: 0.5rem;
        background-color: #FFFFFFB6;
        outline: none;
        border: none;
        height: 2rem;
    }

    & > button {
        background-color: #FFFFFFC3;
        text-transform: uppercase;
        font-weight: bold;
        padding: 0.5rem;
        cursor: pointer;
    }

`;