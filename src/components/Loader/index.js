import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0% { transform:rotate(0deg); }
  50% { transform:rotate(180deg); }
  100% { transform:rotate(180deg); }
`;

export default styled.div`
  position: relative;
  width: 32px; height: 32px;
  margin-top: 20%;

  top: calc(50% - 6px);
  left: calc(50% - 6px);

  border-radius: 32px;
  background-color: #0074D9;
  transform-origin:  50% 50% ;
  animation: ${load} 1s ease-in-out infinite;


  &:before {
    content: "";
    position: absolute;
    background-color: #0074D9;
    opacity: 0.5;
    top: 0px; left: -50px;
    width: 32px; height: 32px;
    border-radius: 32px;
  }

  &:after{
    content: "";
    position: absolute;
    background-color: #0074D9;
    opacity: 0.5;
    top: 0px; left: 50px;
    width: 32px; height: 32px;
    border-radius: 32px;
  }
`;
