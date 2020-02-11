import styled from 'styled-components';

const StyledButton = styled.button`
    height: 62px;
    width: 234px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1BA4DD;
    font-size: calc(3px + 2vmin);
    cursor: pointer;
    border: 0;
    border-radius: 6px;
    color: white;
`;

StyledButton.defaultProps = {
    type: 'button'
};

export default StyledButton;
