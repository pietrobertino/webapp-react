import axios from "axios";
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard";

export default function HomePage() {

    const [movies, setMovies] = useState([]);

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
                <h1 className="text-white py-3">Movies</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {movies.map(movie => (
                        <div className="col" key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}