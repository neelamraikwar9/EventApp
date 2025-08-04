import { useEffect, useState } from 'react'
import useFetch from './useFetch';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarFilter from './components/NavbarFilter';
import { Link } from 'react-router-dom';
import DetailPage from './DetailPage';
// import Navbar from './components/Navbar';

function App() {
  const {data, loading, error} =  useFetch("https://event-data-murex.vercel.app/meets", [])
  console.log("data:", data)

  const [eventFilter, setEventFilter] = useState("Both");
  const [search, setSearch] = useState("");
  const [meetData, setMeetData] = useState(data)
  console.log(data)

  const filteredEvents = eventFilter === "Both" ? data : data?.filter((item) => item.eventMode === eventFilter);
  console.log(filteredEvents)
  
  useEffect(() => {
    if(data){
      console.log(data)
      setMeetData(filteredEvents)
  console.log(filteredEvents)
    }
  },[data, eventFilter])
  
  useEffect(()=> {
    searchOperation(search)
  }, [data])

   const searchOperation = (value) => {
    setSearch(value)

    if(value.trim() !== ''){
      const searchFilter = filteredEvents.filter((item) => item.eventTitle.toLowerCase().includes(search.toLowerCase()));
      console.log(searchFilter,'Search Filter')
      setMeetData(searchFilter)
    }

    else{
      setMeetData(data)
    }
   }

  // const [searchTerm, setSearchTerm] = useState("");
  // const [eventFilter, setEventFilter] = useState("Both")
  // const [newdata, setNewData] = useState(data)
 
//   console.log(  )
//   const filteredEvents = eventFilter === "Both" ? data : data.filter((meet) => meet.eventMode === eventFilter)

//   const handleSet = (event) => {
//     setEventFilter(event.target.value)
//     // setnewdata(filteredEvents)
//   }

//   useEffect(()=>{
//     if(data){
//       setNewData(filteredEvents)
//     }
//   },[data, eventFilter])


//  useEffect(()=>{
//       search(searchTerm)
//   },[data])

// console.log(data)
//   const search = (value) => {
//     console.log(value,'Value')
//     setSearchTerm(value)

    
  
//     if (value.trim() !== ''){
//     console.log("in if search term...", searchTerm)
//       const filterData =  data.filter((item) => item.eventTitle.toLowerCase().includes(searchTerm.toLowerCase()));
//       console.log(filterData,'ejrieowefiweifowefi', newdata, data)
//       setNewData(filterData)
//       console.log(data)
//     }else{
//     console.log("in else search term...", searchTerm)
//       setNewData(data)
//     }
//   }

//   return (
//     <div className='container'>
//     <Navbar searchTerm={searchTerm}  search={search} />
//     <main>
//       <div>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : data?.length > 0 ? ( 
//           <div>
//                 <div className="input-group">
//                 <h1>Meetup Events</h1>
//                 <div className="ms-5 ps-5"> 
//                 <label htmlFor='eventFil'>Select Event Type
//                 <select id="eventFil" value={eventFilter} onChange={(event) => {handleSet(event)}}>
//                     <option value="Both">Both</option>
//                     <option value="Online">Online</option>
//                     <option value="Offline">Offline</option>
//                 </select>
//                 </label>
//                 </div>
//                 </div>
//                 <br/>
//                 <br/>
//         <div className="row">
//           {newdata?.map((meet) => 
//                  <div key={meet._id} className="col-md-4">
//                   <div className="card mb-5">    
//                   <div className="container">
//                   {/* <p><a href={even.detailsPage} {even.detailTitle}> */}
//                   <img  src={meet.eventImage} className="img-fluid" alt={meet.eventTitle}/>
//                   {/* </a></p> */}
//                   <p>Day/Date:- {meet.eventDay}, {meet.eventDate}</p>
//                   <p>Time:- {meet.eventBeginingTime} to {meet.eventEndingTime}</p>
//                   <h5>{meet.eventTitle}</h5>
//                  </div>
//                  </div>
//                  </div>
//           )}
//           </div>
//           </div>
//            ): (<p>No Events</p>)}
//          </div>
//     </main>
//     </div>
//   )


return (
    <div className='container'>
    <NavbarFilter search={search} searchOperation={searchOperation} />
    <main>
      <div>
            {loading ? (
                <p>Loading...</p>
            ) : data?.length > 0 ? ( 
          <div>
                <div className="input-group">
                <h1>Meetup Events</h1>
                <div className="ms-5 ps-5"> 
                <label htmlFor='eventFil'>Select Event Type
                <select id="eventFil" value={eventFilter} onChange={(event) => setEventFilter(event.target.value)}>
                    <option value="Both">Both</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                </select>
                </label>
                </div>
                </div>
                <br/>
                <br/>
        <div className="row">

          
          {meetData?.map((meet) => 
                 <div key={meet._id} className="col-md-4">
                  <div className="card mb-5">    
                  <div className="container">
                   {/* <p><Link to={`/meet/${meet._id}`} > */}
                   <p><Link to={`/meet/${meet._id}`} >

                  <img  src={meet.eventImage} className="img-fluid" alt={meet.eventTitle}/>
                  </Link></p>
                  <p>Day/Date:- {meet.eventDay}, {meet.eventDate}</p>
                  <p>Time:- {meet.eventBeginingTime} to {meet.eventEndingTime}</p>
                  <h5>{meet.eventTitle}</h5>
                 </div>
                 </div>
                 </div>
          )}
          </div>
          </div>
           ): (<p>No Events</p>)}
         </div>
    </main>
    </div>
  )

}

export default App
