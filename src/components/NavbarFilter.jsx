
const NavbarFilter = ({search, searchOperation}) => {

     const handleSearch = (event) => {
     searchOperation(event.target.value);

     }

    return (
        <>
    <header className="container">
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand">MEETUP</a>
              <input className="form-control me-2"  placeholder="Search"  onChange={handleSearch} value={search}/>
        </div>
    </nav>
    </header>
    <hr/>

    </>
    )

}

export default NavbarFilter