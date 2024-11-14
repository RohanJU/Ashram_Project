import Aboutguruji from "@/Component/aboutguruji/Aboutguruji";
import VideosImages from "@/Component/component/VideosImages";
import Header from "@/Component/header/Header";
import { EmblaCarousel } from "@/Component/section/EmblaCarousel";
import { Footer } from "@/Component/footer/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <EmblaCarousel />
      <VideosImages />
      <Aboutguruji/>
      <Footer/>
    </>
  );
}
