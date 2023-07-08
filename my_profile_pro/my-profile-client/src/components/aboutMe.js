import React from 'react';
import image from '../images/shirisha-pic.jpg';
import './aboutMe.css';
import Button from './button';

const Aboutme = () => {
    return (
        <div class="about" id="about">
            <div class="max-width">
                <h2  className="title">About me</h2>
                <div class="about-content">
                    <div class="column left">
                        <img src={image} height={100} width={100} alt="a picture of about me"/>
                    </div>
                    <div class="column right">
                        <div class="text">I'm Shirisha and I'm a <span>Techie</span></div>
                        <h4>Career Objective</h4>
                        <p>I strive to create elegant solutions that surprise and delight users, while keeping complex technical dependencies in mind for implementation, scalability and developer sanity.</p>

                        <a href="Harshitha's Resume.pdf">Resume</a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;