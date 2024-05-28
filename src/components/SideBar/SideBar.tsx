import React from 'react';
import './styles.scss';

interface SidebarProps {
  uniqueRegions: string[];
  selectedRegions: string[];
  handleRegionChange: (region: string) => void;
  handleSortByChange: (sortBy: 'price' | 'volume') => void;
  handleSortOrderChange: (order: 'asc' | 'desc') => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  uniqueRegions,
  selectedRegions,
  handleRegionChange,
  handleSortByChange,
  handleSortOrderChange,
}) => {
  return (
    <aside className="sidebar">
      {uniqueRegions.map((region) => (
        <div className="checkboxContainer" key={region}>
          <label>
            <input
              className="checkboxInput"
              type="checkbox"
              value={region}
              checked={selectedRegions.includes(region)}
              onChange={() => handleRegionChange(region)}
            />
            {region}
          </label>
        </div>
      ))}
      <div className="buttonContainer">
        <button
          className="styledButton"
          onClick={() => {
            handleSortByChange('price');
            handleSortOrderChange('asc');
          }}
        >
          Sort by Price: Low to High
        </button>
        <button
          className="styledButton"
          onClick={() => {
            handleSortByChange('price');
            handleSortOrderChange('desc');
          }}
        >
          Sort by Price: High to Low
        </button>
        <button
          className="styledButton"
          onClick={() => {
            handleSortByChange('volume');
            handleSortOrderChange('asc');
          }}
        >
          Sort by Volume: Low to High
        </button>
        <button
          className="styledButton"
          onClick={() => {
            handleSortByChange('volume');
            handleSortOrderChange('desc');
          }}
        >
          Sort by Volume: High to Low
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
