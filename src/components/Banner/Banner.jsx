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
                           2022
                        </div>
                        <div>
                            {item.overview}
                        </div>

                    </Info>
                </BannerHorizontal>
            </BannerVertical>
        </Featured>
    )
}