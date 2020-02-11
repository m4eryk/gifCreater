import styled from 'styled-components';

const StyledGifEditorButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  > *:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export default StyledGifEditorButtonGroup;
