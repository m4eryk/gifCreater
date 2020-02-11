import React, {ChangeEvent, useCallback} from 'react';
import CheckBox from '../../../core/components/CheckBox/CheckBox';
import {IGifSetting} from '../interface/IGifSetting';
import StyledGifEditorButtonGroup from '../../imageDraw/styled/StyledGifEditorButtonGroup';
import StyledButton from '../../../core/styled/StyledButton';
import StyledRange from '../../../core/styled/StyledRange';
import StyledInput from '../../../core/styled/StyledInput';

interface Props {
    setGifSetting: (setting: IGifSetting) => void;
}

const GifEditorButtonGroup: React.FC<Props> = ({setGifSetting}) => {

    const changeGifSetting = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setGifSetting({[name]: value});
    }, [setGifSetting]);

    return (
        <StyledGifEditorButtonGroup>
            <StyledRange onChange={changeGifSetting} placeholder="Frame delay" name='delay' max={1000}/>
            <StyledInput onChange={changeGifSetting} placeholder="Quality" name='quality'/>
            <CheckBox onChange={changeGifSetting} name="repeat">Repeat</CheckBox>
            <StyledButton>Download</StyledButton>
        </StyledGifEditorButtonGroup>
    );
};

export default GifEditorButtonGroup;
