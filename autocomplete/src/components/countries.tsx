import '../App.css';
import Countries from '../countriesdata.json';
import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  options: typeof Countries;
  value?: SelectOption;
  onChange?: (value: SelectOption | undefined) => void;
  focusInput: () => void;
};

const CountrySelector = forwardRef<HTMLDivElement, SelectProps>(
  ({ options, onChange, focusInput }, ref) => {
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => containerRef.current!);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        setFocusedIndex((prev) => (prev === null ? 0 : Math.min((prev ?? 0) + 1, options.length - 1)));
      } else if (e.key === 'ArrowUp') {
        if (focusedIndex === 0) {
          focusInput();
        } else {
          setFocusedIndex((prev) => (prev === null ? 0 : Math.max((prev ?? 0) - 1, 0)));
        }
      } else if (e.key === 'Enter' && focusedIndex !== null) {
        const selectedCountry = options[focusedIndex];
        if (onChange) onChange({ label: selectedCountry.country, value: selectedCountry.country });
      }
    };

    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
        }
      };

      document.addEventListener('keydown', handleKeyPress);
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }, []);

    return (
      <div
        className="dropdown-content"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        ref={containerRef}
        onMouseDown={(e) => e.preventDefault()}
      >
        {options.map((country, index) => (
          <div
            key={country.country}
            className={`dropdown-item cursor-pointer odd:bg-gray-50 text-gray-600 bg-white ${
              focusedIndex === index ? 'bg-blue-200 odd:bg-blue-200' : ''
            }`}
            tabIndex={-1}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onChange && onChange({ label: country.country, value: country.country })}
          >
            <img className="w-1/6" src={country.flag} alt={country.country} />
            <span className="overflow-hidden">{country.country}</span>
          </div>
        ))}
      </div>
    );
  }
);

export default CountrySelector;
