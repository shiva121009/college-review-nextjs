import Image from "next/image";
import Header from "@/app/component/Header"
import Hero from "./component/hero";
import HeroSection from "./component/hero";
import CategorySection from "./component/category";
import TopFeaturedColleges from "./component/features";
import HelpfulTools from "./component/tools";
import LatestUpdates from "./component/update";
import StudentTestimonials from "./component/testimonial";
import NewsletterSubscribe from "./component/newsletter";
import Footer from "./component/footer";
import ChatButton from "./component/floatingbutton";

export default function Home() {
  return (
  <> 
    <Header/>
    <HeroSection/>
    <CategorySection/>
    <TopFeaturedColleges/>
     <HelpfulTools/>
     <LatestUpdates/>
     <StudentTestimonials/>
     <ChatButton/>
     <NewsletterSubscribe/>
     <Footer/>
  </>

  );
}
