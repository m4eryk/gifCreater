import styled from 'styled-components';

const StyledImageView = styled.div`
  display: flex;
  height: 250px;
  align-items: center;
  border: 2px solid #1BA4DD;
  border-radius: 10px;
  overflow-x: scroll;
  padding: 0 15px;

  ::-webkit-scrollbar {
    width: 20px;
  }
    
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px #198dbe; 
    border-radius: 10px;
  } 
     
  ::-webkit-scrollbar-thumb {
    background: #1BA4DD; 
    border-radius: 10px;
  }
    
  ::-webkit-scrollbar-thumb:hover {
    background: #198dbe;
  }
`;

export default StyledImageView;
