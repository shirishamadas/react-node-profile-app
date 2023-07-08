import React from 'react';
import './mySkills.css';

const MySkills = () => {
    return (
        <div class="skills" id="skills">
            <div class="max-width">
                <h2 class="title">My skills</h2>
                <div class="skills-content">
                    <div class="column left">
                        <h2>Education</h2>

                        <table>
                            <tr>
                                <th>Degree</th>
                                <th>University</th>
                                <th>Score</th>
                            </tr>
                            <tr>
                                <td>B.Tech (CSE)</td>
                                <td>Swamy Vivekananda Institute of Technology, HYD</td>
                                <td>64.13%</td>
                            </tr>
                            <tr>
                                <td>Inter (MPC)</td>
                                <td>Sri Chaitanya College, HYD </td>
                                <td>90%</td>
                            </tr>
                            <tr>
                                <td>School</td>
                                <td>Siddhartha High School, SRCL </td>
                                <td>8.2CGPA</td>
                            </tr>
                        </table>

                    </div>
                    <div class="column right">
                        <div class="bars">
                            <div class="info">
                                <span>HTML,CSS</span>
                                <span>100%</span>
                            </div>
                            <div class="line html"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>Java Script</span>
                                <span>90%</span>
                            </div>

                            <div class="line css"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>React Js</span>
                                <span>85%</span>
                            </div>
                            <div class="line js"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>Node Js</span>
                                <span>80%</span>
                            </div>
                            <div class="line php"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>Polymer</span>
                                <span>85%</span>
                            </div>
                            <div class="line mysql"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MySkills;