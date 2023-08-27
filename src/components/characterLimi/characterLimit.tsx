import React, { useState } from "react";
import { RegistrationWrapper } from "../styled/RegistrationWrapper";
import { GlassWrapperWithAnimation } from "../styled/GlassStyled";

export const CharaclterLimit: React.FC = () => {
    const [value, setValue] = useState<string>('')
    const maxLength = 10;

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }



    return (
        <GlassWrapperWithAnimation>
            <RegistrationWrapper>
                <div>Remaining symbols: {maxLength - value.length}</div>
                <input
                    id="limitedInput"
                    type="text"
                    value={value}
                    maxLength={maxLength}
                    onChange={onChange}
                />
            </RegistrationWrapper>
        </GlassWrapperWithAnimation>
    )
}