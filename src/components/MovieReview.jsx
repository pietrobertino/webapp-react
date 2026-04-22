import { useState, useEffect } from 'react';

export default function MovieReview({ review }) {

    const [stars, setStars] = useState([]);

    useEffect(() => {
        const array = [];
        for (let i = 0; i < 5; i++) {
            if (i < review.vote) {
                array.push("star-fill")
            } else {
                array.push("star")
            }
        }
        console.log(array)
        setStars(array);
    }, [])

    return (
        <li className=" list-group-item" key={review.id}>
            <div className="d-flex justify-content-between">
                <div>{review.name}:</div>
                <div>
                    {stars.map((star, index) => (
                        <i className={`bi bi-${star}`} key={index}></i>
                    ))}
                </div>
            </div>
            <div className="review-text">
                {review.text}
            </div>
        </li>
    )
}