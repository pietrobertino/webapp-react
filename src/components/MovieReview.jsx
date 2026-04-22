import { useState, useEffect } from 'react';
import MovieScore from './MovieScore';

export default function MovieReview({ review }) {


    return (
        <li className=" list-group-item" key={review.id}>
            <div className="d-flex justify-content-between">
                <div>{review.name}:</div>
                <MovieScore vote={review.vote} />
            </div>
            <div className="review-text">
                {review.text}
            </div>
        </li>
    )
}