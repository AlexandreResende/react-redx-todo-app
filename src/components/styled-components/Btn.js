
import styled from 'styled-components';

const Btn = styled.button`
  font-family: 'Arial';
  font-style: bold;
  font-size: 12px;
  border-radius: 10px;
  color: ${props => props.buttonTextColor};
  background-color: ${props => props.buttonBackgroundColor};
  border: 1px solid ${props => props.buttonBorder};
  width: 12em;
  height: 3em;
`;

export default Btn;
