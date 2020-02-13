import React from 'react';
import {IGifSetting} from '../interface/IGifSetting';
import GifEditorButtonGroup from './GifEditorButtonGroup';
import StyledGifEditorWrapper from '../styled/StyledGifEditorWrapper';
import StyledGif from '../styled/StyledGif';

interface Props {
    gif?: string;
    gifSetting: IGifSetting;
    setGifSetting: (setting: IGifSetting) => void;
    download: () => void;
}

const GifEditor: React.FC<Props> = ({gif, setGifSetting, gifSetting, download}) => {
    return (
        <StyledGifEditorWrapper>
            <StyledGif src={gif}/>
            <GifEditorButtonGroup
                setGifSetting={setGifSetting}
                gifSetting={gifSetting}
                download={download}
            />
        </StyledGifEditorWrapper>
    );
};

export default GifEditor;
