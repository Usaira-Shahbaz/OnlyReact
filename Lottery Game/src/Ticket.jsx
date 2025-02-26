import TicketNum from './TicketNum'
import "./Ticket.css"

export default function Ticket({arr}){
    return(
        <div className='Ticket'>
            <p>Ticket</p>
            {
                arr.map((value,idx)=>{
                    return <TicketNum num={value} key={idx}/>
                })
            }
        </div>
    )
}