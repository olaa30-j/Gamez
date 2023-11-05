import React, { useState, useEffect } from 'react';

const GameRating = ({ rating }) => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            const filledStars = Math.min(5, Math.max(0, rating)); // Limit the rating to a range of 0 to 5.
            const starArray = Array.from({ length: filledStars }, (_, index) => index);
            setStars(starArray);
        };

        generateStars();
    }, [rating]);

    return (
        <div className="gameRating">
            {stars.map((star, index) => (
                <i key={index} className="bi bi-star-fill"></i>
            ))}
        </div>
    );
};

export default GameRating;
