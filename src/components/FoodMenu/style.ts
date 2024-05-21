import styled from 'styled-components/macro';

interface IFoodItemProps {
  active?: boolean;
}

export const FoodContainer = styled.nav`
  display: block;
  margin: auto;
`;

export const FoodList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
`;

export const FoodItem = styled.li<IFoodItemProps>`
  font-size: 30px;
  color: ${({ active }) => (active ? '#00a358' : '#999a99')};
  cursor: pointer;
  font-weight: bold;
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};

  &:hover {
    color: #00a358;
  }
`;
