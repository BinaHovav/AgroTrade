import { IProduct } from 'models';

const mockProducts: IProduct[] = [
  {
    currencyFormat: '$',
    currencyId: 'USD',
    seasonType: 'seasonal',
    description: '14/15 s/nº',
    foodGroup: 'fruits',
    category: 'Tropical & Exotic',
    foodName: 'banana',
    id: 0,
    price: 10.9,
    sku: 8552515751438644,
    variety: 'Cropped Stay Groovy off white',
    volume: 1,
    region: 'Russia',
    availability: true,
    sellerInfo: 'Black st.',
    userReviews: [],
    image: 'temp',
  },
  {
    currencyFormat: '$',
    currencyId: 'USD',
    description: '',
    id: 11,
    price: 13.25,
    sku: 39876704341265610,
    seasonType: 'seasonal',
    variety: 'Basic Cactus White T-shirt',
    foodGroup: 'seeds',
    category: 'Tropical & Exotic',
    foodName: 'banana',
    volume: 1,
    region: 'Ukraine',
    availability: true,
    sellerInfo: 'Yellow st.',
    userReviews: [],
    image: 'temp',
  },
  {
    currencyFormat: '$',
    currencyId: 'USD',
    description: '14/15 s/nº - Jogador',
    id: 4,
    price: 25.9,
    sku: 9197907543445676,
    seasonType: 'seasonal',
    variety: 'Skater Black Sweatshirt',
    foodGroup: 'vegetables',
    category: 'Tropical & Exotic',
    foodName: 'banana',
    volume: 1,
    region: 'Ireland',
    availability: true,
    sellerInfo: 'White st.',
    userReviews: [],
    image: 'temp',
  },
];

export default mockProducts;
