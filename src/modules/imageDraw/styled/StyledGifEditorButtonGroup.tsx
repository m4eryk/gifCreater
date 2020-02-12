import styled from 'styled-components';

const StyledGifEditorButtonGroup = styled.div`
  padding: 5px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 5px;
  
  > *:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export default StyledGifEditorButtonGroup;
