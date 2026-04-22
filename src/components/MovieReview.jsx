export default function MovieReview({ review }) {

    return (
        <li className=" list-group-item" key={review.id}>
            <div className="d-flex justify-content-between">
                <div>{review.name}:</div>
                <div>{review.vote}/5</div>
            </div>
            <div className="review-text">
                {review.text}
            </div>
        </li>
    )
}