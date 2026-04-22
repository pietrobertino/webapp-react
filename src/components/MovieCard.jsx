import { Link } from "react-router-dom";
import MovieButton from "./MovieButton";


export default function MovieCard({ movie, setClickedMovie }) {

    return (
        <>
            <div className="card  h-100">
                <div className="row row-cols-2 g-0">
                    <div className="col img-col">
                        <img src={import.meta.env.VITE_SERVER_API_URL + '/imgs/' + movie.image} alt={movie.title} className=" card-img " />
                        <div className="card-img-overlay" data-bs-toggle="modal" data-bs-target="#movieModal" onClick={() => setClickedMovie(movie)}>
                            <div className="d-flex">
                                <i className="bi bi-eye-fill fs-1"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex flex-column">
                        <div className="card-header w-100">
                            <div className="text-center fw-bold fs-3 card-title">{movie.title}</div>
                        </div>
                        <div className="card-body d-flex flex-column flex-grow-1">
                            <div className="d-flex justify-content-between">
                                <span className="fw-bold">Genre:</span>
                                <span>{movie.genre}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span className="fw-bold">Year:</span>
                                <span>{movie.release_year}</span>
                            </div>
                        </div>
                        <div className=" card-footer mt-auto text-center">
                            <MovieButton movie={movie} />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}