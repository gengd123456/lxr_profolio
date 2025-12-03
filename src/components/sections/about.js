import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
  .highlight {
    font-weight: normal;
    color: #e6f1ff;
    text-decoration: none;
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 400px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);
    overflow: hidden;

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .avatar-img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
      pointer-events: none;
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }

  .avatar-img {
    display: block;
    width: 100%;
    height: auto; /* ⭐ 保持原始比例，不会被横向压缩或拉伸 */
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    transition: var(--transition);
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  // 把原来的 JavaScript/React 技能换成你的技能
  const skills = [
    'UX Research & Analysis',
    'Interaction Design',
    'UI Design',
    'Web Design (HTML, CSS, JavaScript)',
    'Figma',
    'Adobe Photoshop / Illustrator / XD',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is <span className="highlight">Xinru Li</span>. I am a{' '}
              <span className="highlight">UI/UX</span> designer and researcher with a background in
              digital media and interactive design. I recently graduated with a Master’s degree in{' '}
              <span className="highlight">Interactive Digital Media</span> from{' '}
              <span className="highlight">Trinity College Dublin</span>, where I explored how
              design, technology, and user experience come together to create meaningful digital
              products.
            </p>

            <p>
              Before that, I studied Digital Media Art at
              <span className="highlight">
                {' '}
                Beijing Jiaotong University (joint programme with Lancaster University)
              </span>
              , where I built a foundation in visual communication, graphic design, web design, and
              creative coding . During this time, I also gained practical experience with front-end
              technologies such as
              <span className="highlight"> HTML, CSS, and JavaScript</span>, which strengthened my
              ability to translate design concepts into functional web interfaces.
            </p>

            <p>
              Professionally, I have worked across cultural and creative studios,heritage research
              projects, and product appearance design teams. These experiences helped me develop
              strong skills in UX research, information architecture, interface design, and visual
              problem-solving, often collaborating with multidisciplinary teams.
            </p>

            <p>
              Today, I focus on transforming research insights into clear user flows, wireframes,
              prototypes, and interactive experiences. I enjoy designing interfaces that make
              complex information simple, intuitive, and engaging—combining my strengths in
              <span className="highlight"> UX research</span>,
              <span className="highlight"> interaction design</span>, and
              <span className="highlight"> front-end understanding</span>.
            </p>

            <p>Here are a few areas and tools I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="wrapper"
              imgClassName="avatar-img"
              src="../../images/me.jpg"
              width={600}
              quality={90}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot of Xinru Li"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
