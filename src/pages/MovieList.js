import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import GridView from "../component/GridView";
import MovieCardView from "../component/MovieCardView";

const MovieList = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const getMovieList = () => {
        let link = `${process.env.REACT_APP_MOVIEDB_LINK}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`;
        axios.get(link)
            .then(res => {
                setPopularMovies(res?.data?.results)
            })

    }
    useEffect(() => {
        getMovieList()
    }, [])
    return <Fragment>
        <GridView movies={popularMovies}/>
        <Row lg={5}>
            {(popularMovies || []).map(movie => {
                return <MovieCardView movie={movie} />
            })}
        </Row>
    </Fragment>
}

export default MovieList;