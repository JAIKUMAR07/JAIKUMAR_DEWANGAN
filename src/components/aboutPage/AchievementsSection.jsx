import React from "react";

// Add participation array to achievementsData
const achievementsData = {
  awards: [
    {
      id: 1,
      title: "Secured 2nd Place in Humorous Speech Contest  at  Div Contest",
    },
    {
      id: 2,
      title: "Secured 1st Place in Humorous Speech Contest at Area Contest",
    },
    {
      id: 3,
      title:
        "Completed Persuasive Influence Pathway In Toastmasters International",

      link: "https://basecamp.toastmasters.org/ti/certificates/eea133f8-7857-47a9-bac1-ef7adea07c6e/",
    },
  ],

  participation: [
    {
      id: 1,
      description:
        "Solved more than 250 coding problems across GeeksforGeeks & LeetCode platform ",
      link: "https://codolio.com/profile/JAIKUMAR007",
    },
    {
      id: 2,
      description: "Participated in Odoo Hackathon ",
    },
    {
      id: 3,
      description:
        "Actively participated in speech delivery & Contest at Toastmasters during college ",
    },
  ],
};

const AchievementItem = ({ achievement }) => (
  <li className="flex items-center">
    <svg
      className="w-4 h-4 me-2 text-cyan-500 dark:text-cyan-400 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="8" />
    </svg>
    {achievement.title}{" "}
    {achievement.link && (
      <>
        {" "}
        <a
          href={achievement.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline ml-2"
        >
          link
        </a>
      </>
    )}
  </li>
);

// New ParticipationItem component

const ParticipationItem = ({ item }) => (
  <li className="flex items-center">
    <svg
      className="w-4 h-4 me-2 text-yellow-400 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <rect x="4" y="4" width="12" height="12" rx="3" />
    </svg>
    <span>
      {item.description}
      {item.link && (
        <>
          {" "}
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline ml-2"
          >
            link
          </a>
        </>
      )}
    </span>
  </li>
);

const AchievementsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-10">
      <h2 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
        Achievements
      </h2>

      {/* Achievements List */}
      <div className="my-8 group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-8 hover:bg-gray-800/70 transition-all duration-300">
        <h3 className="mb-4 text-2xl font-semibold text-white">
          Recognition & Awards
        </h3>
        <ul className="space-y-3 text-gray-300 list-inside">
          {achievementsData.awards.map((award) => (
            <AchievementItem key={award.id} achievement={award} />
          ))}
        </ul>
      </div>

      {/* Participation Section */}
      <div className="my-8 group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-8 hover:bg-gray-800/70 transition-all duration-300">
        <h3 className="mb-4 text-2xl font-semibold text-white">
          Extra Curricular Participation
        </h3>
        <ul className="space-y-3 text-gray-300 list-inside">
          {achievementsData.participation.map((item) => (
            <ParticipationItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
