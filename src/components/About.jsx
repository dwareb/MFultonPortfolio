import React from 'react';
import Portrait from './Portrait';

import portrait_pic from '../images/portrait.png';
import '../styles/About.css';
import '../styles/Global.css';
import '../styles/Background.css';
import Article from './Article';

const About = () => {
  return (
    <div className="about-frame base">
      <h1 className="header">&gt;Michael Fulton_</h1>
      <Portrait
        className="portrait"
        picture={portrait_pic}
        alt_text="Portrait of Mike Fulton"
        title_text="Mike Fulton"
        size={250}
      />
      <div className="article-area">
        <div className="welcome-article">
          <Article className="article-body" heading="Hello!">
            <p>
              I'm an aspiring Software Engineer, professional issue fixer, and
              jack of all trades.
            </p>
          </Article>
        </div>
        <div className="article-sub-area">
          <div className="column">
            <Article className="article-body" heading="Work Experience">
              <p>For the last 10 years I've worked for Intel here in Oregon.</p>
              <p>
                Starting out I worked in the chip factory as a technician where
                I learned tons of skills running performing maintenance on
                equipment in a cutting edge semiconductor factory.
              </p>
              <p>
                After about 4 years working in the factory I was looking for a
                change of pase, and got a job in the Automation department doing
                technical support for the software that the factory is built on.
                Here I learned how to troubleshoot a vast array of issues on
                software systems as diverse as you might imagine. Databases,
                networking, and custom software that is under constant
                development.
              </p>
              <p>
                In addition to technical skills, I'm a team leader, trainer,
                herder of cats, both fuzzy and human.
              </p>
            </Article>
            <Article className="article-body" heading="Education">
              <p>
                After High School I went to PCC and began work on a CS degree.
                Running out of money, I decided to go into work as a technician.
                Since then I decided to finish up a Bachelor's Degree in
                Computer Science. But here's my relevant credentials:
              </p>
              <h3 style={{ fontWeight: 700 }}>Portland Community College:</h3>
              <p>
                At PCC I earned two associates degrees, one general science, and
                one Oregon Arts Transfer, way back in 2010.
              </p>
              <h3 style={{ fontWeight: 700 }}>Portland State University:</h3>
              <p>
                Bachelor's In Computer Science, in progress. Expect to graduate
                Spring 2022.
              </p>
            </Article>
          </div>
          <div className="column">
            <Article className="article-body" heading="Skills">
              <p>
                My biggest hobby is picking up a new skill, and quickly becoming
                proficient in it. As a result I've dabbled in a wide array of
                things, not all of which are technical skills. Though as a well
                rounded person its important to explore what you like. I've
                picked up skills including but not limited to the following:
              </p>
              <ul>
                <li>
                  Programming: C, C++, Java, JavaScript, Python, WebDev, SQL
                </li>
                <li>Software Troubleshooting</li>
                <li>Training others in Technical tasks</li>
                <li>Group Management</li>
                <li>CAD</li>
                <li>LaTeX</li>
                <li>Micro Controllers</li>
                <li>3D modeling</li>
                <li>Writing Technical Documentation</li>
                <li>Electronics Repair</li>
                <li>Hardware Repair</li>
                <li>Wood Working</li>
                <li>Sculpting</li>
                <li>3D Printing--Filament, Resin</li>
                <li>Basic Graphic Design</li>
                <li>Video Editing</li>
                <li>Miniature Painting</li>
                <li>Knitting</li>
                <li>Cooking</li>
                <li>Dungeon Mastering</li>
              </ul>
            </Article>
            <Article className="article-body" heading="Aspirations">
              <p>
                At this point in my life, my largest aspiration is to finish my
                Computer Science Degree and work towards becoming a professional
                software developer. I'm likely to start working as an Operations
                Engineer in the near future, but I'd like to pursue a Master's
                Degree and get more into the development end of things.
              </p>
            </Article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
