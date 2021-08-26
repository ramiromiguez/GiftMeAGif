import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

export const AddCategory = ({ setCategories, setLimit }) => {
    
    const [handlingData, setHandlingData] = useState({})
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (e) => {
        setCategories(categories => [e.category, ...categories]);
        setLimit(limit => [e.quantity, ...limit])
    }
    

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row justify-center">
            <input
                {...register("category")}
                placeholder=" search gifs"
                className="w-80 h-10 rounded-lg border-2 border-black mt-2 mb-3" />
            <select {...register("quantity")}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <input type="submit"/>
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
