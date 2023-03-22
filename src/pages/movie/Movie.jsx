import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import config from '../../config'

const Movie = () => {
    const { id } = useParams()
    const [trailer, setTrailer] = useState(null)
    useEffect(() => {
        const fetchTrailer = async () => {
            const trailerResult = await config.getMovieVideos(id)
            console.log(trailerResult)
            setTrailer(trailerResult)
        }
        fetchTrailer()
    }, [id])

    return (
        <div>
            <h1>Página de detalhes de filmes</h1>
        </div>
    )
}

export default Movie