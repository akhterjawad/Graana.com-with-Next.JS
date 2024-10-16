'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import GraanaLogo from '../asset/GraanaLogo.svg';
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from 'react-icons/rx';

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
      <div className="border hidden py-4 md:flex items-center">
        <div className="cursor-pointer rounded-lg hover:bg-slate-100 px-2 xl:ml-[5%] ml-2">
          <Image
            src={GraanaLogo}
            alt="GraanaLogo"
            height={75}
            width={200}
            className="w-[200px] h-auto sm:w-[180px] sm:h-auto md:w-[200px] md:h-auto"
          />
        </div>

        <div className="ml-24 flex items-center gap-5 font-bold">
          <div
            className="relative "
            onMouseOver={() => handleMouseOver('Buy')}
            onMouseOut={handleMouseOut}
          >
            <p className="lg:text-[1rem] text-[0.8rem] cursor-pointer rounded-lg hover:bg-slate-100 px-2">
              Buy
            </p>
            {hoveredElement === 'Buy' && (
              <div className="absolute w-64 left-0  rounded-lg bg-white border border-gray-300">
                <p className='px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm'>Buy a residential property</p>
                <p className='px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm'>Buy a commercial property</p>
                <p className='px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm'>Buy a plot</p>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseOver={() => handleMouseOver('Sell')}
            onMouseOut={handleMouseOut}
          >
            <p className="lg:text-[1rem] text-[0.8rem] cursor-pointer rounded-lg hover:bg-slate-100 px-2">
              Sell
            </p>
            {hoveredElement === 'Sell' && (
              <div className="absolute w-64 left-0  rounded-lg bg-white border border-gray-300">
                <p className='px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm'>Sell a property</p>
                <p className='px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm'>Rentout a property</p>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseOver={() => handleMouseOver('Rent')}
            onMouseOut={handleMouseOut}
          >
            <p className="lg:text-[1rem] text-[0.8rem] cursor-pointer rounded-lg hover:bg-slate-100 px-2">
              Rent
            </p>
            {hoveredElement === 'Rent' && (
              <div className="absolute w-64 left-0  rounded-lg bg-white border border-gray-300">
                <p className='px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm'>Residential property on rent</p>
                <p className='px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm'>Commercial property on rent</p>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseOver={() => handleMouseOver('invest')}
            onMouseOut={handleMouseOut}
          >
            <p className="lg:text-[1rem] text-[0.8rem] cursor-pointer rounded-lg hover:bg-slate-100 px-2">
              invest
            </p>
            {hoveredElement === 'invest' && (
              <div className="absolute w-64 left-0  rounded-lg bg-white border border-gray-300">
                <p className='px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm'>Line 1: This is the first line.</p>
                <p className='px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm'>Line 2: This is the second line.</p>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseOver={() => handleMouseOver('building')}
            onMouseOut={handleMouseOut}
          >
            <p className="lg:text-[1rem] text-[0.8rem] cursor-pointer rounded-lg hover:bg-slate-100 px-2">
              Building Materials
            </p>
            {hoveredElement === 'building' && (
              <div className="absolute w-64 left-0  rounded-lg bg-white border border-gray-300">
                <p className='px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm'>Line 1: This is the first line.</p>
                <p className='px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm'>Line 2: This is the second line.</p>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseOver={() => handleMouseOver('more')}
            onMouseOut={handleMouseOut}
          >
            <p className="lg:text-[1rem] text-[0.8rem] cursor-pointer rounded-lg hover:bg-slate-100 px-2">
              more
            </p>
            {hoveredElement === 'more' && (
              <div className="absolute w-64 left-0  rounded-lg bg-white border border-gray-300">
                <p className='px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm'>Line 1: This is the first line.</p>
                <p className='px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm'>Line 2: This is the second line.</p>
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
      <div className="md:hidden inline-block">
        <RxHamburgerMenu />
      </div>
    </React.Fragment>
  );
};

export default Navbar;
