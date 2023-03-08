import ApiKey from '../config.js'

const Home = () => {
    const key = { ApiKey }
    console.log(key)
    return (
        <div>
            <h1>Catálogo de Filmes</h1>
        </div>
    )
}

export default Home