import React, { useState, useEffect } from 'react';
import rohitChouhanImage from '../../assets/rohit-chouhan.jpg';
import { useTitle } from '../../utils/utils';
const About = () => {
    useTitle("About");
    const [email, setEmail] = useState('');

    useEffect(() => {
        // This will set the initial email when the component mounts
        setEmail('itsr************@gmail.com');
    }, []);

    const emailAction = () => {
        setEmail('itsrohitofficial@gmail.com');
    }

    return (
        <React.Fragment>
            <section className="section">
                <div className="container">
                    <h1 class="title is-size-4">About Tools</h1>
                    <div class="control">
                        <div class="tags has-addons">
                            <span class="tag is-dark">Current Version</span>
                            <span class="tag is-success">0.1.1</span>
                        </div>
                    </div>
                    <hr></hr>
                    <p>SAC Gen-Code is a powerful open-source tool designed to streamline and simplify the process of generating JavaScript code for SAP Analytics Cloud's Analytic Applications. Whether you're a seasoned developer or new to Analytic Application development, SAC Gen-Code provides a suite of user-friendly tools to effortlessly create and design code tailored to your specific requirements.</p>

                    <p class="mt-2">With SAC Gen-Code, you have access to a variety of tools that facilitate the efficient development of Analytic Applications. The intuitive interface ensures a seamless user experience, making it easy for both beginners and experienced developers to navigate and utilize the application effectively.</p>

                    <p class="mt-2">Empower your Analytic Application development with SAC Gen-Code's comprehensive features, all while enjoying the benefits of an open-source platform. Enhance your productivity and bring your SAP Analytics Cloud projects to life with this user-friendly and efficient tool.</p>

                    <p class="mt-2"><i>SAC Gen-Code is developed in ReactJs, and Bulma CSS Framework</i></p>
                    <hr></hr>
                    <div class="columns is-vcentered">
                        <div class="column is-2">
                            <figure class="image">
                                <img class="is-rounded" height="200" width="200" src={rohitChouhanImage} alt="Rohit Chouhan" />
                            </figure>
                        </div>
                        <div class="column is-10">
                            <p>Developer</p>
                            <p class="title is-size-3">Rohit Chouhan</p>
                            <p>
                                This tool is design and developed by Rohit Chouhan, He is currently working in Deloitte USI.
                            </p>
                            <div class="is-flex mt-4 is-justify-content-space-start">
                                <div class="block mr-4">
                                    <a target="_blank" href="https://linkedin.com/in/itsrohitchouhan" rel="noreferrer">
                                        <button class="button is-rounded is-link">
                                            <span class="icon is-large">
                                                <i class="fab fa-linkedin"></i>
                                            </span>
                                            <span>Connect with me</span>
                                        </button>
                                    </a>
                                </div>
                                <div class="block mr-4">
                                    <a target="_blank" href="https://github.com/rohit-chouhan" rel="noreferrer">
                                        <button class="button is-rounded">
                                            <span class="icon is-large">
                                                <i class="fab fa-github"></i>
                                            </span>
                                            <span>My Portfolio</span>
                                        </button>
                                    </a>
                                </div>
                                <div class="block">
                                    <a target="_blank" href="https://people.sap.com/rohitchouhan" rel="noreferrer">
                                        <button class="button is-rounded">
                                            <span class="icon is-large">
                                                <i class="fa fa-newspaper"></i>
                                            </span>
                                            <span>My SAP Blogs</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <br />
                            <p><i>Contact me regarding any idea/new feature or any inquiry to my email address, <span class="has-text-dark">(click on email to visible)</span> </i> <a href="mailto:itsrohitofficial@gmail.com" onClick={emailAction}>{email}</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}

export default About;