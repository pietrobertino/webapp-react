import axios from "axios";
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

export default function HomePage() {

    const [movies, setMovies] = useState([]);

    const [clickedMovie, setClickedMovie] = useState({});

    const url = import.meta.env.VITE_SERVER_API_URL + '/api/movies';

    useEffect(() => {

        axios.get(url)
            .then(res => {
                setMovies(res.data);
            })

    }, []);

    return (
        <>
            <div className="container">
                <h1 className=" py-3">Movies</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 pb-3">
                    {movies.map(movie => (
                        <div className="col" key={movie.id}>
                            <MovieCard movie={movie} setClickedMovie={setClickedMovie} />
                        </div>
                    ))}
                </div>
            </div>

            <MovieModal clickedMovie={clickedMovie} />

        </>
    )
}