import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import config from '../../config'
import { Container, Description, InfoBox, Info, DetailsArea } from './styles'

const Movie = () => {
    const { id } = useParams()
    const [trailer, setTrailer] = useState(null)
    const [movieDetails, setMovieDetails] = useState(null)

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const details = await config.getMovieInfo(id)
            console.log(details)
            setMovieDetails(details)

            const genres = details.genres.map(genre => genre.name)
            setGenres(genres)
        }
        fetchMovieDetails()
    }, [id])

    const [genres, setGenres] = useState([])

    useEffect(() => {
        const fetchTrailer = async () => {
            const trailerResult = await config.getMovieVideos(id)
            setTrailer(trailerResult)
        }
        fetchTrailer()
    }, [id])

    if (!movieDetails || !trailer) {
        return (
            <Loading />
        )
    }

    return (
        <Container background={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}>
            <div>
                <h1>{movieDetails.title}</h1>
                <DetailsArea>
                    <InfoBox>
                        <img src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`} />
                       <Info>
                           <p>{movieDetails.vote_average}</p>
                           <p>{movieDetails.runtime} min</p>
                        </Info> 
                            <p><strong>Genres:</strong> {genres.join(', ')}</p>
                    </InfoBox>

                    <Description>
                        {movieDetails.overview}
                    </Description>
                </DetailsArea>
            </div>
        </Container>
    )
}

export default Movie
