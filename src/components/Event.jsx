import { useState } from 'react'


    const Event = () => {
        const [eventFilter, setEventFilter] = useState("Both")

        const filterEvents = eventFilter === "Both" ? event : event.filter((even) => even.mode === eventFilter)

    return(
     <>
                <main className="container py-3">
                <div className="input-group">
                <h1>Meetup Events</h1>
                <div className="ms-5 ps-5"> 
                {/* ps-5  me-5 */}
                <label htmlFor='eventFil'>Select Event Type
                <select id="eventFil" onChange={(event) => setEventFilter(event.target.value)}>
                    <option value="Both">Both</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                </select>
                </label>
                </div>
                </div>
                <br/>
                <div className="row">
            {filterEvents.map((even) => (
                 <div key={even.id} className="col-md-4">
                  <div className="card mb-5">    
                  <div className="container">
                  {/* <p><a href={even.detailsPage} {even.detailTitle}> */}
                  <img  src={even.img} className="img-fluid" alt={even.title}/>
                  {/* </a></p> */}
                  <p>Day/Date:-{even.day}, {even.date}</p>
                  <p>Time:-{even.beginingTime} to {even.endingTime}</p>
                  <h5>{even.title}</h5>
                 </div>
                 </div>
                 </div>
            ))
            }
            </div>
            </main>
     </>
    )
}


export default Event