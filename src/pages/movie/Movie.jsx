import {useParams} from 'react-router-dom'

const Movie = () => {  
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <h1>Página de detalhes de filmes</h1>
        </div>
    )
}

export default Movie