import React from 'react';
import './myInterests.css';

const MyInterests = () => {
    return (
        <div class="intrests" id="intrests">
        <div class="max-width">
            <h2 class="title">My Interests</h2>
            <div class="intrest-content">
                <div class="card">
                    <div class="box">
                        <div class="text"><h3>Quora</h3></div>
                        <p>This platform exposes me to know about people across the world, their thoughts.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <div class="text"><h3>MetroPlus</h3></div>
                        <p>Day to day analysis on metroplus keeps me updated with the current trend on sports, music, films etc.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <div class="text"><h3>Fun time</h3></div>
                        <p>I spend most of my free time playing Badminton, Video games and watching fun webseries.</p>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
}

export default MyInterests;