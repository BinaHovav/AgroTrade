import React from 'react';
import Sidebar from 'components/SideBar/SideBar';

interface IFilterAndSortProps {
  uniqueRegions: string[];
  selectedRegions: string[];
  handleRegionChange: (region: string) => void;
  handleSortByChange: (sortBy: 'price' | 'volume') => void;
  handleSortOrderChange: (order: 'asc' | 'desc') => void;
  uniqueSellers: string[]; 
  selectedSellers: string[]; 
  handleSellerChange: (seller: string) => void; 
}


const FilterAndSort = ({
  uniqueRegions,
  selectedRegions,
  handleRegionChange,
  handleSortByChange,
  handleSortOrderChange,
  uniqueSellers, 
  selectedSellers,
  handleSellerChange,
}: IFilterAndSortProps) => {
  return (
    <Sidebar
      uniqueRegions={uniqueRegions}
      selectedRegions={selectedRegions}
      handleRegionChange={handleRegionChange}
      handleSortByChange={handleSortByChange}
      handleSortOrderChange={handleSortOrderChange}
      uniqueSellers={uniqueSellers} 
      selectedSellers={selectedSellers} 
      handleSellerChange={handleSellerChange} 
    />
  );
};

export default FilterAndSort;
