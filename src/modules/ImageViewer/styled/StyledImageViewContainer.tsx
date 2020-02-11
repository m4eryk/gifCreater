import styled from 'styled-components';

const StyledImageViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    
    > *:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export default StyledImageViewContainer;
