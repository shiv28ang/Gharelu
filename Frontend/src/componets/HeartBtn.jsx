import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const HeartBtn = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsClicked(prev => !prev);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getColor = () => {
    if (isClicked) return 'red';
    if (isHovered) return 'red';
    return 'white';
  };

  return (
    <div 
      onClick={handleClick} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <FaHeart 
        color={getColor()} 
        size={23} 
        className='cursor-pointer drop-shadow-sm' 
      />
    </div>
  );
}

export default HeartBtn;
