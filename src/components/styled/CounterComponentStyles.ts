import styled from 'styled-components';


export const CounterComponentStyled = styled.div`
    padding: 2rem;
    display: flex;
    border-radius: 0.3rem;
    color: #F3F3F3;
    font-weight: bold;
    font-size: 2rem;
    flex-direction: column;
    align-items: center;
`;

export const ButtonWrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0.3rem;

    & > button {
        margin: 0 0.3rem;
        padding: 0.5rem;
        background-color: #3F1D389D;
        color: #F3F3F3;
        border-radius: 0.2rem;
        cursor: pointer;
        border: none;
    }

    & > input {
        border-radius: 0.3rem;
        outline: none;
        background-color: #3F1D385A;
        color: #F3F3F3;
        border: none;
    }
`;