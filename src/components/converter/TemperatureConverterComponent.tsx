import React, { useState } from 'react';
import { ConverterWrapper } from '../styled/ConverterWrapper';
import { GlassWrapperWithAnimation } from '../styled/GlassStyled';

export const TemperatureConverterComponent: React.FC = () => {
    const [fahrenheit, setFahrengeit] = useState<string>('');
    const [celsius, setCelsius] = useState<string>('');

    const celsiusChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setCelsius(value);
        const convertedFahrenheit = (parseFloat(value) * 9 / 5) + 32;
        setFahrengeit(convertedFahrenheit.toFixed(2));
    };
    const fahrenheitChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setFahrengeit(value);
        const convertedCelsius = ((parseFloat(value) - 32) * 5 / 9);
        setCelsius(convertedCelsius.toFixed(2));
    }



    return (
        <GlassWrapperWithAnimation>
            <ConverterWrapper>
                <label htmlFor="cels">Celsius</label>
                <input type="number" id='cels' placeholder='celsius' value={celsius} onChange={celsiusChangeHandler} />
                <label htmlFor="fahr">Fahrenheit</label>
                <input type="number" id='fahr' placeholder='fahrenheit' value={fahrenheit} onChange={fahrenheitChangeHandler} />
            </ConverterWrapper>
        </GlassWrapperWithAnimation>

    )
}