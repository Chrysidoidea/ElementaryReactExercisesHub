import { ReactNode } from "react";
import {easeIn, motion} from 'framer-motion';
import styled from "styled-components";

export const ToDoFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;

    & > input, textarea {
        border-radius: .3rem;
        outline: none;
        border: none;
        background-color: #0000002E;
        color: #F5F5F5;
        height: 2rem;
        padding: .5rem;        
    }
    & > textarea {
        height: 14rem;
        resize: none;
    }
    & > input::placeholder, textarea::placeholder {
        color: #E3DDDDBF;
    }

    & > input, textarea, button {
        margin: .2rem;
        width: 100%;
    };

    & > button {
        background-color: #E3DDDDBF;
        cursor: pointer;
        color: #221F1F9A;
        border: none;
        padding: .4rem;
        text-transform: uppercase;
        border-radius: .3rem;
    }
`;

export const TaskComponentStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    justify-content: center;
    align-items: center;
    border-radius: .5rem;
    width: 100%;
    padding: 1.6rem;
    background: linear-gradient(#E3DDDD43,#E3DDDD30);
    backdrop-filter: blur(5rem);

    & > span:first-child {
        font-size: 1.5rem;
        color: #F2F2F2F3;
        font-weight: bold;
    }
    & > span:last-child {
        color: #F3F3F3DD;
        font-size: .7rem;
    }
`;
type TaskComponentAnimatedProps = {
    children: ReactNode,
}

export const TaskComponentAnimated: React.FC<TaskComponentAnimatedProps> = ({children}) => {
    return (
        <TaskComponentStyled
        as={motion.div}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ 
            type: "spring",
            stiffness: 150,
            duration: 0.5 
        }}
        >
            {children}
        </TaskComponentStyled>
    )
}