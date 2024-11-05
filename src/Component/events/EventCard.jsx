// EventCard.js

import Image from "next/image";
import event1 from '../../../public/images/event1.png';

export default function EventCard({ handleToggleDetails }) {
    return (
        <div className="flex flex--wrap flex--justify-content-center mt--40">
            <div className="flex">
                <div>
                    <Image width={400} height={300} src={event1} />
                    <h3 className="font--center font--underline">Spiritual Retreats and Bhajan Satsanghs</h3>
                    <p className="font--center"> Sat, 11:00 am – 02:00 pm</p>
                </div>

                <div
                    className="pt--10 pl--40 color--white bg--black flex--align-self-start"
                    style={{
                        maxWidth: '120px',
                        minWidth: '120px',
                        height: '120px',
                        margin: '-25px 0 0 -80px',
                    }}
                >
                    <h2 style={{ fontSize: '30px' }}>24 Dec- 2023</h2>
                </div>
            </div>
            <button
                className="flex--align-self-center mt--10 bg--success"
                style={{ height: '50px', borderRadius: '0px' }}
                onClick={handleToggleDetails}
            >
                Event Details
            </button>
        </div>
    );
}
