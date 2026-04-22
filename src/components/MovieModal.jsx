import MovieButton from "./MovieButton";

export default function MovieModal({ clickedMovie }) {
    return (
        <div className="modal fade" id="movieModal" tabindex="-1" aria-labelledby="movieModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="movieModalLabel">{clickedMovie.title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div><span className=" fw-bold">Genre:</span> {clickedMovie.genre}</div>
                        <div><span className=" fw-bold">Release Year:</span> {clickedMovie.release_year}</div>
                        <div><span className=" fw-bold">Director:</span> {clickedMovie.director}</div>
                        <div><span className=" fw-bold">Plot:</span> {clickedMovie.abstract}</div>
                    </div>
                    <div className="modal-footer">
                        <MovieButton movie={clickedMovie} />
                    </div>
                </div>
            </div>
        </div>
    )
}