/* eslint-disable no-unused-vars */
import React from 'react';
import "./work.css";
import Works from './Works';

const Work = () => {
  return (
    <section className="work section" id='portfolio'>
        <h1 className="section__title">
  Projects <span className="emoji">🧑🏻‍💻</span>
</h1>

        <span className="section__subtitle">Most Recent Works</span>

        <Works />
    </section>
  )
}

export default Work