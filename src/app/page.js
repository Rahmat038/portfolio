import Image from "next/image";
import HeroComp from "./Components/HomeComponent/HeroComp";
import RecentPost from "./Components/HomeComponent/RecentPost";
import FeaturedWorks from "./Components/HomeComponent/FeaturedWorks";


export default function Home(){
  return(
    <div className="">
      <HeroComp />
      <RecentPost />
      <FeaturedWorks />
    </div>
  );
}
