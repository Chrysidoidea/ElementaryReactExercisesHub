import styled from 'styled-components';
import React, { ReactNode } from 'react';
import {motion} from 'framer-motion';

export const GlassWrapper = styled.div`
    background: linear-gradient(#FFFFFF10, #62626211);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.22);
    backdrop-filter: blur(5rem);
    display: grid;
    place-content: center;
    padding: 0.5rem;
    border-radius: 0.3rem;
    color: #F3F3F3;
    max-width: 50rem;
`;

type GlassWrapperWithAnimationProps = {
    children: ReactNode;
}

export const GlassWrapperWithAnimation:React.FC<GlassWrapperWithAnimationProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.5 }}
        >
            <GlassWrapper>{children}</GlassWrapper>
        </motion.div>
    );
};

