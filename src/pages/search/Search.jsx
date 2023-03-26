import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import config from '../../config';
import Footer from '../../components/Footer/Footer'
import { Container } from './styles';


function Search() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchMovies = async () => {
      const results = await config.getSearchMovies(query);
      setMovies(results);
    };
    fetchMovies();
  }, [query]);

  return (
    <Container>
      <h2>Results for: <span>{query}</span></h2>
      {movies.map(movie => {
        if (movie.poster_path) {
          return (
            <ul key={movie.id}>
              <li>
                <Link to={`/Movie/${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
                  {movie.title}
                </Link>
              </li>
            </ul>
          )
        }else{
          return null
        }
      })}

      <Footer/>
    </Container >
  );
}

export default Search;
