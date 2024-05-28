import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const FoodPage: React.FC = () => {
  const { foodName } = useParams<{ foodName: string }>();

  if (!foodName) {
    return <div>Error: Food name not found</div>;
  }

  const capitalizedFoodName = capitalizeFirstLetter(foodName);

  return (
    <div className="main">
      <div className="main-content">
        <h1>{capitalizedFoodName}</h1>
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default FoodPage;
