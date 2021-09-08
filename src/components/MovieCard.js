import React from 'react';
import { useLocation } from 'react-router-dom';
import './MovieCard.css';
import ReactStars from "react-rating-stars-component";

function MovieCard() {
    let { state } = useLocation();

    const ratingChanged = (rating) => {
        console.log(rating, 'rating');
    }

    return (
        <div className='movie-card'>
            <div className='card'>
                <div className='movie-full-image'>
                    <img className='full-image' alt="img" src={"https://assets.thehansindia.com/h-upload/2021/03/31/1600x960_1065405-movies.png"} />
                </div>
                <div className='movie-details'>
                    <div>Movie: {state.name}</div>
                    <div>Description: --</div>
                    <div>Cast: </div>
                    <div className='rating-container'> Rating:<div className='rating'>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={30}
                            activeColor="#ffd700"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;