import React, { Component } from 'react';
import AboutData from '../../../data/about.json';

class Hobby extends Component {
    render() {
        const HobbyData = AboutData['hobby'];
        return (
            <div className="hobby">
                <h3><span>Sở Thích</span></h3>
                <ul>
                    {HobbyData.map((Hobby, index) => {
                        return (
                            <li key={index}>{Hobby.item}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Hobby;
