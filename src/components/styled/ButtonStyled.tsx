import styled from 'styled-components';
import {motion} from 'framer-motion';
import React, { ReactNode } from 'react';

export const ButtonStyled = styled.button`
    background-color: transparent;
    backdrop-filter: blur(5rem);
    border: 2px solid #070707DF;
    cursor: pointer;
    border-radius: 1rem;
    font-weight: bold;
    width: 8rem;
    height: 4rem
`;

type ButtonStyledAnimatedProps = {
    children: ReactNode;
    onClick: () => void;
}

export const ButtonStyledAnimated: React.FC<ButtonStyledAnimatedProps> = ({children, onClick}) => {
    return (
        <ButtonStyled 

        as={motion.button}

        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        transition={{ duration: 0.5 }}

        whileHover={{ 
            scale: 1.1,
            boxShadow: "rgba(0, 0, 0, 0.203) 0px 10px 30px",
        }}

        whileTap={{            
            scale: 1.05,
        }}
        
        onClick={onClick}
        >{children}</ButtonStyled>
    )
}