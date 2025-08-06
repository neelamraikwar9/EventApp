import { NavLink } from "react-router-dom";

const NavbarFilter = ({search, searchOperation}) => {

     const handleSearch = (event) => {
     searchOperation(event.target.value);
     }

    return (
        <>
    <header>
    <nav className="navbar">
        {/* <div className="container-fluid"> */}
            <NavLink to="/" className="navbar-brand">MEETUP</NavLink>
              <input className="form-control me-2"  placeholder="Search"  onChange={handleSearch} value={search}/>
        {/* </div> */}
    </nav>
    </header>
    <hr/>
    </>
    )
}

export default NavbarFilter