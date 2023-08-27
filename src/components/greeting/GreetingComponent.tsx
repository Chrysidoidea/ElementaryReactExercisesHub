import React from "react";
import { GlassWrapperWithAnimation } from "../styled/GlassStyled";

type GreetingComponentType = {
    name?: string;
}

export const GreetingComponent: React.FC<GreetingComponentType> = ({ name = "Guest" }) => {
    return (
        <GlassWrapperWithAnimation>
            <h1>Greetings {name}</h1>
            <p>Discover our React component exhibit, showcasing modern web development's versatility through dynamic interfaces and unique components designed for diverse coding challenges. Join us on this captivating frontend journey.</p>               
        </GlassWrapperWithAnimation>
    )
};