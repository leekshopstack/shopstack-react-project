import React, { Component } from 'react';
import AboutData from '../../../data/about.json';

class Experience extends Component {
    render() {
        const ExperienceData = AboutData['experience'];
        return (
            <div className="education">
                <h3><span>Kinh Nghiệm Làm Việc</span></h3>
                <table>
                    <tbody>
                        {ExperienceData.map((Experience, index) => {
                            return (
                                <tr key={index}>
                                    <th>{Experience.time}</th>
                                    <td>
                                        <span>{Experience.company}</span>
                                        <p>{Experience.detail}</p>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Experience;
