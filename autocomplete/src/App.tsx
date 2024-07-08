import React, { useState, } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CountrySelector from './components/countries'

export default function () {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div className="bg-gray-100 flex items-center justify-center w-screen h-screen p-6">
            <div className="flex bg-white rounded-md max-w-md p-6 shadow-md">
                <div className='flex flex-col items-center justify-center'>
                Search
                    <fieldset>
                        <div className='p-2 relative w-full'>
                            <div className='relative w-full rounded-md'>
                                <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                    <SearchOutlinedIcon fontSize="small"></SearchOutlinedIcon>
                                </div>
                                <input 
                                className='block w-full text-sm shadow-md rounded-lg p-3 pl-10 form-input border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-blue-200' 
                                type='search' 
                                value={value} 
                                onChange={onChange}
                                placeholder='Search for a country here'
                                />
                                <CountrySelector></CountrySelector>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
);
}

