export interface IProduct {
  id: number;
  sku: number;
  seasonType: string;
  foodGroup: string;
  category: string;
  foodName: string;
  variety: string;
  description: string;
  price: number;
  volume: number;
  region: string;
  availability: boolean;
  seller: string;
  userReviews: [];
  currencyId: string;
  currencyFormat: string;
  image: string;
}

export interface Category {
  name: string;
  subCategories: string[];
}

export const foodGroups: Category[] = [
  {
    name: 'Fruits',
    subCategories: [
      'Tropical & Exotic',
      'Citrus',
      'Berries' /* Add more sub-categories as needed */,
    ],
  },
  {
    name: 'Vegetables',
    subCategories: [
      'Leafy Greens',
      'Root Vegetables',
      'Cruciferous' /* Add more sub-categories as needed */,
    ],
  },
  {
    name: 'Seeds',
    subCategories: [
      'Grains',
      'Legumes',
      'Nuts' /* Add more sub-categories as needed */,
    ],
  },
  {
    name: 'Spices & Herbs',
    subCategories: [],
  },
  {
    name: 'OilSeeds',
    subCategories: [],
  },
  {
    name: 'Cereals & Grains',
    subCategories: [],
  },
];

// export enum foodName {}
export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface ICartTotal {
  productQuantity: number;
  totalPrice: number;
  currencyId: string;
  currencyFormat: string;
}

export interface IGetProductsResponse {
  data: {
    products: IProduct[];
  };
}
