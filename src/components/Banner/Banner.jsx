import React from 'react'
import { AiFillStar, AiOutlineInfoCircle } from "react-icons/ai";
import { Featured, BannerVertical, BannerHorizontal, Title, Info } from './styles'
import {Link} from 'react-router-dom'
export default ({ item }) => {
    let genres = []

    for (let g in item.genres) {
        genres.push(item.genres[g].name)
        console.log(item.genres[g].name)
    }

    return (
        <Featured style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` }}>
            <BannerVertical>
                <BannerHorizontal>
                    <Title>
                        {item.original_title}
                    </Title>
                    <Info>
                        <div>
                            <span><AiFillStar /></span> {item.vote_average}
                        </div>
                        <div>
                            {item.release_date}
                        </div>
                        <div>{item.runtime} min</div>
                    </Info>
                    <div>
                        {item.overview}
                    </div>
                    <div>
                        <Link>
                            <button><AiOutlineInfoCircle/> Info</button>
                        </Link>
                    </div>
                    <div>
                        <strong>Genres:</strong> {genres.join(', ')}
                    </div>
                </BannerHorizontal>
            </BannerVertical>
        </Featured>
    )
}