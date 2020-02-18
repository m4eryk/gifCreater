import React, {useCallback} from 'react';
import {IImage} from '../../imageDraw/interface/IImage';
import arrayMove from 'array-move';
import SortableList from '../../../core/components/SortableList/SortableList';
import StyledImageViewContainer from '../styled/StyledImageViewContainer';
import StyledButton from '../../../core/styled/StyledButton';

interface Props {
    imageArray: IImage[];
    deleteImageArray: () => void;
    createGifUrl: () => void;
    undoImage: () => void;
    sortImageArray: (newImageArray: IImage[]) => void;
}

const ImageViewer: React.FC<Props> = ({deleteImageArray, imageArray, createGifUrl, undoImage, sortImageArray}) => {

    const onSortEnd = ({oldIndex, newIndex}: { oldIndex: number, newIndex: number }) => sortImageArray(arrayMove(imageArray, oldIndex, newIndex));

    const handleCreateGif = useCallback((): void => createGifUrl(), [createGifUrl]);

    const handleUndoImage = useCallback((): void => undoImage(), [undoImage]);

    return (
        <StyledImageViewContainer>
            <SortableList
                axis="x"
                lockAxis='x'
                items={imageArray}
                onSortEnd={onSortEnd}
                transitionDuration={500}
            />
            <StyledButton onClick={deleteImageArray}>Clear</StyledButton>
            <StyledButton onClick={handleUndoImage}>Undo</StyledButton>
            <StyledButton onClick={handleCreateGif}>Create gif</StyledButton>
        </StyledImageViewContainer>
    );
};

ImageViewer.defaultProps = {
    imageArray: [],
};

export default ImageViewer;
