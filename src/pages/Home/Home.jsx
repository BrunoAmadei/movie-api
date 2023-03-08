import ApiKey from '../../config'
import { Container, Cards, Card } from '../styles'

const Home = () => {
    const key = { ApiKey }
    // console.log(key)
    return (
        <Container>
            <section>
                <h1>Top Rated</h1>
                <Cards>
                    <Card>
                        <a href="#">
                            <img src="https://img.elo7.com.br/product/original/264FCC6/big-poster-filme-batman-o-cavaleiro-das-trevas-lo02-90x60-cm-batman.jpg" alt="Batman Cavaleiro das trevas" />
                        </a>
                        <span>Batman</span>
                    </Card>
                    <Card>
                        <a href="#">
                            <img src="https://img.elo7.com.br/product/original/264FCC6/big-poster-filme-batman-o-cavaleiro-das-trevas-lo02-90x60-cm-batman.jpg" alt="Batman Cavaleiro das trevas" />
                        </a>
                        <span>Batman</span>
                    </Card>
                    <Card>
                        <a href="#">
                            <img src="https://img.elo7.com.br/product/original/264FCC6/big-poster-filme-batman-o-cavaleiro-das-trevas-lo02-90x60-cm-batman.jpg" alt="Batman Cavaleiro das trevas" />
                        </a>
                        <span>Batman</span>
                    </Card>
                    <Card>
                        <a href="#">
                            <img src="https://img.elo7.com.br/product/original/264FCC6/big-poster-filme-batman-o-cavaleiro-das-trevas-lo02-90x60-cm-batman.jpg" alt="Batman Cavaleiro das trevas" />
                        </a>
                        <span>Batman</span>
                    </Card>
                </Cards>
            </section>
            <section>
                <h1>Popular</h1>
            </section>
        </Container>
    )
}

export default Home