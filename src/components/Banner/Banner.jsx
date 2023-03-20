import React from 'react'

import { Featured } from './styles'

export default ({ item }) => {
    return (
        <Featured style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
            <div>
                {item.original_title}
            </div>
        </Featured>
    )
}