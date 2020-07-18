import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Navbar.css'

const PAGES = ["Home", "Education", "Experience", "Projects", "Connect"]

class NavbarComponent extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        let pages = PAGES.map(page => <Link href="#" to={"/" + page}>{page}</Link>)
    return (
        <div className="navbar-container">
            {pages}
        </div>
    )
    }
}

export default NavbarComponent;