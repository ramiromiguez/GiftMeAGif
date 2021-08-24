import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    return (
            <img src={url} alt={title} className="border-2 rounded-lg flex-auto max-h-64"/>
    )
}
