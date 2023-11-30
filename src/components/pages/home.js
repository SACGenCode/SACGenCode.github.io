import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState({
        loading: true
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/sap-custom-widget/repos');
                var filteredData = response.data.filter(repo => repo.name !== "sap-custom-widget.github.io");
                setRepos(filteredData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <React.Fragment>
            <section class="hero is-bg-sap ">
                <div class="hero-body">
                    <div className="container">
                        <p class="title">
                            SAC Gen-Code
                        </p>
                        <p class="subtitle">
                            Your Open-Source SAP Analytics Cloud JavaScript Code Generator
                        </p>
                        <Link to="/tools">
                            <a class="button is-primary is-light" href="#getstarted">Get Started</a>
                        </Link>
                    </div>
                </div>
            </section>
            <div className='container'>
                <div class="columns mt-2">
                    <div class="column is-one-third">
                        <div class="box is-danger">
                            <p class="title is-4"><i class="fas fa-code has-text-link"></i> Code Generation</p>
                            <p>Effortlessly generate JavaScript code for SAP Analytics Cloud Analytic Applications.</p>
                        </div>
                    </div>

                    <div class="column is-one-third">
                        <div class="box is-warning">
                            <p class="title is-4"><i class="fas fa-cogs has-text-warning"></i> User-Friendly Interface</p>
                            <p>Intuitive and easy-to-use tools suitable for developers of all levels.</p>
                        </div>
                    </div>

                    <div class="column is-one-third">
                        <div class="box">
                            <p class="title is-4"><i class="fas fa-puzzle-piece has-text-success"></i> Comprehensive Features</p>
                            <p>Access a range of features to enhance your Analytic Application development.</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <h1 className="title is-4"># Try our Free Custom-Widgets</h1>
                <div className="columns is-multiline">

                    {loading &&
                        <progress class="progress is-small is-primary" max="100"></progress>
                    }
                    {repos.length > 0 ? (
                        repos.map((repo, index) => (
                            <div key={index} className="column is-4">
                                <a target='_blank' href={repo.html_url} rel="noreferrer">
                                    <div className="box">
                                        <div className="columns" style={{ height: "150px" }}>
                                            <div className="column is-3 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                                                <span className="icon is-large">
                                                    <img src={`https://raw.githubusercontent.com/${repo.full_name}/main/icon.png`} alt={repo.full_name} aria-hidden />
                                                </span>
                                            </div>
                                            <div className="column is-9">
                                                <p className="subtitle is-5 has-text-weight-bold">{repo.name}</p>
                                                <p>{repo.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    ) : (<></>)}
                </div>
            </div>
            <footer className="mt-4 footer has-background-dark">

                <div className="columns">
                    {/* Left side */}
                    <div className="column is-half">
                        <p className='has-text-white'>© SAC Gen-Code {(new Date().getFullYear())}</p>
                        <p className='has-text-white'>Made in India ❤️</p>
                        <p className='has-text-white'>Developed by <Link to="/about"><u className='has-text-white'>Rohit Chouhan</u></Link></p>
                        <a href="//www.dmca.com/Protection/Status.aspx?ID=9b2a5aa2-bf7e-4f79-bf54-fea772a6a8ef" title="DMCA.com Protection Status" class="dmca-badge"> <img src="https://images.dmca.com/Badges/dmca_protected_sml_120j.png?ID=9b2a5aa2-bf7e-4f79-bf54-fea772a6a8ef" alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
                    </div>

                    {/* Right side */}
                    <div className="column is-half has-text-right">
                        <ul>
                            <li><Link to="/about"><span className='has-text-white'>About Us</span></Link></li>
                            <li><Link to="/contact-us"><span className='has-text-white'>Contact Us</span></Link></li>
                            <li><Link to="/privacy-policy"><span className='has-text-white'>Privacy Policy</span></Link></li>
                            <li><Link to="/terms-and-condition"><span className='has-text-white'>Terms of Service</span></Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Home;