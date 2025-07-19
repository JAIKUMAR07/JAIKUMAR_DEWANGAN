const educations = [
  {
    institution:
      "Shri Shankaracharya Institute of Professional Management and Technology",
    degrees: [
      {
        degree: "Bachelor of Technology in Computer Science & Engineering",
        duration: "2022 - 2026",
        score: "CGPA: 7.2",
        borderColor: "border-sky-400",
        skills: [
          "Computer Science Fundamentals",
          "Programming",

          "Algorithms",
          "Data Structures",
        ],
      },
    ],
  },
  {
    institution: "MAA Banjari Gurukul Higher Secondary School",
    degrees: [
      {
        degree: "12th Class in PCM",
        duration: "2021 - 2022",
        score: "Percentage: 80.8%",
        skills: ["Physics", "Chemistry", "Mathematics"],

        borderColor: "border-green-400",
      },
      {
        degree: "10th Class",
        duration: "2019 - 2020",
        score: "Percentage: 87.8%",

        borderColor: "border-yellow-400",
      },
    ],
  },
];

const EducationCard = ({ education }) => {
  return (
    <div className="my-5 group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-5 hover:bg-gray-800/70 transition-all duration-300">
      <div className="relative z-10 text-white">
        {/* If multiple degrees */}
        {education.degrees ? (
          <>
            <h3 className="text-xl font-bold mb-2">{education.institution}</h3>
            {education.degrees.map((deg, idx) => (
              <div
                key={idx}
                className={`mb-3 pl-4 border-l-4 ${
                  deg.borderColor || "border-sky-400"
                }`}
              >
                <p className="text-base font-semibold">
                  {deg.degree} <span className="mx-2"></span>[{deg.duration}]
                </p>
                <p className="text-base">{deg.score}</p>
                {deg.skills && (
                  <p className="mt-1 text-gray-300">
                    <span className="font-bold">Skills:</span>{" "}
                    {deg.skills.join(", ")}
                  </p>
                )}
                {deg.achievement && (
                  <div className="mt-2 p-2 bg-gray-700/50 rounded-lg">
                    <p className="text-yellow-300">🏆 {deg.achievement}</p>
                  </div>
                )}
              </div>
            ))}
          </>
        ) : (
          <div
            className={`pl-4 border-l-4 ${
              education.borderColor || "border-sky-400"
            }`}
          >
            <p className="text-base font-semibold">
              {education.institution} - {education.degree}{" "}
              <span className="mx-2"></span>[{education.duration}]
            </p>
            <p className="text-base">{education.score}</p>
            {education.skills && (
              <p className="mt-1 text-gray-300">
                <span className="font-bold">Skills:</span>{" "}
                {education.skills.join(", ")}
              </p>
            )}
            {education.achievement && (
              <div className="mt-2 p-2 bg-gray-700/50 rounded-lg">
                <p className="text-yellow-300">🏆 {education.achievement}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-10">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-8 md:mb-12 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
          Education
        </h2>
        <div className="space-y-4 md:space-y-6">
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
