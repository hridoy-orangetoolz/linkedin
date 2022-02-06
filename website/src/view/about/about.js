import React, { memo, useMemo } from "react";
import Header from "../../components/header/header";

import team from "../../assets/team.svg";
import setup from "../../assets/setup.svg";
import example from "../../assets/exemple.png";

import "./about.css";

import { useTranslation } from "react-i18next";

const md = require("markdown-it")().use(require("markdown-it-mark"));

const getContent = (t, key) => {
  const contentArr = t("about.text." + key, { returnObjects: true });
  console.log(contentArr);
  return contentArr.map((c) => (
    <p
      className="about-text"
      dangerouslySetInnerHTML={{ __html: md.render(c) }}
    />
  ));
};

const Section = ({ title, image, content }) => (
  <div className="section-container">
    <div className="column" style={{ alignItems: "flex-start" }}>
      <p className="section-title">{title}</p>
      {content}
    </div>
    <div className="column">
      <img src={image} alt={title} className="right-image" />
    </div>
  </div>
);

const About = memo((props) => {
  const { t } = useTranslation();
  const usageContent = useMemo(() => getContent(t, "usage"), [t]);
  const guideContent = useMemo(() => getContent(t, "guide"), [t]);
  const teamContent = useMemo(() => getContent(t, "team"), [t]);
  return (
    <div className="home-container">
      <Header {...props} />
      <div className="fakenav"></div>
      <div className="home-wrapper" style={{ flexDirection: "column" }}>
        <Section
          title={t("about.title.usage")}
          image={setup}
          content={usageContent}
        />
        <Section
          title={t("about.title.guide")}
          image={example}
          content={guideContent}
        />
        {/* <Section title={t("about.title.team")} image={team} content={teamContent} /> */}
      </div>
    </div>
  );
});

export default About;
