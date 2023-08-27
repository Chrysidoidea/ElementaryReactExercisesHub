import styled from 'styled-components';

export const ChronoMeter = styled.div`
    font-size: 3rem;
    grid-area: 1 / 1 / 2 / 5;
    display: grid;
    place-content: center;
`;

export const CountdownStyled = styled.div`
    color: wheat;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    & > button {
        border-radius: 0.4rem;
        cursor: pointer;
        padding: .5rem;
        margin: .5rem;
        border: none;
    }


    `;

export const ResetBtn = styled.button`
        grid-area: 2 / 1 / 3 / 3;
        background-color: lightpink;
`;
export const SubmitBtn = styled.button`
        grid-area: 2 / 3 / 3 / 5;
        background-color: lightblue;
`;
export const FormWrapper = styled.div`
    grid-area: 3 / 1 / 3 / 5;

    & > form {
        padding: .2rem;
    }
    & > form > input {
        padding: .5rem;
        margin: .1rem;
        border-radius: .2rem;
        border: none;
        outline: none;
    }
`;