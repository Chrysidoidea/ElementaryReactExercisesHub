import React, { useState } from 'react';
import { RegistrationWrapper } from '../styled/RegistrationWrapper';
import { GlassWrapperWithAnimation } from '../styled/GlassStyled';

export const RegistrationFormComponent: React.FC = () => {
    const [userData, setUserData] = useState<{ name: string, password: string }>({
        name: '',
        password: '',
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(userData.name + ' ' + userData.password)
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value,
        }));
    };


    return (
        <GlassWrapperWithAnimation>
            <form action="submit">
                <RegistrationWrapper>
                    <label htmlFor="user">Username</label>
                    <input
                        id="user"
                        name='name'
                        type="text"
                        autoComplete="true"
                        value={userData.name}
                        onChange={handleChange}
                        placeholder='name'
                    />
                    <label htmlFor="passw">Password</label>
                    <input
                        id="passw"
                        type="password"
                        autoComplete="true"
                        name='password'
                        value={userData.password}
                        onChange={handleChange}
                        placeholder='password'
                    />
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                </RegistrationWrapper>
            </form>
        </GlassWrapperWithAnimation>
    )
}