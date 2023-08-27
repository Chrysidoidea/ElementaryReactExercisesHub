import React, { useState } from "react";
import { CounterComponentStyled } from "../styled/CounterComponentStyles";
import { ButtonWrapperStyled } from "../styled/CounterComponentStyles";
import { GlassWrapperWithAnimation } from "../styled/GlassStyled";

export const CounterComponent: React.FC = () => {
    const [counter, setCounter] = useState<number>(0);
    const [inputValue, setInputValue] = useState<number>(0);
    const InputValueText = isNaN(inputValue) ? " to 0" : ` to ${inputValue}`;


    const incrementHandler = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };
    const decrementHandler = () => {
        setCounter((prevCounter) => prevCounter - 1)
    }
    const customDecrement = () => {
        if (!isNaN(inputValue)) {
            setCounter((prevCounter) => prevCounter - inputValue)

        }
    }
    const customIncrement = () => {
        if (!isNaN(inputValue)) {
            setCounter((prevCounter) => prevCounter + inputValue)
        }
    };


    return (
        <GlassWrapperWithAnimation>
            <CounterComponentStyled>
                <ButtonWrapperStyled>
                    <button onClick={decrementHandler}>Decrement</button>
                    <span>{counter}</span>
                    <button onClick={incrementHandler}>Increment</button>
                </ButtonWrapperStyled>
                <ButtonWrapperStyled>
                    <button onClick={customDecrement}>Decrement {InputValueText}</button>
                    <input id="counterInput" type="text" maxLength={7} onChange={(e) => setInputValue(parseFloat(e.target.value))}></input>
                    <button onClick={customIncrement}>Increment {InputValueText}</button>
                </ButtonWrapperStyled>
            </CounterComponentStyled>
        </GlassWrapperWithAnimation>
    )
}