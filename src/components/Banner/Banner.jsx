import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { Featured, BannerVertical, BannerHorizontal, Title, Info } from './styles'

export default ({ item }) => {
    return (
        <Featured style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` }}>
            <BannerVertical>
                <BannerHorizontal>
                    <Title>
                        {item.original_title}
                    </Title>
                    <Info>
                        <div>
                            <span>
                                <AiFillStar />
                            </span>
                            {item.vote_average}
                        </div>
                        <div>
                            {item.release_date}
                        </div>
                        <div>{item.runtime} min</div>
                    </Info>
                    <div>
                        {item.overview}
                    </div>
                </BannerHorizontal>
            </BannerVertical>
        </Featured>
    )
}