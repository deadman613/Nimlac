import { Divide } from "lucide-react";
import Image from "next/image";
// src/app/page.js
import Hero from "@/Homesections/Hero";
import Homesection1 from "@/Homesections/Homesection1";
import Homesection2 from "@/Homesections/Homesection2";
import Homesection3 from "@/Homesections/Homesection3";
import Homesection4 from "@/Homesections/Homesection4";
import Homesection5 from "@/Homesections/Homesection5";
import Homesection1_1 from "@/Homesections/Homesection1_1";
import Homesection6 from "@/Homesections/Homesection6";
import Homesection7 from "@/Homesections/Homesection7";
import Homesection8 from "@/Homesections/Homesection8";
import HomeAbout from "@/Homesections/HomeAbout";
import Gain from "@/Homesections/Gain";
import Testimonials from "@/Homesections/Testimonials";
import Gallery from "@/Homesections/Gallery";
export default function Home() {
  return (
    <div >
      <Hero/>
      {/* <Homesection1/> */}
      <HomeAbout />
      <Homesection1_1/>
      <Homesection3/>
      {/* <Homesection2/> */}
      <Gain />
      {/* <Homesection4/> */}
      <Testimonials/>
      {/* <Homesection7/> */}
      <Gallery/>
      <Homesection6/>
      <Homesection5/>
      <Homesection8/>
    </div>
  );
}