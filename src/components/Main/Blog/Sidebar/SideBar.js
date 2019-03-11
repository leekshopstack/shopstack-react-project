import React, { Component } from 'react';
import Search from './Search';
import Recent from './Recent';
import Widgets from './Widgets';
import './Sidebar.css';

class SideBar extends Component {
  render() {
    return (
        <aside>
            <Search />
            <Recent />
            <Widgets />
        </aside>
    );
  }
}

export default SideBar;
