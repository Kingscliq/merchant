import { Search } from '@mui/icons-material';
import React, { useState } from 'react';

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="flex items-center bg-white rounded-md w-full pl-4">
      <div>
        <Search color="primary" />
      </div>
      <div>
        <input
          className="bg-transparent focus:bg-transparent border-none w-[500px] h-10 py-2 bg-nav-grey text-gray-500 outline-none rounded-md"
          value={searchValue}
          type="search"
          onChange={onChange}
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
