//Main about page. Not a reusable component.

import React from 'react';
import Portrait from './Portrait';

import '../styles/About.css';
import '../styles/Global.css';
import '../styles/Background.css';
import Article from './Article';
import ArticleDark from './ArticleDark';

const About = () => {
  return (
    <div className="main-area about-frame base">
      <h1 className="header">&gt;Michael Fulton_</h1>
      <Portrait
        className="portrait"
        picture={process.env.PUBLIC_URL + '/images/portrait.png'}
        alt_text="Portrait of Mike Fulton"
        title_text="Mike Fulton"
        size={250}
      />
      <div className="article-area">
        <section className="welcome-article">
          <Article className="article-body" heading="Hello!">
            <p className="article-text">
              I'm an aspiring Software Engineer, professional issue fixer, and
              maker. Take a peek at the previous work / resume section for some
              of my credentials.
            </p>
          </Article>
        </section>
        <section className="article-sub-area">
          <ArticleDark className="article-body" heading="I make things">
            <img
              className="article-image"
              src={process.env.PUBLIC_URL + '/images/soldering.jpg'}
              alt="Picture of soldering macro pad"
              text="Macro Pad Soldering"
              height={250}
              width={250}
            />
            <p className="article-text">
              Software, hardware, electronics, arts, crafts, I make and fix the
              things that need making and fixing.
            </p>
          </ArticleDark>
          <ArticleDark
            className="article-body"
            heading="Seriously, lots of things"
          >
            <img
              className="article-image"
              src={process.env.PUBLIC_URL + '/images/beholder.jpg'}
              alt="Painted Miniature Beholder"
              text="Beholder"
              height={250}
              width={250}
            />
            <p className="article-text">
              I've got all sorts of projects under my belt, check out the
              projects area for a sampling of some of the things I've made.
            </p>
          </ArticleDark>
        </section>
      </div>
    </div>
  );
};

export default About;
