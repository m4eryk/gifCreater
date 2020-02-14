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

const GifEditorButtonGroup: React.FC<Props> = ({setGifSetting, gifSetting, download}) => {

    const changeInputGifSetting = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {name, value,} = e.target;
        setGifSetting({[name]: value});
    }, [setGifSetting]);

    const changeCheckBoxGifSetting = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = e.target;
        setGifSetting({[name]: checked});
    }, [setGifSetting]);

    return (
        <StyledGifEditorButtonGroup>
            <StyledRange
                onChange={changeInputGifSetting}
                placeholder="Frame delay"
                name='delay'
                max={1000}
                value={gifSetting.delay}
            />
            <StyledInput
                onChange={changeInputGifSetting}
                type="number"
                placeholder="Quality"
                name='quality'
                value={gifSetting.quality}
            />
            <CheckBox
                onChange={changeCheckBoxGifSetting}
                name="repeat"
                checked={gifSetting.repeat || false}
            >
                Repeat
            </CheckBox>
            <StyledButton onClick={download}>Download</StyledButton>
        </StyledGifEditorButtonGroup>
    );
};

export default GifEditorButtonGroup;
