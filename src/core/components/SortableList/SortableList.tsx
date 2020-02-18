import React from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import {createIdGenerator} from '../../utils/idGenerator';
import {IImage} from '../../../modules/imageDraw/interface/IImage';
import StyledImage from '../../../modules/ImageViewer/styled/StyledImage';
import StyledImageView from '../../../modules/ImageViewer/styled/StyledImageView';

const idGenerator = createIdGenerator();

interface SortableItem {
    item: IImage
}

interface SortableList {
    items: IImage[]
}

const SortableItem = SortableElement(({item}: SortableItem) => <StyledImage src={item.imageURL}/>);

const SortableList = SortableContainer(({items}: SortableList) => {
    return (
        <StyledImageView>
            {items.map((value, index) => (
                <SortableItem key={idGenerator.next().value} index={index} item={value}/>
            ))}
        </StyledImageView>
    );
});

export default SortableList;
