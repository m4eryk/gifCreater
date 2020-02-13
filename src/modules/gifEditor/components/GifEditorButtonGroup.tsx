import React, {ChangeEvent, useCallback} from 'react';
import CheckBox from '../../../core/components/CheckBox/CheckBox';
import {IGifSetting} from '../interface/IGifSetting';
import StyledGifEditorButtonGroup from '../../imageDraw/styled/StyledGifEditorButtonGroup';
import StyledButton from '../../../core/styled/StyledButton';
import StyledRange from '../../../core/styled/StyledRange';
import StyledInput from '../../../core/styled/StyledInput';

interface Props {
    gifSetting: IGifSetting;
    setGifSetting: (setting: IGifSetting) => void;
    download: () => void;
}

const GifEditorButtonGroup: React.FC<Props> = ({setGifSetting, gifSetting}) => {

    const changeGifSetting = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setGifSetting({[name]: value});
    }, [setGifSetting]);

    return (
        <StyledGifEditorButtonGroup>
            <StyledRange
                onChange={changeGifSetting}
                placeholder="Frame delay"
                name='delay'
                max={1000}
                defaultValue={gifSetting.delay}
            />
            <StyledInput
                onChange={changeGifSetting}
                placeholder="Quality"
                name='quality'
                defaultValue={gifSetting.quality}
            />
            <CheckBox
                onChange={changeGifSetting}
                name="repeat"
                defaultValue={gifSetting.repeat}
            >
                Repeat
            </CheckBox>
            <StyledButton>Download</StyledButton>
        </StyledGifEditorButtonGroup>
    );
};

export default GifEditorButtonGroup;
