import React, { useState, useMemo, useEffect } from 'react';
import countriesData from '../../countrydata.json';
import '../App.css';

// type Country = {
//   code: string;
//   name: string;
// };
// const countries: Country[] = countriesData as Country[];

// function CountrySelector() {
//   const [search, setSearch] = useState('');

//   const filteredCountries = useMemo(() => {
//     return countries.filter(country =>
//       country.name.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [search, countries]);

//   return (
//     <div className='dropdown'>
//       {filteredCountries.map((item) => (
//         <div key={item.code} className='dropdown_row'>{item.name}</div>
//       ))}
//     </div>
//   );
// }

// export default CountrySelector;

const CountrySelector =()=>{
  const [countries, setCountries] = useState()
  useEffect(()=>{
    fetch("https://restcountries.com/v2/all?fields=name,currencies")
      .then((res)=> res.json())
      .then((data)=>{
          setCountries(data)
      })
},[])

  return(
    <div className='absolute text-left items-start justify-start mt-2 w-full overflow-hidden rounded-md bg-white'>
      <div className='cursor-pointer py-2 px-3 bg-white'>
        <ul className='text-xs mt-2 overflow-y-auto max-h-60'>
          {countries?.map((country) => (
            <li 
              key={country?.name} 
              className='p-2 text-sm text-gray-600 hover:bg-blue-600 hover:text-white'
            >
               <div>{country.name}</div>
              {country.currencies && country.currencies.length > 0 && (
                <ul className='ml-4'>
                  {country.currencies.map((currency) => (
                    <li 
                      key={`${country.name}-${currency.code}`} 
                      className='p-2 text-sm text-gray-600 hover:bg-blue-600 hover:text-white'>
                      {currency.name} ({currency.code})
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        </div>
    </div>
)}

export default CountrySelector;