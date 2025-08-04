import useFetch from "./useFetch"
import { useParams } from 'react-router-dom';
import NavbarFilter from "./components/NavbarFilter";

const DetailPage = ({}) => {
    const { meetId } = useParams();
console.log(meetId, "meetId")

const {data, loading, error} = useFetch(`https://event-data-murex.vercel.app/meets/getMeet/${meetId}`)
console.log(data)

    return(
        <main className="container py-5">
            <h1>{data?.eventTitle}</h1>
            <p>Hosted By: <strong>{data?.eventHost}</strong></p>
            <img src={data?.eventImage} className="img-fluid" alt={data?.eventTitle} />
{console.log(data?.eventImage)}
            
            <br/>
            <h5>Details:</h5>
            <p>{data?.eventDetail}</p>
            <h5>Additional Information:</h5>
            {data?.eventWebsite ? <p>Website: {data?.eventWebsite}</p> : null} 
            {data?.eventCity ? <p>City: {data?.eventCity}</p> : null} 
            {data?.eventCity ? <p>Address: {data?.eventAddress}</p> : null} 
            <p>Restriction: {data?.eventRestriction}</p>
            {data?.eventDressCode ? <p>Dress Code: {data?.eventDressCode}</p> : null}
            {data?.eventPrice ? <p>Price: {data?.eventPrice}</p> : null}          
        </main>
    )
}

export default DetailPage