/* eslint-disable no-unused-vars */
import React from 'react';
import './qualification.css';

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification <span className='emoji'>🧑🏻‍🎓</span></h2>
        <span className="section__subtitle">My Personal Journey </span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content">
                    {/* B.Sc in Mathematical Methods and Informatics */}
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.Sc. in Mathematical Methods and Informatics 📊</h3>
                            <span className="qualification__subtitle">Moscow States Pedagogical University, Russia</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Sep 2022 - Jul 2025
                            </div>
                        </div>

                        <div>
                            <span className="qualification__round"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* B.Sc in Applied Data Analytics (External) */}
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__round"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">B.Sc. in Applied Data Analytics (External) 📈</h3>
                            <span className="qualification__subtitle">University of Colombo, Sri Lanka</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Jan 2025 - Present
                            </div>
                        </div>
                    </div>

                    {/* Other Educational Qualifications - Diploma in English */}
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Diploma in English 🗣️</h3>
                            <span className="qualification__subtitle">British Council - Colombo 04</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Completed
                            </div>
                        </div>

                        <div>
                            <span className="qualification__round"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* Secondary Education - Sri Dharmloka Central College */}
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__round"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Secondary Education (Physical Science) 🔬</h3>
                            <span className="qualification__subtitle">Sri Dharmloka Central College - Kelaniya</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Jan 2007 - Dec 2020
                            </div>
                        </div>
                    </div>
                    
                    {/* Additional Qualifications (Optional, but included for completeness) */}
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Information Technology - NVQ Level 3 💻</h3>
                            <span className="qualification__subtitle">Nenasala ICT Center - Gampaha</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Completed
                            </div>
                        </div>

                        <div>
                            <span className="qualification__round"></span>
                            {/* Removed line for the last item in a section */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification