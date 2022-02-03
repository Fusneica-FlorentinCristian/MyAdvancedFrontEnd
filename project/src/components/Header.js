import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={require("../troll-face.png")}
                alt="image"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Login stuff</h4>
        </header>
    )
}