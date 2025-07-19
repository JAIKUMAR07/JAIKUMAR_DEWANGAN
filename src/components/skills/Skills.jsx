// components/Skills.jsx

import SkillSection from "./SkillSection";
import programingLanguageList from "./ProgramingLanguage";
import FrontedLanguage from "./FrontendLanguage";
import BackendLaguage from "./BackendLaguage";
// Change this line from named import to default import
import OtherSkills from "./OtherSkills";

const Skills = () => {
  return (
    <div className="mt-10">
      <h2 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
        Skills
      </h2>

      <section className="body-font">
        <SkillSection
          title="Programming Languages"
          skillList={programingLanguageList}
        />
      </section>

      <section className="body-font">
        <SkillSection
          title="Frontend Technologies"
          skillList={FrontedLanguage}
        />
      </section>
      <section className="body-font">
        <SkillSection title="Backend Technologies" skillList={BackendLaguage} />
      </section>
      <section className="body-font">
        <SkillSection title="Other Skills" skillList={OtherSkills} />
      </section>
    </div>
  );
};

export default Skills;
