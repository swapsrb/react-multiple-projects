import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './styles.css';

export default function StarRating({noOfStars = 5}) {

    {/* Ask interviewer how many stars are required */}

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(currentIndex) {
        setRating(currentIndex);
    }

    function handleMouseEnter(currentIndex) {
        setHover(currentIndex);
    }

    function handleMouseLeave() {
        setHover(rating);
    }

    return <div className="star-rating"> {
        
        [...Array(noOfStars)].map((_,index) => {
            index += 1
            return <FaStar 
            // className={index <= Math.max(hover, rating) ? 'active': 'inactive'} 
            className={index <= (hover || rating) ? 'active': 'inactive'} 
            key={index} 
            onClick={() => handleClick(index)} 
            onMouseEnter={() => handleMouseEnter(index)} 
            onMouseLeave={handleMouseLeave} 
            size={40}/>
        })
    }
    </div>
}