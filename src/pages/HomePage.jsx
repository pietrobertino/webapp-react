import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

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
                <h1>Movies</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {movies.map(movie => (
                        <div className="col" key={movie.id}>
                            <div className="card">
                                <img src={import.meta.env.VITE_SERVER_API_URL + '/imgs/' + movie.image} alt={movie.title} className="card-img-top" />
                                <div className="card-body">
                                    <div className=" card-title">{movie.title}</div>
                                    <div>{movie.genre}</div>
                                    <div>{movie.release_year}</div>
                                    <button><Link to={`/movies/${movie.id}`}>View Details</Link></button>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}