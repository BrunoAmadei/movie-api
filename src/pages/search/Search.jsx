import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import config from '../../config';

function Search() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchMovies = async () => {
      const results = await config.getSearchMovies(query);
      setMovies(results);
      console.log(results)
    };
    fetchMovies();
  }, [query]);

  return (
    <div>
        <h2>Results for: <span>{query}</span></h2>
        
    </div>
  );
}

export default Search;
