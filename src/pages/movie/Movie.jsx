import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import config from '../../config'
import { Container, Description, InfoBox, Info, DetailsArea, DescriptionContainer, VideoContainer, Video } from './styles'

const Movie = () => {
    const { id } = useParams()
    const [trailer, setTrailer] = useState(null)
    const [movieDetails, setMovieDetails] = useState(null)

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const details = await config.getMovieInfo(id)
            setMovieDetails(details)

            const genres = details.genres.map(genre => genre.name)
            setGenres(genres)
        }
        fetchMovieDetails()
    }, [id])

    const [genres, setGenres] = useState([])

    // Trailers
    useEffect(() => {
        const fetchTrailer = async () => {
            const trailerResult = await config.getMovieVideos(id)
            const officialTrailer = trailerResult.find(trailer => trailer.type === 'Trailer' && trailer.site === 'YouTube')
            if (officialTrailer) {
                setTrailer(officialTrailer.key)
            }
        }
        fetchTrailer()
    }, [id])



    const onTrailerError = (e) => {
        console.log('Erro ao carregar trailer:', e)
        setTrailer(null)
    }

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
                            <p>{movieDetails.vote_average.toFixed(2)}</p>
                            <p>{movieDetails.runtime} min</p>
                        </Info>
                        <p>
                            <strong>Genres:</strong> {genres.join(', ')}
                        </p>
                    </InfoBox>


                    <DescriptionContainer>
                        <VideoContainer>
                            <Video
                                title='Trailer'
                                width={560}
                                height={315}
                                src={`https://www.youtube.com/embed/${trailer}`}
                                allowFullScreen
                            ></Video>
                        </VideoContainer>
                        <Description>
                            <h2>Sinopse</h2>
                            {movieDetails.overview}
                        </Description>
                    </DescriptionContainer>

                </DetailsArea>
                <Footer/>
            </div>
        </Container>
    )
}

export default Movie
