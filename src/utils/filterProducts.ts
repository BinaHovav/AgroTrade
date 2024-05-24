import { IProduct } from 'models';

export const filterProductsByFoodName = (
  products: IProduct[],
  foodName: string
): IProduct[] => {
  return products.filter((product) => product.foodName.includes(foodName));
};
