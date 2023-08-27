import React, { useState } from 'react';
import { ColorPickerWrapper, SunWrapper, Moon } from '../styled/ColorPickerWrapper';

export const ColorPickerComponent: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState<string>("#e2f60c");

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = event.target.value;
        setSelectedColor(newColor);
    };

    return (
        <>
            <ColorPickerWrapper>
                <label>
                    Change Color

                    <input
                        name='colorChanger'
                        type='color'
                        color={selectedColor}
                        onChange={handleColorChange}
                    />
                </label>
            </ColorPickerWrapper>
            <SunWrapper color={selectedColor}>
                <Moon />
            </SunWrapper>
        </>
    )
}