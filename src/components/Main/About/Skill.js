import React, { Component } from 'react';
import AboutData from '../../../data/about.json';

class Skill extends Component {
    render() {
        const SkillData = AboutData['skill'];
        return (
            <div className="skill">
                <h3><span>Kỹ Năng</span></h3>
                <ul>
                    {SkillData.map((Skill, index) => {
                        return (
                            <li key={index}>
                                <h4>{Skill.title}</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{"width":Skill.percent+'%'}} aria-valuenow={Skill.percent} aria-valuemin="0" aria-valuemax="100">{Skill.percent}%</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Skill;
