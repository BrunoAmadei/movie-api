import { useState, useEffect } from 'react'
import config from '../../config'
import Movies from '../../components/Movies/Movies'
import { Link } from 'react-router-dom'

const Home = () => {
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        const loadAll = async () => {
            let movies = await config.getHomeList()
            setMovieList(movies)
        }
        loadAll()
    }, [])

    return (
        <div>
            {movieList.map((item, key) => (
                <Movies key={key} title={item.title} items={item.items}/>
            ))
            }
        </div >
    )
}

export default Home