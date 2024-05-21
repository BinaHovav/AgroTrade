import React from 'react';
import * as S from './style';

import { categories } from 'models';
const FoodMenu: React.FC = () => {
  return (
    <S.FoodContainer>
      <S.FoodList>
        {categories.map((category, categoryName) => (
          <S.FoodItem key={categoryName}>{category.name}</S.FoodItem>
        ))}
      </S.FoodList>
    </S.FoodContainer>
  );
};

export default FoodMenu;

//food group select

// FoodContainer - FoodContainer
// FoodList - FoodList
// FoodItem - FoodItem
