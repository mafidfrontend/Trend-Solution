import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20 font-inter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold font-space text-center text-gray-900 mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h1>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 animate-scale-in">
            <div className="prose prose-lg max-w-none">
              {t.about.content.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-6 text-lg animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="text-4xl font-bold text-blue-600 mb-2">2020</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
                <div className="text-gray-600">Specialists</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                <div className="text-4xl font-bold text-green-600 mb-2">∞</div>
                <div className="text-gray-600">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
