import Image from "next/image";
import Navbar from "./components/Navbar";
import React from "react";
import home_main_img from "./asset/HeaderImage main.webp";


export default function Home() {
  return (
    <React.Fragment>
      <Navbar/>
      <Image src={home_main_img} width={2000} height={2000} alt="home_main_img" />
      
    </React.Fragment>
  );
}
