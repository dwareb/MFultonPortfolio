import React from 'react';
import Article from './Article';
import ArticleDark from './ArticleDark';
import '../styles/PreviousWork.css';

const PreviousWork = () => {
  return (
    <div className="prev-work-window main-area">
      <section className="work-area">
        <div className="column">
          <ArticleDark className="article-body" heading="Work Experience">
            <p>For the last 10 years I've worked for Intel here in Oregon.</p>
            <p>
              Starting out I worked in the chip factory as a technician where I
              learned tons of skills running performing maintenance on equipment
              in a cutting edge semiconductor factory. Job duties were varied,
              but included operations, maintenance, troubleshooting, creating
              reports, procedures.
            </p>
            <p>
              After about 4 years working in the factory I was looking for a
              change of pace, and got a job in the Automation department doing
              technical support for the software that the factory is built on.
              Here I learned how to troubleshoot a vast array of issues on
              software systems as diverse as you might imagine. Systems include
              networking, operating systems, and custom software of all
              varieties that is under constant development. In this position I
              am team lead, and have been responsible for personally training my
              entire shift up to being extremely successful. Additionally I've
              driven cultural changes that empower my co-workers to be able to
              more effectively execute on their job via elimination of siloed
              knowledge and skills.
            </p>
            <img
              className="resume-img"
              src={process.env.PUBLIC_URL + '/images/intellogo.png'}
              alt="Intel Corporate Logo"
              text="Intel"
              style={{ width: 200 }}
            />
          </ArticleDark>
          <Article className="article-body" heading="Education">
            <p>
              After High School I went to PCC and began work on a CS degree.
              After completing an associates degree, I decided to go into work as a
              technician. Since then I decided to finish up a Bachelor's Degree
              in Computer Science. Since returning to school in 2020 after about
              a 10 year hiatus, I've maintained straight A's across all my
              classes despite working full time along with the coursework. But
              here's my relevant credentials:
            </p>
            <h3 style={{ fontWeight: 700 }}>Portland Community College:</h3>
            <p>
              At PCC I earned two associates degrees, one general science, and
              one Oregon Arts Transfer, way back in 2010.
            </p>
            <img
              className="resume-img"
              src={process.env.PUBLIC_URL + '/images/psu.png'}
              alt="Portland State University Logo"
              text="Portland State University"
              style={{ width: 300 }}
            />
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
              rounded person it's important to explore what you like. I've picked
              up skills including but not limited to the following:
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
            <img
              className="resume-img"
              src={process.env.PUBLIC_URL + '/images/mflogodark2.png'}
              alt="Mike Fulton Logo"
              text="MF logo"
              style={{ width: 100 }}
            />
          </Article>
          <ArticleDark className="article-body" heading="Aspirations">
            <p>
              At this point in my life, my largest aspiration is to finish my
              Computer Science Degree and work towards becoming a <span id="professional">professional </span>
              software developer. I'm likely to start working as an Operations
              Engineer in the near future, but I'd like to pursue a Master's
              Degree and get more into the development end of things.
            </p>
          </ArticleDark>
        </div>
      </section>
    </div>
  );
};

export default PreviousWork;
