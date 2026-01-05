import { Divide } from "lucide-react";
import Image from "next/image";
import CourseHeroSection  from "../../Coursessection/section1";
import CoursePackagesSection from "../../Coursessection/section2";
import Homesection1_1 from "@/Homesections/Homesection1_1";
import Course1 from "@/Coursessection/Course1";



export default function page() {
  return (
    <div >
        <Course1 />
        {/* <CourseHeroSection/> */}
        <Homesection1_1 />
        <CoursePackagesSection/>
    
    </div>
  );
}