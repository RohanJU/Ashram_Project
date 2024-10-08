import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/Component/header/Header";
import { EmblaCarousel } from "@/Component/section/EmblaCarousel";
import { Footer } from "@/Component/footer/Footer";

export default function Home() {
  return (
   <>
   <Header/>
   <EmblaCarousel/> 
   <Footer/>
   </>
  );
}
