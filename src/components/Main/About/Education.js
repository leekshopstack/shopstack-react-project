import React, { Component } from 'react';
import AboutData from '../../../data/about.json';

class Education extends Component {
  render() {
    const EducationData = AboutData['education'];
    return (
        <div className="education">
            <h3><span>Trình Độ Học Vấn</span></h3>
            <table>
                <tbody>
                    {EducationData.map((Education, index) => {
                        return (
                            <tr key={index}>
                                <th>{Education.time}</th>
                                <td>
                                    <span>{Education.school}</span>
                                    <p>{Education.detail}</p>
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

export default Education;
