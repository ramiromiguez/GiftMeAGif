import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories, setLimit }) => {
    const [inputValue, setInputValue] = useState('');
    const [Quantity, setQuantity] = useState();

    const handleOnChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories(categories => [inputValue, ...categories]);
        setLimit()
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-row justify-center">
            <input
                type="text"
                value={inputValue}
                onChange={handleOnChange}
                placeholder=" search gifs"
                className="w-80 h-10 rounded-lg border-2 border-black mt-2 mb-3" />
            <select name="quantity" id="quantity">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
