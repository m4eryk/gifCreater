import React, {useCallback} from 'react';
import {IGifSetting} from '../interface/IGifSetting';
import GifEditorButtonGroup from './GifEditorButtonGroup';
import {download} from '../../../core/utils/download';
import StyledGifEditorWrapper from '../styled/StyledGifEditorWrapper';
import StyledGif from '../styled/StyledGif';

interface Props {
    gif: string;
    gifSetting: IGifSetting;
    setGifSetting: (setting: IGifSetting) => void;
}

const GifEditor: React.FC<Props> = ({gif, setGifSetting, gifSetting}) => {

    const downloadGif = useCallback(() => download(gif), [gif]);

    return (
        <StyledGifEditorWrapper>
            <StyledGif src={gif}/>
            <GifEditorButtonGroup
                setGifSetting={setGifSetting}
                gifSetting={gifSetting}
                download={downloadGif}
            />
        </StyledGifEditorWrapper>
    );
};

export default GifEditor;
