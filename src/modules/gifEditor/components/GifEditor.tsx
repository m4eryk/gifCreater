import React from 'react';
import {IGifSetting} from '../interface/IGifSetting';
import GifEditorButtonGroup from './GifEditorButtonGroup';
import StyledGifEditorContainer from '../styled/StyledGifEditorContainer';
import StyledGif from '../styled/StyledGif';

interface Props {
    gif?: string,
    setGifSetting: (setting: IGifSetting) => void;
}

const GifEditor: React.FC<Props> = ({gif, setGifSetting}) => {
    return (
        <StyledGifEditorContainer>
            <StyledGif src={gif}/>
            <GifEditorButtonGroup setGifSetting={setGifSetting}/>
        </StyledGifEditorContainer>
    );
};

export default GifEditor;
