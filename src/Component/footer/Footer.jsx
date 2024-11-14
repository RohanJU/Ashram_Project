import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";


export function Footer() {
    return (
        <footer className=" container --fluid --responsive  pt--20 pb--20  pr--100 pl--100 bg--linearG mt--20 flex--wrap" style={{ borderRadius: '3rem 3rem  0 0' }}>
            <div className="container --responsive flex flex--justify-content-between flex--gap-1">

                <QuickLinks
                    hading='Quick Links'
                    link1='Book'
                    link2='Gallery'
                    link3='Donate' />

                <FooterContent
                    hading='Ashram'
                    P1='What is Lorem Ipsum?'
                    P2='the printing and typesetting industry.'
                    P3='Lorem Ipsum has been the industry' />

                <FooterContent
                    hading='ContactUs'
                    P1='+91  9113464628'
                    P2='Email: avinshJha@gmail.com'
                    P3='Email: avinshJha@gmail.com' />

                <SocialLinks text='Social Links' />
            </div>

            <hr className="mt--10"></hr>
            <p className="font--center">
                2024 Druze Analytics. All Rights Reserved
            </p>
        </footer>
    )
}

const QuickLinks = ({ hading, link1, link2, link3 }) => {
    return (
        <div className="flex flex--direction-column pd--20 flex--gap-1" style={{minWidth:'100px'}}>
            <p className="mb--30 fs--20 font--bold " >{hading}</p>
            <Link
                href="/book"
                className="font--underline "
            >
                {link1}
            </Link>
            <Link
                href="/gallery"
                className="font--underline "
            >
                {link2}
            </Link>
            <Link
                href="/donate"
                className="font--underline "
            >
                {link3}
            </Link>
        </div>
    );
};

const FooterContent = ({ hading, P1, P2, P3 }) => {
    return (
        <div className="flex flex--direction-column flex--justify-content-start  pd--20 flex--gap-1 " style={{minWidth:'100px'}}>
            <p className="mb--40 fs--20 mt--10 font--bold " >{hading}</p>
            <p>{P1}</p>
            <p>{P2}</p>
            <p>{P3}</p>
        </div>
    );
}


const SocialLinks = (props) => {
    return (
        <div className="flex flex--direction-column flex--justify-content-start flex--align-item-center  pd--20 flex--gap-1  " style={{minWidth:'100px'}} >
            <p className="mb--40 fs--20 font--bold" >{props.text}</p>

            <Link
                href={"/a"}
                className="fs--30 pd--0 md--0 font--center">
                <IoLogoInstagram />
            </Link>
            <Link
                href={"/a"}
                className="fs--30 pd--0 md--0 font--center">
                <FaTwitter />
            </Link>
        </div>
    );
};  
