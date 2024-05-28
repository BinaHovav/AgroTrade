import React from 'react';
import Sidebar from 'components/SideBar/SideBar';
import { IProduct } from 'models';

interface IFilterAndSortProps {
  uniqueRegions: string[];
  selectedRegions: string[];
  handleRegionChange: (region: string) => void;
  handleSortByChange: (sortBy: 'price' | 'volume') => void;
  handleSortOrderChange: (order: 'asc' | 'desc') => void;
}

const FilterAndSort = ({
  uniqueRegions,
  selectedRegions,
  handleRegionChange,
  handleSortByChange,
  handleSortOrderChange,
}: IFilterAndSortProps) => {
  return (
    <Sidebar
      uniqueRegions={uniqueRegions}
      selectedRegions={selectedRegions}
      handleRegionChange={handleRegionChange}
      handleSortByChange={handleSortByChange}
      handleSortOrderChange={handleSortOrderChange}
    />
  );
};

export default FilterAndSort;
