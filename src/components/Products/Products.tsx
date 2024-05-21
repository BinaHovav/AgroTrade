import { IProduct } from 'models';
import Product from './Product';
import FoodMenu from 'components/FoodMenu/FoodMenu';
import Header from 'components/Header/Header';
import * as S from './style';

interface IProps {
  products: IProduct[];
}

const organizeProducts = (products: IProduct[]) => {
  const organized: Record<string, Record<string, IProduct[]>> = {};

  products.forEach((product) => {
    const { category, foodName } = product;

    if (!organized[category]) {
      organized[category] = {};
    }
    if (!organized[category][foodName]) {
      organized[category][foodName] = [];
    }

    organized[category][foodName].push(product);
  });

  return organized;
};

const Products = ({ products }: IProps) => {
  const organizedProducts = organizeProducts(products);

  return (
    <>
      <Header />
      <S.Main>
        <FoodMenu />
        {Object.keys(organizedProducts).map((category) => (
          <div key={category}>
            <S.CategoryHeading>{category}</S.CategoryHeading>
            <S.Container>
              {Object.keys(organizedProducts[category]).map((foodName) => (
                <div key={foodName}>
                  {organizedProducts[category][foodName].map((product) => (
                    <Product product={product} key={product.sku} />
                  ))}
                </div>
              ))}
            </S.Container>
          </div>
        ))}
      </S.Main>
    </>
  );
};

export default Products;
