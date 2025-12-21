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
export default function Home() {
  return (
    <div >
      <Hero/>
      <Homesection1/>
      <Homesection1_1/>
      <Homesection3/>
      <Homesection2/>
      <Homesection4/>
      <Homesection5/>
    </div>
  );
}