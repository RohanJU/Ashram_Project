"use client";

export function Book_nav({ setSelectedFilter }) {
    return (
        <nav className=" nav nav-left book_nav">
            <button className="nav-button " onClick={() => setSelectedFilter("All books")}>All books</button>
            <button className="nav-button" onClick={() => setSelectedFilter("type1")}>Type 1</button>
            <button className="nav-button" onClick={() => setSelectedFilter("type2")}>Type 2</button>
            <button className="nav-button" onClick={() => setSelectedFilter("type3")}>Type 3</button>
            <button className="nav-button" onClick={() => setSelectedFilter("type4")}>Type 4</button> 
        </nav>
    );
}

export default Book_nav;
