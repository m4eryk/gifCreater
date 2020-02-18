import styled from 'styled-components';

const StyledImage = styled.img`
  width: 200px;
  height: 100px;
  border: 1px solid black;
  
  :hover {
    cursor: move;
  }
  
  :not(:last-child) {
    margin-right: 10px;
  }
  
  :first-child {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  
  :last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export default StyledImage;
