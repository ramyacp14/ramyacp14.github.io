import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import CloudInfraImg from "./CloudInfraImg";

function GetSkillImage(props) {
  // Conditional image rendering based on fileName (DataScienceImg or CloudInfraImg)
  if (props.fileName === "DataScienceImg") {
    return (
      <img
        alt="Ramya is working on data science project"
        src={require(`../../assets/images/Projects_top.png`)}
      />
    );
  } else if (props.fileName === "CloudInfraImg") {
    return (
      <img
        alt="Ramya is working on cloud architecture"
        src={require(`../../assets/images/working.png`)}
      />
    );
  }
  return null;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* Display the appropriate image for the skill section */}
                  <GetSkillImage fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>

                <Fade right duration={1500}>
                  {/* Only render the logos for software skills */}
                  <div className="software-skills-container">
                    {skill.softwareSkills.map((logo, index) => (
                      <div key={index} className="software-skill-logo">
                        {logo.fontAwesomeClassname ? (
                          <i className={logo.fontAwesomeClassname} style={logo.style}></i>
                        ) : (
                          <img
                            src={require(`../../assets/images/${logo.imageSrc}`)}
                            alt={logo.skillName}
                            style={logo.style}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </Fade>

                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p key={i} className="subTitle skills-text" style={{ color: theme.secondaryText }}>
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
