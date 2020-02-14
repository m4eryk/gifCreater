import React, {ChangeEvent} from 'react';
import StyledCheckBox from '../../styled/StyledCheckBox';

interface Props {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    name?: string,
    checked?: boolean
}

const CheckBox: React.FC<Props> = ({children, ...rest}) => {
    return (
        <div>
            <StyledCheckBox {...rest} />
            {children}
        </div>
    );
};

CheckBox.defaultProps = {
    checked: true,
    name: 'checkBox'
};

export default CheckBox;
