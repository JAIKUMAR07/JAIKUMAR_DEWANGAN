// components/SkillSection.jsx

const SkillSection = ({ title, skillList }) => {
  return (
    <div className="container px-5 py-10 mx-auto">
      <h1 className="text-center lg:text-left mx-3 mb-5 text-2xl md:text-2xl dark:text-gray-400 font-semibold">
        {title}
      </h1>
      <div className="flex flex-wrap m-4">
        {skillList.map(({ id, image, title, level }) => (
          <div
            key={id}
            className="p-4 w-1/2 transform transition-transform duration-400 hover:scale-120 md:w-1/6"
          >
            <div className="h-full bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-md cursor-pointer flex flex-col items-center  p-4">
              <img
                className="w-20 h-20   object-contain mb-3"
                src={image}
                alt={title}
              />
              <div className="w-full text-center">
                <h2 className="text-lg font-semibold text-gray-300 mb-1">
                  {title.substring(0, 20)}
                </h2>
                <p className="text-sm font-medium text-cyan-500">{level}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
