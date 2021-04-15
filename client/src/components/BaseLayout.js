import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Menu />
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export function Menu () {
    return (
        <nav>
        <div className="nav-container">
            <h1 className="logo">Hurst Bookstore</h1>
            <NavLink to="/"><div className="bootstrap-link">Home</div></NavLink>
            <NavLink to="/books"><div className="bootstrap-link">Books</div></NavLink>
            <NavLink to="/add-book"><div className="bootstrap-link">Add Book</div></NavLink>

           
           
        </div>
        </nav>
    )
}

export function Footer() {
    return(
        <div className="footer">
            <p>©Copyright 2021</p>
        </div>
    )
}

