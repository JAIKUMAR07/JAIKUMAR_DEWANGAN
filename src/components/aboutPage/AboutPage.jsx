import React from "react";

import Layout from "../layout/Layout";

import IntroSection from "./IntroSection";
import EducationSection from "./EducationSection";
import ExperiencesSection from "./ExperiencesSection";
import AchievementsSection from "./AchievementsSection";

const AboutPage = () => {
  return (
    <>
      <Layout>
        <IntroSection />
        <EducationSection />
        <ExperiencesSection />
        <AchievementsSection />
      </Layout>
    </>
  );
};

export default AboutPage;
