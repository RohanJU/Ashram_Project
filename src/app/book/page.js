import Header from "@/Component/header/Header"; 
import { EmblaCarousel } from "@/Component/section/EmblaCarousel"; 
import Books from "@/Component/book/Books"; 
import { Footer } from "@/Component/footer/Footer"; 



const Home = () => {
    return (
        <div>
            <Header/> 
            <EmblaCarousel/> 
            <Books/>
            <Footer/>  
        </div>
    )
} 
export default Home; 