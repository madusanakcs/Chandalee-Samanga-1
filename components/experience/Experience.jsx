/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    // State 1: Job Application Specialist (Jan 2025 - Present)
    // State 2: Junior Executive (Aug 2024 – Jan 2025)
    const [toggleState, setToggleState] = useState(0); 

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="section experience section" id="experience">
            <h2 className="section__title">Experience <span className='emoji'>💼</span></h2>
            <span className="section__subtitle">What I work as</span>

            <div className="exp__container container grid">

                {/* ============= 1. Job Application Specialist (Jan 2025 – Present) ============= */}
                <div className="exp__content">
                    <div>
                        <i className="uil uil-chart-line exp__icon"></i> {/* Changed icon to data/chart related */}
                        <h3 className="exp__title">Job Application <br /> Specialist</h3>
                    </div>

                    <div>
                        <span className="exp__comp">The Job Helpers (Remote)</span>
                    </div>

                    <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                    <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                        <div className="exp__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                            <h3 className="exp__modal-title">Job Application Specialist <br /> Jan'25 - Present</h3>
                            <p className="exp__modal-description">
                                Supported recruitment and consulting operations by leveraging data and strategy to optimize client job applications and increase success rates.
                            </p>

                            <ul className="exp__modal-experiences grid">

                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Optimized client job applications through **data-informed outreach processes** and tailored resume strategies.</p>
                                </li>

                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Utilized AI-based tools and personalized consulting to significantly **increase interview success rates**.</p>
                                </li>

                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Managed targeted outreach campaigns to attract qualified international candidates and enhance lead quality.</p>
                                </li>

                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Assisted in coordinating applicant communications, maintaining **data accuracy**, and leveraging digital tools.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ============= 2. Junior Executive (Aug 2024 – Jan 2025) ============= */}
                <div className="exp__content">
                    <div>
                        <i className="uil uil-processor exp__icon"></i> {/* Another data/process related icon */}
                        <h3 className="exp__title">Junior <br /> Executive</h3>
                    </div>

                    <div>
                        <span className="exp__comp">The Job Helpers (Remote)</span>
                    </div>

                    <span className="exp__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                    <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                        <div className="exp__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                            <h3 className="exp__modal-title">Junior Executive <br /> Aug'24 - Jan'25</h3>
                            <p className="exp__modal-description">
                                Focused on optimizing internal workflow efficiency and supporting overall company operations through analysis and project management.
                            </p>

                            <ul className="exp__modal-experiences grid">

                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Performed **data collection, analysis**, and **project management** to support company operations.</p>
                                </li>

                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Applied **critical thinking** and **problem-solving skills** to enhance workflow efficiency.</p>
                                </li>

                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Contributed to client engagement strategies by providing **data-backed recommendations**.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience;