
import Image from "next/image";

import hadeimg from "../../../public/images/Hade.png"
import QRimg from '../../../public/images/QR.png'

export default function Head() {
    return (
        <div>
            <div className="container bg--linearG position--relative" style={{ width: '100%', height: '580px' }}>
                <Image src={hadeimg}
                    layout="fill"
                    objectFit="fill"
                />
            </div>
            <div className="flex flex--wrap flex--wrap-reverse width--column-80 flex--justify-content-between pd--30" style={{margin:'auto'}}>
                <QR />
                <Donate />
            </div>

        </div>
    )
}

export function QR() {
    return (
        <div style={{minWidth:'400px'}}>
            <Image min-width={400} height={400} src={QRimg} className="boxShadow boxShadow--bg" />
            <div >
                <h3><br/>Fund Transfer/RTGS/NEFT/any other Indian mode of payment</h3>
                <br></br>
                <br></br>
                <p>
                    Swarveda Mahamandir Trust <br />
                    HDFC Bank, Lahurabir Branch, VaranasiSB. <br />
                    A/c No. 10871450000016IFSC <br />
                    Code : HDFC0001087, Branch Code : 001087
                </p>
            </div>
        </div>
    )
}
export function Donate() {
    return (
        <div className="width--column-40 pd--20 boxShadow boxShadow--bg" style={{minWidth:'400px'}}>
            <h2 className="boxShadow pr--30 pl--30 pt--10 pb--10 cursor-pt"  style={{ width:'fit-content'}}>Donate</h2>
            <p><br/><br/>"Donate today to make a meaningful difference and join us on a transformative journey toward a better world. Your generous support fuels essential programs, brings hope to those in need, and helps build a future rooted in compassion, education, and empowerment. Every contribution directly impacts lives, providing food, shelter, education, and spiritual growth opportunities. Together, we can create a community where everyone has the chance to thrive and live with dignity. Become a part of our mission, and let’s build a legacy of kindness and change."</p>
        </div>
    )
}