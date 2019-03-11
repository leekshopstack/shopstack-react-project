import React, { Component } from 'react';
import NavData from '../../data/nav.json';

import { Route, Link } from "react-router-dom";

const menus = NavData;

//Custom link
const MenuLink = ({
    label,
    path,
    activeOnlyWhenExact
}) => {
    return (
        <Route 
            path={path}
            exact={activeOnlyWhenExact}
            children={ ({ match }) => {
                var active = match ? 'active' : '';

                return (
                    <li className={`nav-item ${active}`}>
                        <Link  to={path} className="nav-link">{label}</Link>
                    </li>
                );
            }}
        />
    );
}

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Leek's</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        { this.showMenus(menus) }
                    </ul>
                </div>
            </nav>
        );
    }

    showMenus = (menus) => {
        var result = null;

        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        key={index} 
                        label={menu.label} 
                        path={menu.path} 
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }

        return result;
    }
}

export default Nav;
