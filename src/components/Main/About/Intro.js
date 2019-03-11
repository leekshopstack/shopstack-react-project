import React, { Component } from 'react';
import avatar from './avatar.png';
import AboutData from '../../../data/about.json';

class Intro extends Component {
    render() {
        const Intro = AboutData['intro'];
        return (
            <div className="intro-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="avatar-wrap col-3">
                            <img src={avatar} className="leek-avatar" alt="avatar" />
                            <div className="name">
                                <span className="title">Full Name</span>
                                <h1>{Intro.name}</h1>
                            </div>
                        </div>
                        <div className="intro col-9">
                            <div>
                                <span className="title">Giới Thiệu</span>
                                <p>{Intro.content}</p>
                            </div>
                            <div className="contact">
                                <span className="title">Liên Hệ</span>
                                <ul>
                                    <li>Phone: <span>{Intro.phone}</span></li>
                                    <li>Address: <span>{Intro.address}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;
