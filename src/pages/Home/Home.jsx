import ApiKey from '../../config'
import { Container } from '../styles'

const Home = () => {
    const key = { ApiKey }
    // console.log(key)
    return (
        <Container>
            <h1>Top Rated</h1>
            <section>
                <ul>
                    <li>
                        <img src="https://img.elo7.com.br/product/original/264FCC6/big-poster-filme-batman-o-cavaleiro-das-trevas-lo02-90x60-cm-batman.jpg" alt="Batman Cavaleiro das trevas" width={200} />
                        <span>Batman</span>
                    </li>
                    <li>
                        <img src="https://img.elo7.com.br/product/original/264FCC6/big-poster-filme-batman-o-cavaleiro-das-trevas-lo02-90x60-cm-batman.jpg" alt="Batman Cavaleiro das trevas" width={200} />
                        <span>Batman</span>
                    </li>
                    <li>
                        <img src="https://img.elo7.com.br/product/original/264FCC6/big-poster-filme-batman-o-cavaleiro-das-trevas-lo02-90x60-cm-batman.jpg" alt="Batman Cavaleiro das trevas" width={200} />
                        <span>Batman</span>
                    </li>
                </ul>
            </section>
            <h2>Popular</h2>
        </Container>
    )
}

export default Home