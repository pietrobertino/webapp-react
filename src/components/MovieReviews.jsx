import MovieReview from "./MovieReview"

export default function MovieReviews({ movieInfo }) {

    return (
        <ul className=" list-group">
            {movieInfo?.reviews?.map(review => (
                <MovieReview review={review} key={review.id} />
            ))}
        </ul>
    )
}