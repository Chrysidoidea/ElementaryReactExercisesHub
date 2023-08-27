import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavMenuStyled } from './AppStyled';

export const NavigationComponent: React.FC = () => {
    return (
        <NavMenuStyled>
            <ul>
                <li><NavLink to="/greetings">Greetings Page</NavLink></li>
                <li><NavLink to="/counter">Counter Page</NavLink></li>
                <li><NavLink to="/todo">ToDo Page</NavLink></li>
                <li><NavLink to="/color-picker">Color-Picker Page</NavLink></li>
                <li><NavLink to="/toggle">Toggle Page</NavLink></li>
                <li><NavLink to="/registration">Registration Page</NavLink></li>
                <li><NavLink to="/temp-converter">Tem Converter Page</NavLink></li>
                <li><NavLink to="/count-down">Count-Down Page</NavLink></li>
                <li><NavLink to="/quotes">Random Quote Page</NavLink></li>
                <li><NavLink to="/limited-input">InputLimited Page</NavLink></li>
            </ul>
        </NavMenuStyled>
    )
}