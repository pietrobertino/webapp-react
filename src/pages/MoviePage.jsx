import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import MovieReviews from "../components/MovieReviews";
import MovieScore from "../components/MovieScore";
import ReviewForm from "../components/ReviewForm";

export default function MoviePage() {

    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    const url = import.meta.env.VITE_SERVER_API_URL + `/api/movies/${movieId}`


    function getMovieInfo(api_url) {
        axios.get(api_url)
            .then(res => {
                setMovieInfo(res.data);
            })
    }


    useEffect(() => getMovieInfo(url), [movieId])



    return (
        <>
            <section className="text-center py-5" id="movie-description">
                <div className="container">
                    <h1 className="text-center pb-3">{movieInfo.title}</h1>
                    <img src={import.meta.env.VITE_SERVER_API_URL + '/imgs/' + movieInfo.image} alt={movieInfo.title} className="w-25 text-center" />
                    <div className="mt-3 movie-info">
                        <div><span className=" fw-bold">Genre:</span> {movieInfo.genre}</div>
                        <div><span className=" fw-bold">Release Year:</span> {movieInfo.release_year}</div>
                        <div><span className=" fw-bold">Director:</span> {movieInfo.director}</div>
                        <div><span className=" fw-bold">Plot:</span> {movieInfo.abstract}</div>
                        <div><span className=" fw-bold">Score:</span><MovieScore vote={movieInfo.medium_score} className=' d-inline' /></div>
                    </div>
                </div>
            </section>

            <section className="py-5" id="review-section">
                <div className="container">
                    <h1 className="pb-3">Reviews</h1>
                    <MovieReviews movieInfo={movieInfo} />
                </div>
            </section>

            <section>
                <div className="container">
                    <h1>Submit your review</h1>
                    <ReviewForm movieId={movieId} getMovieInfo={getMovieInfo} url={url} />
                </div>
            </section>

        </>
    )
}