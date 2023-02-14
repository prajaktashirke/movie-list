import React from "react";
import { Card, Col, Form } from "react-bootstrap";

const MovieCardView = ({movie}) => {
    return <Col className="d-flex">
    <Card className={"m-3 flex-fill"}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path
            }`} />
            <Card.Footer>{movie.original_title}</Card.Footer>
    </Card>
</Col>
}

export default MovieCardView;