import React, {ReactNode} from 'react';
import styled, { keyframes } from 'styled-components';
import {motion} from 'framer-motion';

export const ColorPickerWrapper = styled.div`
    display: flex;
    padding: 2rem;
    justify-content: center;
    align-items: center;
    position: inherit;

    & > label {
        position: absolute;
        top: 3rem;
        & > input {
            margin-left: .3rem;
        }
    }
`;

type ColorExampleProps = {
    color: string;
}

export const ColorExampleStyled = styled.div<ColorExampleProps>`
    width: 8rem;
    height: 8rem;
    background-color: ${props => props.color};
    border-radius: 50%;
    position: relative;
`;

const OrbitAnimation = keyframes`
    0% {
        transform: rotate(0deg) translateX(150px) rotate(0deg) scale(1)
    } 25% {
        transform: rotate(90deg) translateX(150px) rotate(-90deg) scale(1.4)
    } 50% {
        transform: rotate(180deg) translateX(150px) rotate(-180deg) scale(1)
    } 75% {
        transform: rotate(270deg) translateX(150px) rotate(-270deg) scale(.5)
    } 100% {
        transform: rotate(360deg) translateX(150px) rotate(-360deg) scale(1)
    }
`;

export const Moon = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #5B81E3B3;
    position: absolute;
    top: 50%;
    left: 50%;
    animation: ${OrbitAnimation} 5s linear infinite;
`
type SunWrapperProps = {
    children: ReactNode;
    color: string;
};

export const SunWrapper: React.FC<SunWrapperProps> = ({children, color}) => {
    return (
        <ColorExampleStyled 
        as={motion.div}
        initial={{opacity: 0, y: -200}}
        animate={{opacity: 1, y: 0}}
        transition={{type: 'spring'}}
        exit={{opacity: 0}}
        color={color}>
            {children}
        </ColorExampleStyled>
    )
}