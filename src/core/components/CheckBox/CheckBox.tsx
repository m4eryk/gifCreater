import React, {ChangeEvent} from 'react';
import StyledCheckBox from '../../styled/StyledCheckBox';

interface Props {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    name?: string,
}

const CheckBox: React.FC<Props> = ({children, ...rest}) => {
    return (
        <div>
            <StyledCheckBox {...rest} />
            {children}
        </div>
    );
};

export default CheckBox;
