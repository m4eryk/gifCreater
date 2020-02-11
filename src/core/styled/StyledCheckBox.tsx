import styled from 'styled-components';

const StyledCheckBox = styled.input`
    height: 20px;
    width: 20px ;
    background-color: #FFFFFF;
    font-size: calc(3px + 2vmin);
    cursor: pointer;
`;

StyledCheckBox.defaultProps = {
    type: 'checkbox'
};

export default StyledCheckBox;
