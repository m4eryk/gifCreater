import React from 'react';
import styled from 'styled-components';

export interface IStyledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

const StyledInput = styled.input<IStyledInputProps>`
  padding-left: 10px;
  height: 42px;
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: center; 
  background-color: white;
  font-size: calc(4px + 2vmin);
  border: 2px solid black;
  border-radius: 6px;
  
  ::-webkit-inner-spin-button{
    margin-right: 10px;
  }
`;

StyledInput.defaultProps = {
    type: 'text'
};

export default StyledInput;
