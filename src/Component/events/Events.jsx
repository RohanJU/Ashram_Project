"use client"
// Events.js 

import { useState } from 'react';
import EventCard from "./EventCard";
import EventDetails from "./EventsDetails";

export default function Events() {
    const [showDetails, setShowDetails] = useState(false);

    // Function to toggle between EventCard and EventDetails
    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <>
            <EventsHead />
            {showDetails ? (
                <EventDetails handleToggleDetails={handleToggleDetails} />
            ) : (
                <>
                    {/* You can add multiple EventCard components like this */}
                    <EventCard handleToggleDetails={handleToggleDetails} />
                    <EventCard  handleToggleDetails={handleToggleDetails} />
                </>
            )}
        </>
    );
}

export function EventsHead() {
    return (
        <div className="bg--linearG container--full" style={{ height: '400px' }}>
            <div className="block--auto width--column-60">
                <h1 className="font--center color--black pd--40">Events</h1>
                <p className="color--error font--center">
                    Check out this page for more updates on weekly, monthly, and yearly events happening at Ashrama
                </p>
            </div>
        </div>
    );
}
