import { useState, useEffect } from 'react'
import { Container, Cards, Card } from '../styles'
import { imageUrl, TopRatedUrl } from '../../config'

const Home = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(TopRatedUrl)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [])

    return (
        <Container>
            <section>
                <h1>Top Rated</h1>
                <Cards>
                    {movies.map(movie => (
                        <Card key={movie.id}>
                            <a href="#">
                                <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
                            </a>
                            <span>{movie.title}</span>
                        </Card>
                    ))}
                </Cards>

            </section>
        </Container>
    )
}

export default Home