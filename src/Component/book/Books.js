"use client";
import { Card } from "./Book_card";
import Book_nav from "./Book_nav";
import { useState } from 'react';

// Mock data for books
const bookData = [
    { id: 1, title: "BOOK 1", type: "type1" },
    { id: 2, title: "BOOK 2", type: "type1" },
    { id: 3, title: "BOOK 3", type: "type1" },
    { id: 4, title: "BOOK 4", type: "type1" },
    { id: 5, title: "BOOK 5", type: "type1" },
    { id: 6, title: "BOOK 6", type: "type1" },
    { id: 7, title: "BOOK 7", type: "type1" },
    { id: 8, title: "BOOK 8", type: "type1" },
    { id: 9, title: "BOOK 9", type: "type1" },
    { id: 10, title: "BOOK 10", type: "type8" },
];



export function Books() {
   
    const [showAll, setShowAll] = useState(false);                      // State to control whether to show all cards or not

    
    const [selectedFilter, setSelectedFilter] = useState("All books");  // State for selected filter (default is 'All books')

    
    const filteredBooks = selectedFilter === "All books"                 // Filter books based on the selected filter type
        ? bookData
        : bookData.filter(book => book.type === selectedFilter);

    
    const initialCardsToShow = 8;                                       // Set the initial number of cards to show before "Read More" is clicked

    // Handle toggling between "Read More" and "Read Less"
    const handleToggle = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="container container--responsive width width--column-90" >
           
            <Book_nav setSelectedFilter={setSelectedFilter} />

           
            <div className="flex flex--gap-3 flex--wrap flex--justify-content-center mt--50" >
                
                {filteredBooks.slice(0, showAll ? filteredBooks.length : initialCardsToShow).map(book => (
                    <Card key={book.id} book={book} />
                ))}
            </div>

            {/* Read More/Read Less button */}
            {filteredBooks.length > initialCardsToShow && (
                <button className="flex mt--30 mb--30" style={{ marginLeft: 'auto', marginRight: 'auto' }} onClick={handleToggle}>
                    {showAll ? 'Read Less' : 'Read More'}
                </button>
            )}
        </div>
    );
}

export default Books;
