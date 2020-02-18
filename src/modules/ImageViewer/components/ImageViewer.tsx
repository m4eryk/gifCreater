import React, {useCallback} from 'react';
import {createIdGenerator} from '../../../core/utils/idGenerator';
import {IImage} from '../../imageDraw/interface/IImage';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import StyledImageViewContainer from '../styled/StyledImageViewContainer';
import StyledButton from '../../../core/styled/StyledButton';
import arrayMove from 'array-move';
import StyledImageView from '../styled/StyledImageView';
import StyledImage from '../styled/StyledImage';

interface Props {
    imageArray: IImage[];
    deleteImageArray: () => void;
    createGifUrl: () => void;
    undoImage: () => void;
    sortImageArray: (newImageArray: IImage[]) => void;
}

const idGenerator = createIdGenerator();

const SortableItem = SortableElement(({item}: { item: IImage }) =>
    <StyledImage src={item.imageURL}/>
);

const SortableList = SortableContainer(({items}: { items: IImage[] }) => {
    return (
        <StyledImageView>
            {items.map((value, index) => (
                <SortableItem key={idGenerator.next().value} index={index} item={value}/>
            ))}
        </StyledImageView>
    );
});

const ImageViewer: React.FC<Props> = ({deleteImageArray, imageArray, createGifUrl, undoImage, sortImageArray}) => {

    const onSortEnd = ({oldIndex, newIndex}: { oldIndex: number, newIndex: number }) => sortImageArray(arrayMove(imageArray, oldIndex, newIndex));

    const handleCreateGif = useCallback((): void => createGifUrl(), [createGifUrl]);

    const handleUndoImage = useCallback((): void => undoImage(), [undoImage]);

    return (
        <StyledImageViewContainer>
            <SortableList
                axis="x"
                lockAxis="x"
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
