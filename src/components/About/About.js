import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            I'm Aditya Choudhary, a passionate Computer Engineering student at Sardar Patel Institute of Technology in Mumbai. With a keen interest in solving complex problems and exploring new technologies, I am dedicated to pushing the boundaries of what’s possible in the tech world.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            Currently pursuing my bachelor's degree in Computer Science, I enjoy diving into algorithmic challenges on platforms like LeetCode. This not only hones my problem-solving skills but also keeps me engaged with new and exciting concepts in the field.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            My academic journey is driven by a love for learning and a proactive approach to tackling real-world problems. Whether it's through collaborative projects, hands-on coding, or exploring the latest advancements in technology, I am always eager to grow and make a meaningful impact.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
