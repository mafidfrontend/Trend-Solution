import { useLanguage } from "../contexts/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Dastyor Service",
      category: "Web Development",
      image: "https://www.trendsolution.uz/assets/project-1.png",
      url: "https://www.dastyor-service.uz/",
    },
    {
      title: "Hercules",
      category: "Web Development",
      image: "https://www.trendsolution.uz/assets/project-2.png",
      url: "",
    },
    {
      title: "Healthcare Dashboard",
      category: "Web Development",
      image: "https://www.trendsolution.uz/assets/project-3.png",
      url: "",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold font-space text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.portfolio.title}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.portfolio.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold font-space text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
