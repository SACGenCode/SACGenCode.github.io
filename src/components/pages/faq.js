import React from 'react';
import { useTitle } from '../../utils/utils';
const FAQ = () => {
    useTitle("FAQ");
    const faqList = [
        {
            title: "What is SAC Gen-Code?",
            answer: "SAC Gen-Code is an open-source application designed to generate JavaScript code for SAP Analytics Cloud Apps and Stories."
        },
        {
            title: "Is SAC Gen-Code free?",
            answer: "Yes, SAC Gen-Code is a completely free-to-use application. There are no hidden login requirements or costs associated with it."
        },
        {
            title: "Is SAC Gen-Code available as a desktop application?",
            answer: "No, SAC Gen-Code is currently available as a web application. However, we plan to release a desktop version in the future."
        },
        {
            title: "Can I request a new feature?",
            answer: "Certainly! We encourage users to contact us with any ideas or requests for new features. Your feedback is valuable to us."
        },
        {
            title: "In which framework is SAC Gen-Code developed?",
            answer: "SAC Gen-Code is developed using the React.js framework for the frontend and Bulma for styling."
        },
        {
            title: "Is SAC Gen-Code collecting any user data?",
            answer: "No, SAC Gen-Code does not collect any type of user data. Your privacy is important to us."
        },
        {
            title: "Who developed the SAC Gen-Code application?",
            answer: "SAC Gen-Code is developed by Rohit Chouhan, who is currently at Deloitte."
        },
        {
            title: "Is SAC Gen-Code available globally?",
            answer: "Yes, SAC Gen-Code is accessible from anywhere in the world. Feel free to use it wherever you are."
        },
        {
            title: "How can I contribute to SAC Gen-Code's development?",
            answer: "We welcome contributions! If you're interested in contributing to SAC Gen-Code, please contact us any time."
        },
        {
            title: "What browsers are supported by SAC Gen-Code?",
            answer: "SAC Gen-Code is designed to work on major web browsers such as Chrome, Firefox, Safari, and Edge. Ensure you are using an up-to-date browser for the best experience."
        }
    ];

    return (
        <React.Fragment>
            <section className="section">
                <div className="container">
                    <div className='columns is-multiline'>
                        {faqList.length > 0 ? (
                            faqList.map((item, index) => (
                                <div key={index} className="column is-6">
                                    <article class="panel is-success">
                                        <p class="panel-heading">
                                            {item.title}
                                        </p>
                                        <div className='block p-4'>
                                            <p>{item.answer}</p>
                                        </div>
                                    </article>
                                </div>
                            ))
                        ) : (
                            <p className='ml-3'>No tools found</p>
                        )}
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}

export default FAQ;