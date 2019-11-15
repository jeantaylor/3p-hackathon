import React from 'react';
import tronald from "../assets/Images/tronalddump_850x850.png"; 

export default function TheTronald() {
    const quote = (quote) => {
        if (quote) {
            return (
                <div className="tronald__quote">
                    Hewwo
                </div>
            )
        }
        return true;
    })


    return (
        <section className="tronald">
            <div className="tronald__dump">
                {quote}
                <img className="tronald__img" src={tronald} />
            </div>
        </section>
    )
}
