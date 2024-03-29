import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillStar, AiFillCalendar, AiFillClockCircle } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { Featured, BannerVertical, BannerHorizontal, Title, Info, Vote, ReleaseDate, Runtime, Description, BtnArea, Genres } from './styles'

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
                        {item.title}
                    </Title>
                    <Info>
                        <Vote>
                            <span><AiFillStar /></span> {item.vote_average.toFixed(2)}
                        </Vote>
                        <ReleaseDate>
                            <span><AiFillCalendar /></span> {item.release_date}
                        </ReleaseDate>
                        <Runtime>
                            <span><AiFillClockCircle /></span> {item.runtime} min
                        </Runtime>
                    </Info>
                    <Description>
                        <p>{item.overview.split(" ").slice(0, 30).join(" ")}...</p>
                    </Description>
                    <BtnArea>
                        <Link to={`/Movie/${item.id}`}>
                            <button>
                                <span><BsInfoCircle /></span> Info
                            </button>
                        </Link>
                    </BtnArea>
                    <Genres>
                        <strong>Genres:</strong> {genres.join(', ')}
                    </Genres>
                </BannerHorizontal>
            </BannerVertical>
        </Featured >
    )
}