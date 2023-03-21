import React from 'react'
import { AiFillStar, AiOutlineInfoCircle, AiFillCalendar, AiFillClockCircle } from "react-icons/ai";
import { Featured, BannerVertical, BannerHorizontal, Title, Info, Vote, ReleaseDate, Runtime, Description } from './styles'
import {Link} from 'react-router-dom'

export default ({ item }) => {
    let genres = []
    for (let g in item.genres) {
        genres.push(item.genres[g].name)
    }

    return (
        <Featured style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` }}>
            <BannerVertical>
                <BannerHorizontal>
                    <Title>
                        {item.original_title}
                    </Title>
                    <Info>
                        <Vote>
                            <span><AiFillStar /></span> {item.vote_average}
                        </Vote>
                        <ReleaseDate>
                            <span><AiFillCalendar/></span> {item.release_date}
                        </ReleaseDate>
                        <Runtime>
                            <span><AiFillClockCircle/></span> {item.runtime} min
                        </Runtime>
                    </Info>
                    <Description>
                        {item.overview}
                    </Description>
                    <div>
                        <Link to={`/Movie/${item.id}`}> 
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