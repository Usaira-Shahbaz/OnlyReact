import { useState } from "react";
import "./Lottery.css";
import { genNum, sumTicket } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n,winCondition}) {
    const [newTicket, setTicket] = useState(genNum(n));

    
    let isWinning = winCondition(newTicket);
   
    const buyTickets = () => {
        setTicket(genNum(n)); // Generate new random numbers
    };

    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket arr={newTicket}/>
            <button onClick={buyTickets}>Generate New Numbers</button>
            <h3>{isWinning ? "Congratulations, You have won the game!" : ""}</h3>
        </div>
    );
}
