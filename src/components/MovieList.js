import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './MovieList.css';

function MovieList(){
    const [movies, setMovies] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        console.log('use effect');
        getMovies();
    },[]);

    const getMovies = () => {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
        .then(data => {
          console.log(data);
          setMovies(data);
        });
      }

    const onMovieClicked = (item) => {
        console.log('on clicked', item, history);
        history.push("/card", item);
    }

    return (
        <div className='movie-list'>
            <h2>Movie List</h2>
            <div className='movies-list'>
                {movies.map((movie, index)=>{
                    return (<div key={index} className='movie-item' onClick={()=>onMovieClicked(movie)}>
                            <div className='movie-image'>
                                <img className='image' alt="img" src={"https://assets.thehansindia.com/h-upload/2021/03/31/1600x960_1065405-movies.png"}/>
                            </div>
                            <div className='movie-name'>{movie.name}</div>
                        </div>);
                })}
            </div>
        </div>
    );
}

export default MovieList;