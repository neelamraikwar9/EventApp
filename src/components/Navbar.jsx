
const Navbar = ({searchTerm, search}) => {
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // console.log('jfowiefjwo')
    //     search()

     const handleSearch = (event) => {
        
         search(event.target.value);

     }

    

    return (
        <>
    <header className="container">
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand">MEETUP</a>
             {/* <form className="d-flex" role="search" onSubmit={handleSubmit}> */}
              <input className="form-control me-2"  placeholder="Search"  onChange={handleSearch} value={searchTerm}/>
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
             {/* </form> */}
        </div>
    </nav>
    </header>
    <hr/>

    </>
    )

}

export default Navbar