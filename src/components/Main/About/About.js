import React, { Component } from 'react';
import Intro from './Intro';
import Education from './Education';
import Experience from './Experience';
import Skill from './Skill';
import Hobby from './Hobby';
import './About.css';

class Main extends Component {
  render() {
    return (
        <div className="cv-content">
            <div className="content__intro">
                <Intro />
            </div>
            <div className="content-top">
                <div className="container">
                    <div className="row">
                        <div className="education-wrap col-6">
                            <Education />
                        </div>
                        <div className="experience-wrap col-6">
                            <Experience />
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-bottom">
                <div className="container">
                    <div className="row">
                        <div className="skill-wrap col-7">
                            <Skill />
                        </div>
                        <div className="hobby-wrap col-5">
                            <Hobby />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Main;
