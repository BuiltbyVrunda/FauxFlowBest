import { Cloud, Database, Cpu, Shield, Globe, BarChart3 } from 'lucide-react';

export default function Architecture() {
  const components = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: "Vertex AI NLP",
      description: "Natural language processing for text analysis and pattern detection"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Vision AI",
      description: "Image and video analysis with reverse-image search capabilities"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Media Translation",
      description: "Multi-language support including regional Indian languages"
    },
    {
      icon: <Cloud className="w-8 h-8 text-orange-600" />,
      title: "Gemini Pro",
      description: "Advanced reasoning and explanation generation for results"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-600" />,
      title: "Fact Check API",
      description: "Real-time fact verification against trusted sources"
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-600" />,
      title: "Firebase & BigQuery",
      description: "Secure data storage and analytics with Cloud Run deployment"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Architecture</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Powered by Google Cloud's advanced AI and machine learning services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gray-100 dark:group-hover:bg-gray-600 transition-colors">
                  {component.icon}
                </div>
                <h3 className="ml-4 font-semibold text-gray-900 dark:text-white">{component.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {component.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 px-6 py-3 rounded-full border border-blue-100 dark:border-blue-800">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Privacy-first design with end-to-end security</span>
          </div>
        </div>
      </div>
    </section>
  );
}
