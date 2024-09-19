import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";


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
                  {/* Conditionally render image based on skill's fileName */}
                  {skill.fileName === "DataScienceImg" ? (
                    <img
                      alt="Data Science & AI"
                      src={require(`../../assets/images/Projects_top.png`)}
                    />
                  ) : skill.fileName === "CloudInfraImg" ? (
                    <img
                      alt="Cloud Infrastructure"
                      src={require(`../../assets/images/working.png`)}
                    />
                  ) : null}
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>

               
<Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
