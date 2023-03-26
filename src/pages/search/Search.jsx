import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import config from '../../config';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Container, MovieList, Movie } from './styles';

function Search() {
  const [movies, setMovies] = useState([]);
  const [bgHeader, setBgHeader] = useState(false)

  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchMovies = async () => {
      const results = await config.getSearchMovies(query);
      setMovies(results);
    };
    fetchMovies();
  }, [query]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 50) {
      setBgHeader(true);
    } else {
      setBgHeader(false);
    }
  };
  return (
    <Container>
      <Navbar  bgHeader={bgHeader}/>
      <h2>Results for: <span>{query}</span></h2>
      <MovieList>
        {movies.map(movie => {
          if (movie.poster_path) {
            return (
              <Movie key={movie.id}>
                <Link to={`/Movie/${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
                </Link>
                <span>{movie.title}</span>
              </Movie>
            )
          } else {
            return null
          }
        })}
      </MovieList>
      <Footer />
    </Container >
  );
}

export default Search;
