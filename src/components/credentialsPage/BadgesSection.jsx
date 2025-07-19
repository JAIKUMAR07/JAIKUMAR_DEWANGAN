import React from "react";

const badgesData = [
  {
    id: 1,
    name: "Toastmasters International",
    description: "Persuasive Influence Path Completion",
    image:
      "https://toastmaster-prod-edx-storage.s3.amazonaws.com/badges/pathways-badge-persuasive-influence-proficient.svg",
    path: "https://basecamp.toastmasters.org/public/social/1eaabd80-ab90-4df3-af36-c67ee76d5357/",
  },
  {
    id: 2,
    name: "HackerRank",

    image:
      "https://tse2.mm.bing.net/th/id/OIP.04oGvilaqzyDwqlhHrF8bAHaHa?pid=Api&P=0&h=180",

    description: "4-Star in C Language",
    path: "https://www.hackerrank.com/profile/jaikumar007",
  },
  {
    id: 3,
    name: "Toastmasters International",

    description: "Level 5 Completion",
    image:
      "https://toastmaster-prod-edx-storage.s3.amazonaws.com/badges/pathways-badge-persuasive-influence-level-5.svg",
    path: "https://basecamp.toastmasters.org/public/social/0c831874-032f-4f95-83cc-ecf9106ba3e1/",
  },
];

const BadgeItem = ({ badge }) => {
  return (
    <div className="bg-gray-700/50 rounded-xl p-5 flex flex-col items-center h-full text-center shadow-md hover:shadow-lg transition-shadow">
      <div
        className={`w-20 h-20 rounded-full ${
          badge.color ?? "bg-gray-500"
        } flex items-center justify-center mb-3 overflow-hidden`}
      >
        {badge.image ? (
          <a href={badge.path}>
            {" "}
            <img
              src={badge.image}
              alt={badge.name}
              className="w-full h-full object-contain"
            />{" "}
          </a>
        ) : (
          <span className="text-white text-xl font-semibold">
            {badge.initials}
          </span>
        )}
      </div>
      <h4 className="text-white font-semibold  text-base mb-1">{badge.name}</h4>
      <p className="text-gray-300 text-sm">{badge.description}</p>
    </div>
  );
};

const BadgesSection = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
          Badges
        </h2>

        <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {badgesData.map((badge) => (
            <BadgeItem key={badge.id} badge={badge} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BadgesSection;
