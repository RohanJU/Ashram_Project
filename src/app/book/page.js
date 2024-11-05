
import Header from "@/Component/header/Header";
import { EmblaCarousel } from "@/Component/section/EmblaCarousel";
import { Footer } from "@/Component/footer/Footer"; 

import { Books } from "@/Component/book/Books";


export default function Home() {
  return (
   <>
   <Header/>
   <EmblaCarousel/> 
   <Books/> 
   <Footer />
   </>
  );
}
