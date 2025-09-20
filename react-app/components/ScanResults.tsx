import { CheckCircle, AlertTriangle, XCircle, ExternalLink, Eye, Calendar, TrendingUp } from 'lucide-react';

interface ScanResult {
  id: string;
  content: string;
  type: 'text' | 'image' | 'video';
  credibility: 'authentic' | 'suspicious' | 'fake';
  score: number;
  pattern?: string;
  reason?: string;
  explanation?: string;
  sources?: string[];
  metadata?: {
    originalDate?: string;
    manipulated?: boolean;
    synthetic?: boolean;
  };
  trending?: boolean;
}

interface ScanResultsProps {
  results: ScanResult[];
  overallScore: number;
}

const getCredibilityIcon = (credibility: string) => {
  switch (credibility) {
    case 'authentic':
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case 'suspicious':
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    case 'fake':
      return <XCircle className="w-5 h-5 text-red-500" />;
    default:
      return null;
  }
};

const getCredibilityColor = (credibility: string) => {
  switch (credibility) {
    case 'authentic':
      return 'border-l-green-500 bg-green-50';
    case 'suspicious':
      return 'border-l-yellow-500 bg-yellow-50';
    case 'fake':
      return 'border-l-red-500 bg-red-50';
    default:
      return 'border-l-gray-300 bg-gray-50';
  }
};

export default function ScanResults({ results, overallScore }: ScanResultsProps) {
  const authentic = results.filter(r => r.credibility === 'authentic').length;
  const suspicious = results.filter(r => r.credibility === 'suspicious').length;
  const fake = results.filter(r => r.credibility === 'fake').length;

  return (
    <div className="space-y-6">
      {/* Overall Score */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Analysis Summary</h2>
          <div className={`text-2xl font-bold ${overallScore >= 80 ? 'text-green-600' : overallScore >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
            {overallScore}%
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="font-semibold text-green-700">{authentic}</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Verified</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1">
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
              <span className="font-semibold text-yellow-700">{suspicious}</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Suspicious</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1">
              <XCircle className="w-4 h-4 text-red-500" />
              <span className="font-semibold text-red-700">{fake}</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Fake</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${overallScore >= 80 ? 'bg-green-500' : overallScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
            style={{ width: `${overallScore}%` }}
          />
        </div>
      </div>

      {/* Individual Results */}
      <div className="space-y-4">
        {results.map((result) => (
          <div key={result.id} className={`bg-white dark:bg-gray-800 rounded-xl shadow-md border-l-4 ${getCredibilityColor(result.credibility)} p-6 transition-colors duration-300`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                {getCredibilityIcon(result.credibility)}
                <span className="font-semibold text-gray-900 dark:text-white capitalize">
                  {result.credibility} {result.type}
                </span>
                {result.trending && (
                  <div className="flex items-center space-x-1 bg-orange-100 px-2 py-1 rounded-full">
                    <TrendingUp className="w-3 h-3 text-orange-600" />
                    <span className="text-xs text-orange-700 font-medium">Trending</span>
                  </div>
                )}
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {result.score}%
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              {result.content}
            </p>
            
            {result.pattern && result.reason && (
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Eye className="w-4 h-4 text-blue-600" />
                  <span className="font-medium text-gray-900 dark:text-white">Pattern Detected</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium">{result.pattern}</span> – {result.reason}
                </p>
                {result.explanation && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                    {result.explanation}
                  </p>
                )}
              </div>
            )}
            
            {result.metadata && (
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-blue-900 dark:text-blue-300 mb-2 flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Advanced Edit Detection</span>
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {result.metadata.originalDate && (
                    <div>
                      <span className="text-blue-700 dark:text-blue-400 font-medium">Original Date:</span>
                      <p className="text-blue-600 dark:text-blue-300">{result.metadata.originalDate}</p>
                    </div>
                  )}
                  {result.metadata.manipulated !== undefined && (
                    <div>
                      <span className="text-blue-700 dark:text-blue-400 font-medium">Manipulated:</span>
                      <p className="text-blue-600 dark:text-blue-300">{result.metadata.manipulated ? 'Yes' : 'No'}</p>
                    </div>
                  )}
                  {result.metadata.synthetic !== undefined && (
                    <div>
                      <span className="text-blue-700 dark:text-blue-400 font-medium">Synthetic Score:</span>
                      <p className="text-blue-600 dark:text-blue-300">{result.metadata.synthetic ? 'High' : 'Low'}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {result.sources && result.sources.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-600 pt-3">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">Sources</h4>
                <div className="space-y-1">
                  {result.sources.map((source, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm"
                      onClick={(e) => e.preventDefault()}
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span className="truncate">{source}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
