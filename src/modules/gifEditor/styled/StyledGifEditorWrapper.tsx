import styled from 'styled-components';

const StyledGifEditorWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    
    > *:not(:last-child) {
        margin-right: 12px;
    }
`;

export default StyledGifEditorWrapper;
