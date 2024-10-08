import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io"; 
import { FaTwitter } from "react-icons/fa";


export function Footer() {
    return (
        <footer className=" container --fluid --responsive  pt--20 pb--20  pr--100 pl--100 bg--linearG"  style={{borderRadius:'10rem 0 10rem 0 '}}>
            <div className="container flex flex--justify-content-between flex--align-item-center flex--gap ">
                
                <QuickLinks text='Quick Links' /> 
                <Ashram text='Ashram' /> 
                <ContactUs text='Contact Us' />
                <SocialLinks text='Social Links' />
            </div> 
            
            <hr className="mt--10"></hr>
            <p className="font--center">
                2024 Druze Analytics. All Rights Reserved
            </p>
        </footer>
    )
}




const QuickLinks = (props) => {
    return (
        <div className="flex flex--direction-column flex--justify-content-start flex--align-item-center  pd--20 flex--gap">
            <p className="mb--40 fs--20 font--bold" >{props.text}</p>
            <Link href="/book" className="font--underline font--center" >Book</Link>
            <Link href="/donate" className="font--underline font--center" >Donate</Link>
            <Link href="/gallery" className="font--underline font--center" >Gallery</Link>
        </div>
    );
};  


const Ashram = (props) => {
    return (
        <div className="flex flex--direction-column flex--justify-content-start  pd--20 flex--gap ">
            <p className="mb--40 fs--20 mt--10 font--bold font--center" >{props.text}</p>
            
            <p>What is Lorem Ipsum?</p> 
            <p>the printing and typesetting industry.</p>
            <p>Lorem Ipsum has been the industry's</p>
            
        </div>
    );
};  
  
const ContactUs = (props) => {
    return (
        <div className="flex flex--direction-column  flex--align-item-center flex--justify-content-start  pd--20 flex--gap  " >
            <p className="mb--40 fs--20 font--bold font--center" >{props.text}</p>
            <p>+91 9113464628</p> 
            <p>Email: avinshJha@gmail.com</p> 
            <p>Email: avinshJha@gmail.com</p> 
        </div>
    );
};   
const SocialLinks = (props) => {
    return (
        <div className="flex flex--direction-column flex--justify-content-start flex--align-item-center  pd--20 flex--gap  " >
            <p className="mb--40 fs--20 font--bold" >{props.text}</p>

            <Link href={"/a"} className="fs--30 pd--0 md--0 font--center"><IoLogoInstagram/> </Link>  
            <Link href={"/a"} className="fs--30 pd--0 md--0 font--center"><FaTwitter/> </Link> 
        </div>
    );
};  

