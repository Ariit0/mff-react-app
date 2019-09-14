import React from 'react'

export const SearchBar = ({ placeholder, handleChange }) => {
    return (
        <input 
            className='form-control'
            type='search' 
            placeholder={placeholder} 
            onChange={handleChange}
        />
    );
}