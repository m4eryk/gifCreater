import React from 'react';
import {IGifSetting} from '../interface/IGifSetting';
import GifEditorButtonGroup from './GifEditorButtonGroup';
import StyledGifEditorWrapper from '../styled/StyledGifEditorWrapper';
import StyledGif from '../styled/StyledGif';

interface Props {
    gif?: string;
    gifSetting: IGifSetting;
    setGifSetting: (setting: IGifSetting) => void;
}

const GifEditor: React.FC<Props> = ({gif, setGifSetting, gifSetting}) => {
    return (
        <StyledGifEditorWrapper>
            <StyledGif src={gif}/>
            <GifEditorButtonGroup setGifSetting={setGifSetting} gifSetting={gifSetting}/>
        </StyledGifEditorWrapper>
    );
};

export default GifEditor;
