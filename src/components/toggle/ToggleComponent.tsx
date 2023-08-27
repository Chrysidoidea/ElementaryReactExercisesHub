import React, {useState} from 'react';
import { ButtonStyledAnimated } from '../styled/ButtonStyled';

export const ToggleComponent:React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false);

    const toggleHandler = () => {
        setToggle(!toggle)
    }

    return (
        <ButtonStyledAnimated onClick={toggleHandler}>{toggle ? "ON" : "OFF"}</ButtonStyledAnimated>
    )
}