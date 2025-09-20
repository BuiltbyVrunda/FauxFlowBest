import { Users, Search, Brain, Target, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "User Input",
      description: "Upload text, image, or video content"
    },
    {
      icon: <Search className="w-8 h-8 text-purple-600" />,
      title: "Toggle ON",
      description: "Activate FauxFlow detection like Wi-Fi"
    },
    {
      icon: <Brain className="w-8 h-8 text-green-600" />,
      title: "AI Analysis",
      description: "Advanced extraction and pattern detection"
    },
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: "Credibility Score",
      description: "Get instant authenticity assessment"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
      title: "Explainable Output",
      description: "Understand the 'why' behind each result"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Simple, fast, and reliable misinformation detection in just a few steps
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 via-orange-200 to-emerald-200 dark:from-blue-600 dark:via-purple-600 dark:via-green-600 dark:via-orange-600 dark:to-emerald-600 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg border-2 border-gray-100 dark:border-gray-600 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
