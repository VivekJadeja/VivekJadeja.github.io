import React from 'react';

import Hero from '../components/Hero';
import Content from '../pages/Content';
import { Link } from 'react-router-dom'

function AboutPage({ title }) {
    return (
        <div>
            <Hero title={title} />
            <Content>
                <p className="display-4 font-weight-light">A lot, actually!</p>

                <p>Hello, my name is Vivek.
                I am a senior Computer Science student at the University of Houston.
                My primary area of interest is software engineering.
            </p>

                <p>I am currently seeking a full-time software engineering
                position to begin my career.
                I have experience with a multitude of programming
                languages including C++, Python, JavaScript, HTML, CSS, and R.
                My passion for learning has led me to gain experience with
                ReactJS, ExpressJS, and NodeJS.
                I am also experienced with RDBMS's such as MySQL and SQLite.
            </p>

            <p>
                    In my off-time, I enjoy <a href="https://github.com/vivekjadeja" target="_blank" rel="noopnener noreferrer">creating new projects</a>, going on road-trips, and <Link to="/gallery">baking</Link>.
            </p>

            </Content>
        </div>
    );
}

export default AboutPage;