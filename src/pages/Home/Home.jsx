import { useState, useEffect } from 'react'
import config from '../../config'
import Movies from '../../components/Movies/Movies'
import Banner from '../../components/Banner/Banner'

const Home = () => {
    const [movieList, setMovieList] = useState([])
    const [bannerData, setBannerData] = useState(null)

    useEffect(() => {
        const loadAll = async () => {
            let movies = await config.getHomeList()
            setMovieList(movies)

            // featured movie 
            let popular = movies.filter(i => i.slug === 'popular')
            let randomMovie = Math.floor(Math.random() * (popular[0].items.results.length - 1))
            let banner = popular[0].items.results[randomMovie]
            let bannerInfo =  await config.getMovieInfo(banner.id)
          
            console.log( {bannerInfo} )
        }

        loadAll()
    }, [])

    return (
        <div>
            {bannerData &&
                <Banner item={bannerData} />
            }
            {movieList.map((item, key) => (
                <Movies key={key} title={item.title} items={item.items} />
            ))
            }
        </div >
    )
}

export default Home