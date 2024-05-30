import React from 'react';
import { foodGroups } from 'models';
import './styles.scss';

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
    <nav className="food-container">
      <ul className="food-list">
        {foodGroups.map((category, index) => (
          <li key={index} className="food-item" onClick={handleFoodGroupSelect}>
            {category.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FoodMenu;
