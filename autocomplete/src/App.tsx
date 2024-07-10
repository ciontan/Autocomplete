import React, { useState, useRef, useEffect } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CountrySelector from './components/countries';
import Countries from './countriesdata.json';

export default function App() {
  const [value, setValue] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(Countries);
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setValue(event.target.value);

    const filtered = Countries.filter(country =>
      country.country.toLowerCase().includes(searchTerm)
    );
    setFilteredCountries(filtered);
    setShowDropdown(filtered.length > 0);
  };

  const handleClickOut = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  const handleOptionChange = (selectedOption: { label: string; value: string } | undefined) => {
    if (selectedOption) {
      setValue(selectedOption.label);
      setShowDropdown(false);
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOut);
    return () => {
      document.removeEventListener('mousedown', handleClickOut);
    };
  }, []);

  return (
    <div className="bg-gray-100 flex items-center justify-center w-screen h-screen p-6">
      <div className="flex bg-white rounded-md max-w-md p-6 shadow-md" ref={containerRef}>
        <div className="flex flex-col items-center justify-center">
          Search
          <fieldset>
            <div className="p-2 relative w-full">
              <div className="relative w-full rounded-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <SearchOutlinedIcon fontSize="small" />
                </div>
                <input
                  className="block w-full text-sm shadow-md rounded-lg p-3 pl-10 form-input border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-200"
                  type="search"
                  value={value}
                  onChange={handleSearchChange}
                  onFocus={() => setShowDropdown(filteredCountries.length > 0)}
                  ref={inputRef}
                  placeholder="Search for a country here"
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown' && showDropdown) {
                      e.preventDefault();
                      if (dropdownRef.current) {
                        dropdownRef.current.focus();
                      }
                    }
                  }}
                />
                {showDropdown && (
                  <CountrySelector
                    options={filteredCountries}
                    onChange={handleOptionChange}
                    focusInput={focusInput}
                    ref={dropdownRef}
                  />
                )}
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
