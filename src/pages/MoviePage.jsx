import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import MovieReviews from "../components/MovieReviews";

export default function MoviePage() {

    const { movieid } = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    const url = import.meta.env.VITE_SERVER_API_URL + `/api/movies/${movieid}`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setMovieInfo(res.data);
            })
    }, [movieid])



    return (
        <>
            <section className="text-center p-3">
                <div className="container">
                    <h1 className="text-center">{movieInfo.title}</h1>
                    <img src={import.meta.env.VITE_SERVER_API_URL + '/imgs/' + movieInfo.image} alt={movieInfo.title} className="w-25 text-center" />
                    <div className="mt-3">
                        <div><span className=" fw-bold">Genre:</span> {movieInfo.genre}</div>
                        <div><span className=" fw-bold">Release Year:</span> {movieInfo.release_year}</div>
                        <div><span className=" fw-bold">Director:</span> {movieInfo.director}</div>
                        <div><span className=" fw-bold">Plot:</span> {movieInfo.abstract}</div>
                    </div>
                </div>
            </section>

            <div className="container">
                <section className="mt-5">
                    <h2>Reviews</h2>
                    <MovieReviews movieInfo={movieInfo} />
                </section>
            </div>

        </>
    )
}