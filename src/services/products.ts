import { IGetProductsResponse } from 'models';

const loadLocalProducts = async (): Promise<IGetProductsResponse> => {
  return require('static/json/products.json');
};

export const getProducts = async () => {
  let response: IGetProductsResponse;

  try {
    response = await loadLocalProducts();
  } catch (error) {
    console.error('Error loading local products:', error);
    throw error;
  }

  const { products } = response.data || [];
  return products;
};
