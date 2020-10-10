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
                languages including Python, C++, JavaScript, HTML, CSS, and R.
                My passion for learning has led me to gain familiarity with
                technologies such as ReactJS, ExpressJS, and NodeJS.
                I am also experienced with RDBMS's like MySQL and SQLite.
            </p>

            <p>
                    In my off-time, I enjoy <a href="https://github.com/vivekjadeja" target="_blank" rel="noopnener noreferrer">creating new projects</a>, <a> </a>
                    <a href="https://www.youtube.com/channel/UCslLOQM6syRqErSQ4N2QXeA" target="_blank" rel="noopnener noreferrer">giving advice to those who are new to computer science</a>
                    , going on road-trips, and <Link to="/gallery">cooking/baking</Link>.
            </p>

            </Content>
        </div>
    );
}

export default AboutPage;