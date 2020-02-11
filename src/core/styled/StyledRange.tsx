import styled from 'styled-components';

const StyledRange = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%; 
  height: 5px;
  background: black;
  outline: none;  
  
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%; 
    background: #1BA4DD; 
    cursor: pointer;
  }
  
`;

StyledRange.defaultProps = {
    type: 'range'
};

export default StyledRange;
