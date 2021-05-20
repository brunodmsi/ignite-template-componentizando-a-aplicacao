import React from 'react';
import { Button } from '../components/Button';
import { MovieCard } from '../components/MovieCard';

import '../styles/sidebar.scss';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Runtime: string;
  Ratings: Array<{
    Value: string;
  }>;
}

interface ContentProps {
  movies: MovieProps[];
}

export const Content: React.FC<ContentProps> = ({ movies }) => {
  return (
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard 
            key={movie.imdbID}
            title={movie.Title} 
            poster={movie.Poster} 
            runtime={movie.Runtime} 
            rating={movie.Ratings[0].Value} 
          />
        ))}
      </div>
    </main>
  )
} 