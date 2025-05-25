import { useLanguage } from "../contexts/LanguageContext";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.items.web.title,
      description: t.services.items.web.description,
    },
    {
      title: t.services.items.mobile.title,
      description: t.services.items.mobile.description,
    },
    {
      title: t.services.items.uiux.title,
      description: t.services.items.uiux.description,
    },
    {
      title: t.services.items.media.title,
      description: t.services.items.media.description,
    },
    {
      title: t.services.items.crm.title,
      description: t.services.items.crm.description,
    },
    {
      title: t.services.items.branding.title,
      description: t.services.items.branding.description,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 pt-20 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-lg font-semibold text-red-500 mb-4 tracking-wide">
            {t.services.subtitle}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold font-space text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.services.title}
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
