"use client"; 

import { FaCircleArrowDown } from "react-icons/fa6"; 
import { useState } from 'react'; 

import Image from "next/image";
import bookimg from "../../../public/images/book.png"




export function Card({ book }) { 

    const [hover, setHover] = useState(false); 

    return (
        <div className="Card">

            <Image width={200} height={100} src={bookimg} />

            <p className="font--center font--bold">{book.title}</p>

            <div className=" flex flex--gap-3  flex--justify-content-center mt--15">

                <button>Read</button>
                <FaCircleArrowDown
                    className="cursor-pt"
                    size={42}
                    style={{ color: hover ? 'black' : '#add8c4' }}    // Tea Green on hover
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)} 

                    onClick={() => {
                        // Trigger download for a file
                        const link = document.createElement('a');
                        link.href = '/path/to/your/file.pdf';     // Replace with actual file path
                        link.download = 'Book1.pdf';              // Specify the file name
                        link.click();
                    }}
                />
            </div>

        </div>
    );
}
 
