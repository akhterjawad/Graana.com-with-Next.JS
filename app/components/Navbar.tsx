'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import GraanaLogo from '../asset/GraanaLogo.svg';
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from 'react-icons/rx';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = () => {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleMouseOver = (element: string) => {
    setHoveredElement(element);
  };

  const handleMouseOut = () => {
    setHoveredElement(null);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <div className="border hidden py-4 md:flex items-center">
        {/* Logo and desktop links */}
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
          {/* Navigation links */}
          <div
            className="relative"
            onMouseOver={() => handleMouseOver('Buy')}
            onMouseOut={handleMouseOut}
          >
            <p className="lg:text-[1.1rem] text-[0.8rem] cursor-pointer rounded-lg hover:bg-slate-100 px-2">Buy</p>
            {hoveredElement === 'Buy' && (
              <div className="absolute w-64 left-0 rounded-lg bg-white border border-gray-300">
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a residential property</p>
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a commercial property</p>
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a plot</p>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseOver={() => handleMouseOver('Buy')}
            onMouseOut={handleMouseOut}
          >
            <p className="lg:text-[1.1rem] text-[0.8rem] cursor-pointer rounded-lg hover:bg-slate-100 px-2">Buy</p>
            {hoveredElement === 'Buy' && (
              <div className="absolute w-64 left-0 rounded-lg bg-white border border-gray-300">
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a residential property</p>
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a commercial property</p>
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a plot</p>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseOver={() => handleMouseOver('Buy')}
            onMouseOut={handleMouseOut}
          >
            <p className="lg:text-[1.1rem] text-[0.8rem] cursor-pointer rounded-lg hover:bg-slate-100 px-2">Buy</p>
            {hoveredElement === 'Buy' && (
              <div className="absolute w-64 left-0 rounded-lg bg-white border border-gray-300">
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a residential property</p>
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a commercial property</p>
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a plot</p>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseOver={() => handleMouseOver('Buy')}
            onMouseOut={handleMouseOut}
          >
            <p className="lg:text-[1.1rem] text-[0.8rem] cursor-pointer rounded-lg hover:bg-slate-100 px-2">Buy</p>
            {hoveredElement === 'Buy' && (
              <div className="absolute w-64 left-0 rounded-lg bg-white border border-gray-300">
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a residential property</p>
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a commercial property</p>
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a plot</p>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseOver={() => handleMouseOver('Buy')}
            onMouseOut={handleMouseOut}
          >
            <p className="lg:text-[1.1rem] text-[0.8rem] cursor-pointer rounded-lg hover:bg-slate-100 px-2">Buy</p>
            {hoveredElement === 'Buy' && (
              <div className="absolute w-64 left-0 rounded-lg bg-white border border-gray-300">
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a residential property</p>
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a commercial property</p>
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a plot</p>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseOver={() => handleMouseOver('Buy')}
            onMouseOut={handleMouseOut}
          >
            <p className="lg:text-[1.1rem] text-[0.8rem] cursor-pointer rounded-lg hover:bg-slate-100 px-2">Buy</p>
            {hoveredElement === 'Buy' && (
              <div className="absolute w-64 left-0 rounded-lg bg-white border border-gray-300">
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a residential property</p>
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a commercial property</p>
                <p className="px-2 cursor-pointer rounded-lg hover:bg-slate-100 py-3 font-normal text-sm">Buy a plot</p>
              </div>
            )}
          </div>
          {/* Similar structure for other navigation items */}
        </div>
        <div className="ml-28 flex items-center gap-10">
          <h1 className="lg:text-[1.1rem] text-[0.8rem] font-semibold">Wanted</h1>
          <div className="lg:text-[1.1rem] text-[0.8rem]">
            <FaRegUserCircle />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className=" absolute md:hidden inline-block">
        <Button className='text-white text-xl ' onClick={toggleDrawer(true)}>
          <RxHamburgerMenu />
        </Button>
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
