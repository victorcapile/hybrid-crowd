import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logo, sun } from '../assets';
import { navlinks } from '../constants';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick, text }) => (
  <div className={`inline-flex items-center ${!disabled && 'cursor-pointer'}`} onClick={handleClick}>
    <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name } flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`}>
      {!isActive ? (
        <img src={imgUrl} alt={name} className="w-1/2 h-1/2" />
      ) : (
        <img src={imgUrl} alt={name} className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
      )}
    </div>
    <p className={`ml-2 ${isActive && isActive === name ? 'text-[#fff]' : 'text-gray-500'}`}>{text}</p>
  </div>
);


const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="sticky top-4 h-[40vh] px-2">
      <div className="flex-1 flex flex-col justify-between items-left bg-[#1c1c24] rounded-[25px] w-[150px] py-4 px-4">
        <div className="flex flex-col justify-center items-left gap-8">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
              text={link.text}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
