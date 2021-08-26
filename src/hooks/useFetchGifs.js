import { useState, useEffect } from 'react'
import getGifs from '../helpers/getGifs'

export const useFetchGIfs = (category, limit) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(category, limit)
            .then(imgs => {
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false
                    })
                },3000)
            })
    }, [category, limit])

    return state;
}