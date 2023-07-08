import React from 'react';
import './myProjects.css';

const MyProjects = () => {
    return (
        <div class="projects" id="projects">
            <div class="max-width">
                <h2 class="title">My Projects</h2>
                <div class="carousel owl-carousel">
                    {projects.map(({ cardTitle, category, date, toolUsed, description }) => (
                        <div class="card" key={cardTitle}>
                            <div class="box">
                                <img src="images/profile-2.jpg" alt="" />
                                <div class="text"><h4>{cardTitle}</h4></div>
                                <p>{category}</p>
                                <p>{date}</p>
                                <p>{toolUsed}</p>
                                <p>{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const projects = [
    { cardTitle: "Finding Donars", category: "Major Project", date: "01-03-2021 to 06-03-2021", toolUsed:"ML supervised learning algorithms", description:"Tested out several supervised algorithms to accurately model individuals income using data collected from the 1994 U.S. Census." },
    { cardTitle: "Fashion MNIST", category: "Minor Project", date: "10-3-2021 to 17-3-2021", toolUsed:"Deep learning using Pytorch", description:"Developed a robust test harness for estimating the performance of the model and load it to make predictions on new data." },
    { cardTitle: "Image Classification", category: "Minor Project", date: "20-3-2021 to 27-3-2021", toolUsed:"Neural Networks using Pytorch", description:"Based on the given dataset, after implementing algorithms we built a model that predicts the category of an animal: dog or cat?" },
    // { cardTitle: "Carcinoma Detection", category: "Major Project", date: "02-10-2020 to 08-10-2020", toolUsed:"Data Science", description:"Based on the given dataset of X-ray images, implemented algorithms and built a model that detects the cancer tumour at a early stage." },
    // { cardTitle: "Fire Fighting Robot", category: "Major Project", date: "05-04-2019 to 01-05-2019", toolUsed:"Aurdino uno, sensors", description:"Designed a Fire Fighting Robot using ARDUINO UNO which is capable of detecting and extinguishing flames without any manual attention." },
  ];

export default MyProjects;