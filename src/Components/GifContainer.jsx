import React from 'react'
import { GifGrid } from './GifGrid'


export const GifContainer = ({category, limit}) => {
    return (
        <div className="ml-2 mr-2 pb-4">
        {category.map((category) => (
          <GifGrid 
            key={category} 
            category={category} />
        ))}
        </div>
    )
}
