import React from 'react';
import MovieList from './MovieList';
import './Movies.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MovieCard from './MovieCard';

function Movies() {
    return (
        <div className='movies'>
            <div className='list'>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <MovieList />
                        </Route>
                        <Route path="/card">
                            <MovieCard />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default Movies;