import { useState, useEffect } from 'react'
import config from '../../config'
import Movies from '../../components/Movies/Movies'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Loading from '../../components/Loading/Loading'

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
            let chosenMovie = popular[0].items.results[randomMovie]
            let bannerInfo = await config.getMovieInfo(chosenMovie.id)
            setBannerData(bannerInfo)
        }

        loadAll()
    }, [])


    return (
        <div>
            <Navbar />
            {bannerData &&
                <Banner item={bannerData} />
            }
            <section className='lists'>
                {movieList.map((item, key) => (
                    <Movies key={key} title={item.title} items={item.items} />
                ))
                }
            </section>
            {movieList.length <= 0 &&
                <Loading />
            }
            <Footer />
        </div >
    )
}

export default Home