// src/hooks/useProductFilters.ts
import { useState, useEffect, useCallback } from 'react';
import { IProduct } from 'models';
import { useProducts } from 'contexts/products-context';

const organizeProducts = (products: IProduct[]) => {
  const organized: Record<
    string,
    Record<string, Record<string, IProduct[]>>
  > = {};
  products.forEach((product) => {
    const { category, foodName, foodGroup } = product;
    if (!organized[foodGroup]) {
      organized[foodGroup] = {};
    }
    if (!organized[foodGroup][category]) {
      organized[foodGroup][category] = {};
    }
    if (!organized[foodGroup][category][foodName]) {
      organized[foodGroup][category][foodName] = [];
    }
    organized[foodGroup][category][foodName].push(product);
  });
  return organized;
};

const getUniqueRegions = (products: IProduct[]): string[] => {
  const regions = new Set(products.map((product) => product.region));
  return Array.from(regions);
};

const sortProducts = (
  products: IProduct[],
  sortBy: 'price' | 'volume',
  order: 'asc' | 'desc'
) => {
  return [...products].sort((a, b) =>
    order === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
  );
};

const useProductFilters = () => {
  const { products, fetchProducts } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [foodGroupToDisplay, setFoodGroupToDisplay] =
    useState<string>('Fruits');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortBy, setSortBy] = useState<'price' | 'volume'>('price');
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const filtered = searchTerm
      ? products.filter((product) =>
          product.foodName.toLowerCase().startsWith(searchTerm.toLowerCase())
        )
      : products;
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const handleChangedFoodGroup = useCallback((foodGroup: string) => {
    setFoodGroupToDisplay(foodGroup);
  }, []);

  const handleSortOrderChange = useCallback((order: 'asc' | 'desc') => {
    setSortOrder(order);
  }, []);

  const handleSortByChange = useCallback((sortBy: 'price' | 'volume') => {
    setSortBy(sortBy);
  }, []);

  const handleRegionChange = useCallback((region: string) => {
    setSelectedRegions((prevSelectedRegions) =>
      prevSelectedRegions.includes(region)
        ? prevSelectedRegions.filter((r) => r !== region)
        : [...prevSelectedRegions, region]
    );
  }, []);

  const productsToDisplay = filteredProducts.filter(
    (product) =>
      selectedRegions.length === 0 || selectedRegions.includes(product.region)
  );

  const sortedProductsToDisplay = sortProducts(
    productsToDisplay,
    sortBy,
    sortOrder
  );
  const organizedProductsToDisplay = organizeProducts(sortedProductsToDisplay);
  const uniqueRegions = getUniqueRegions(products);

  return {
    products: sortedProductsToDisplay,
    organizedProducts: organizedProductsToDisplay,
    foodGroupToDisplay,
    uniqueRegions,
    selectedRegions,
    handleSearch,
    handleChangedFoodGroup,
    handleSortOrderChange,
    handleSortByChange,
    handleRegionChange,
  };
};

export default useProductFilters;
