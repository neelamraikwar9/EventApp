import useFetch from "./useFetch"
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";


const DetailPage = ({}) => {
    const { meetId } = useParams();
console.log(meetId, "meetId")

const {data, loading, error} = useFetch(`https://event-data-murex.vercel.app/meets/getMeet/${meetId}`)
console.log(data)

    return(
        <main className="container py-5">
        <header className="bg-ligh">
            <nav className="navbar navbar-expand-lg">
                <NavLink to="/" className="navbar-brand text-dark"><strong><h1>All Meetup Events</h1></strong></NavLink>
            </nav>
        </header>
            <h2>{data?.eventTitle}</h2>
            <p>Hosted By: <strong>{data?.eventHost}</strong></p>
            <div className="container card col-md-4">  
            <img src={data?.eventImage} className="img-fluid mt-3 mb-3 pe-3" alt={data?.eventTitle} />
{console.log(data?.eventImage)}
            </div>
            
            <br/>
            <h5>Details:</h5>
            <p>{data?.eventDetail}</p>
            <h5>Additional Information:</h5>
            {data?.eventWebsite ? <p><strong>Venue: </strong>{data?.eventWebsite}</p> : null} 
            {data?.eventCity ? <p><strong>City: </strong> {data?.eventCity}</p> : null} 
            {data?.eventAddress ? <p><strong>Address: </strong>{data?.eventAddress}</p> : null} 
            <p><strong>Restriction:</strong> {data?.eventRestriction}</p>
            {data?.eventDressCode ? <p><strong>Dress Code: </strong>{data?.eventDressCode}</p> : null}
            {data?.eventPrice ? <p><strong>Price: </strong>{data?.eventPrice}</p> : null}          
        </main>
    )
}

export default DetailPage