import React, { useState, ChangeEvent } from 'react';
import * as S from './style';

import { foodGroups } from 'models';

interface HeaderProps {
  onChange: (category: string) => void;
}

const FoodMenu: React.FC<HeaderProps> = ({ onChange }) => {
  const handleFoodGroupSelect = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const foodGroup = event.currentTarget.textContent;
    if (foodGroup) {
      onChange(foodGroup);
    }
  };
  return (
    <S.FoodContainer>
      <S.FoodList>
        {foodGroups.map((category, categoryName) => (
          <S.FoodItem key={categoryName} onClick={handleFoodGroupSelect}>
            {category.name}
          </S.FoodItem>
        ))}
      </S.FoodList>
    </S.FoodContainer>
  );
};

export default FoodMenu;
