import styled from 'styled-components/macro';

export const Main = styled.div`
  display: flex;
`;

export const Sidebar = styled.aside`
  width: 250px;
  padding: 20px;
  background-color: #fff8e7; 
  position: fixed;
  left: 0;
  top: 100px; 
  bottom: 0;
  overflow-y: auto; 
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  margin-left: 270px; 
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px;
  margin-top: 20px; 
`;

export const CategoryHeading = styled.h2`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 2em; 
`;

export const CheckboxContainer = styled.div`
  margin-bottom: 10px; 
`;

export const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #fff8e7; 
  color: black; 
  border: none;
  border-radius: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #45a049; 
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2); 
  }

  &:active {
    background-color: #3e8e41; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  }
`;
