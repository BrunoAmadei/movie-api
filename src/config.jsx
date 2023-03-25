const ApiKey = '1ca36e40b3ec689a0a6ecc1584b108e8'
const ApiUrl = 'https://api.themoviedb.org/3'

//api.themoviedb.org/3/search/movie/


const fetchApi = async (endpoint) => {
    const req = await fetch(`${ApiUrl}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'toprated',
                title: 'Top Rated',
                items: await fetchApi(`/movie/top_rated?api_key=${ApiKey}`)
            },
            {
                slug: 'upcoming',
                title: 'Upcoming',
                items: await fetchApi(`/movie/upcoming?api_key=${ApiKey}`)
            },
            {
                slug: 'popular',
                title: 'Popular',
                items: await fetchApi(`/movie/popular?api_key=${ApiKey}`)
            }
        ]
    },
    getMovieInfo: async (movieId) => {
        let info = {}
        if (movieId) {
            info = await fetchApi(`/movie/${movieId}?api_key=${ApiKey}`)
        }

        return info
    },

    getMovieVideos: async (movieId) => {
        let videos = []
        if (movieId) {
            videos = await fetchApi(`/movie/${movieId}/videos?api_key=${ApiKey}`)
        }

        return videos.results
    }
}