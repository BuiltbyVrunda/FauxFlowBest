import { useState } from 'react';
import { Shield, FileText, Image, Video } from 'lucide-react';
import ScanResults from '@/react-app/components/ScanResults';
import HowItWorks from '@/react-app/components/HowItWorks';
import Architecture from '@/react-app/components/Architecture';
import QuickSettings from '@/react-app/components/QuickSettings';

// Mock data for demonstration
const mockResults = [
  {
    id: '1',
    content: 'Breaking: Local hospital reports 95% increase in emergency cases due to new variant',
    type: 'text' as const,
    credibility: 'suspicious' as const,
    score: 35,
    pattern: 'Misleading Statistics',
    reason: 'Wrong Numbers / Fake Statistics',
    explanation: 'The reported 95% increase cannot be verified through official hospital records or health department data.',
    sources: ['WHO Health Statistics', 'Local Health Department Reports'],
    trending: true
  },
  {
    id: '2',
    content: 'Image showing crowded vaccination center with long queues',
    type: 'image' as const,
    credibility: 'fake' as const,
    score: 15,
    pattern: 'Out-of-Context Media',
    reason: 'Out-of-Context Image',
    explanation: 'This photo was first published in 2019 and is being shared as if it is current.',
    metadata: {
      originalDate: '2019-03-15',
      manipulated: true,
      synthetic: false
    },
    sources: ['Reverse Image Search Results', 'TinEye Database']
  },
  {
    id: '3',
    content: 'Official government statement on new healthcare policy implementation',
    type: 'text' as const,
    credibility: 'authentic' as const,
    score: 92,
    sources: ['Government Press Release', 'Official Healthcare Portal']
  },
  {
    id: '4',
    content: 'Video of politician making controversial statement about healthcare funding',
    type: 'video' as const,
    credibility: 'suspicious' as const,
    score: 45,
    pattern: 'Manipulated Audio',
    reason: 'Audio manipulation detected',
    explanation: 'Voice pattern analysis suggests potential audio splicing or enhancement.',
    metadata: {
      originalDate: 'Unknown',
      manipulated: true,
      synthetic: true
    },
    sources: ['Audio Forensics Database']
  }
];

export default function Home() {
  const [isToggleEnabled, setIsToggleEnabled] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [scanType, setScanType] = useState<'text' | 'image' | 'video'>('text');

  const handleFauxFlowToggle = (enabled: boolean) => {
    setIsToggleEnabled(enabled);
    if (enabled) {
      setIsScanning(true);
      setShowResults(false);
      
      // Simulate scanning delay
      setTimeout(() => {
        setIsScanning(false);
        setShowResults(true);
      }, 3000);
    } else {
      setShowResults(false);
      setIsScanning(false);
    }
  };

  const overallScore = Math.round(
    mockResults.reduce((acc, result) => acc + result.score, 0) / mockResults.length
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 dark:from-blue-400/20 dark:to-purple-400/20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20 dark:border-gray-600/20">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI-Powered Detection</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FauxFlow
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-light">
              Misinformation Detection.
            </p>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12">
              As Easy as Switching On Wi-Fi.
            </p>
            
            <div className="flex flex-col items-center space-y-8">
              <QuickSettings 
                onFauxFlowToggle={handleFauxFlowToggle}
                isFauxFlowEnabled={isToggleEnabled}
                isScanning={isScanning}
              />
              
              {!isToggleEnabled && !isScanning && (
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Choose content type to scan:</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      { type: 'text' as const, icon: FileText, label: 'Text & Articles' },
                      { type: 'image' as const, icon: Image, label: 'Images & Photos' },
                      { type: 'video' as const, icon: Video, label: 'Videos & Media' }
                    ].map(({ type, icon: Icon, label }) => (
                      <button
                        key={type}
                        onClick={() => setScanType(type)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-all ${
                          scanType === type
                            ? 'bg-blue-100 dark:bg-blue-900/50 border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-300'
                            : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-blue-200 dark:hover:border-blue-600'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Scan Results</h2>
              <p className="text-gray-600 dark:text-gray-300">Analysis complete - Here's what we found</p>
            </div>
            <ScanResults results={mockResults} overallScore={overallScore} />
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why FauxFlow?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Advanced AI detection with explainable results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Instant Detection',
                description: 'One-click scanning for text, images, and videos with immediate results',
                icon: '⚡'
              },
              {
                title: 'Pattern Recognition',
                description: 'Identifies common misinformation patterns with detailed explanations',
                icon: '🎯'
              },
              {
                title: 'Multi-Language Support',
                description: 'Supports English and regional Indian languages for broader accessibility',
                icon: '🌍'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-600/20 transition-colors duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <Architecture />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold">FauxFlow</span>
            </div>
            <p className="text-gray-400 dark:text-gray-300 mb-4">
              Fighting misinformation with advanced AI technology
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 FauxFlow. Privacy-first misinformation detection.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
