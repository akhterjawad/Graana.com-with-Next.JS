'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import GraanaLogo from '../asset/GraanaLogo.svg';
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const handleMouseOver = (element: string) => {
    setHoveredElement(element);
  };

  const handleMouseOut = () => {
    setHoveredElement(null);
  };

  return (
    <React.Fragment>
      <div className="border py-4 flex items-center">
        <div className="cursor-pointer rounded-lg hover:bg-slate-100 px-2 sm:ml-28 ml-5">
          <Image src={GraanaLogo} alt="GraanaLogo" height={75} width={200} />
        </div>
        <div className="ml-24 flex items-center gap-10 font-bold">
          <div 
            className="relative"
            onMouseOver={() => handleMouseOver('buy')}
            onMouseLeave={handleMouseOut}
          >
            <p className="cursor-pointer rounded-lg hover:bg-slate-100 px-2">
              buy
            </p>
            {hoveredElement === 'buy' && (
              <div className="absolute w-64 left-0  rounded-lg p-2 bg-gray-100 border border-gray-300">
                <p>Line 1: This is the first line.</p>
                <p>Line 2: This is the second line.</p>
              </div>
            )}
          </div>

          <div 
            className="relative"
            onMouseOver={() => handleMouseOver('sell')}
            onMouseLeave={handleMouseOut}
          >
            <p className="cursor-pointer rounded-lg hover:bg-slate-100 px-2">
              sell
            </p>
            {hoveredElement === 'sell' && (
              <div className="absolute w-64 left-0  rounded-lg p-2 bg-gray-100 border border-gray-300">
                <p>Line 1: This is the first line.</p>
                <p>Line 2: This is the second line.</p>
              </div>
            )}
          </div>

          <div 
            className="relative"
            onMouseOver={() => handleMouseOver('rent')}
            onMouseLeave={handleMouseOut}
          >
            <p className="cursor-pointer rounded-lg hover:bg-slate-100 px-2">
              rent
            </p>
            {hoveredElement === 'rent' && (
              <div className="absolute w-64 left-0  rounded-lg p-2 bg-gray-100 border border-gray-300">
                <p>Line 1: This is the first line.</p>
                <p>Line 2: This is the second line.</p>
              </div>
            )}
          </div>

          <div 
            className="relative"
            onMouseOver={() => handleMouseOver('invest')}
            onMouseLeave={handleMouseOut}
          >
            <p className="cursor-pointer rounded-lg hover:bg-slate-100 px-2">
              invest
            </p>
            {hoveredElement === 'invest' && (
              <div className="absolute w-64 left-0  rounded-lg p-2 bg-gray-100 border border-gray-300">
                <p>Line 1: This is the first line.</p>
                <p>Line 2: This is the second line.</p>
              </div>
            )}
          </div>

          <div 
            className="relative"
            onMouseOver={() => handleMouseOver('building')}
            onMouseLeave={handleMouseOut}
          >
            <p className="cursor-pointer rounded-lg hover:bg-slate-100 px-2">
              Building Materials
            </p>
            {hoveredElement === 'building' && (
              <div className="absolute w-64 left-0  rounded-lg p-2 bg-gray-100 border border-gray-300">
                <p>Line 1: This is the first line.</p>
                <p>Line 2: This is the second line.</p>
              </div>
            )}
          </div>

          <div 
            className="relative"
            onMouseOver={() => handleMouseOver('more')}
            onMouseLeave={handleMouseOut}
          >
            <p className="cursor-pointer rounded-lg hover:bg-slate-100 px-2">
              more
            </p>
            {hoveredElement === 'more' && (
              <div className="absolute w-64 left-0  rounded-lg p-2 bg-gray-100 border border-gray-300">
                <p>Line 1: This is the first line.</p>
                <p>Line 2: This is the second line.</p>
              </div>
            )}
          </div>
        </div>
        <div className='ml-28 flex items-center gap-10'>
          <h1 className='text-xl font-semibold'>wanted</h1>
          <div className='text-xl'>
            <FaRegUserCircle />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
