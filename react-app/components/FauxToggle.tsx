import { useState } from 'react';
import FauxFlowLogo from './FauxFlowLogo';

interface FauxToggleProps {
  onToggle: (enabled: boolean) => void;
  isEnabled: boolean;
  isScanning?: boolean;
}

export default function FauxToggle({ onToggle, isEnabled, isScanning }: FauxToggleProps) {
  const [showRipple, setShowRipple] = useState(false);

  const handleToggle = () => {
    setShowRipple(true);
    setTimeout(() => setShowRipple(false), 600);
    onToggle(!isEnabled);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        {/* Ripple Animation */}
        {showRipple && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-32 h-16 border-2 border-blue-400 rounded-full animate-ping opacity-75" />
            <div className="absolute w-40 h-20 border border-blue-300 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.2s' }} />
          </div>
        )}
        
        {/* WiFi Toggle Switch */}
        <button
          onClick={handleToggle}
          disabled={isScanning}
          className={`relative w-24 h-12 rounded-full border-2 transition-all duration-300 transform hover:scale-105 ${
            isEnabled
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 border-blue-400 shadow-lg shadow-blue-500/25'
              : 'bg-gray-200 border-gray-300 hover:bg-gray-300'
          } ${isScanning ? 'animate-pulse' : ''}`}
        >
          {/* Toggle Knob */}
          <div
            className={`absolute top-1 w-10 h-10 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
              isEnabled ? 'translate-x-12' : 'translate-x-1'
            }`}
          >
            <FauxFlowLogo 
              className={`w-5 h-5 ${isScanning ? 'animate-spin' : ''}`} 
              enabled={isEnabled} 
            />
          </div>
          
          {/* Background Icons */}
          <div className="absolute inset-0 flex items-center justify-between px-2">
            <FauxFlowLogo className={`w-4 h-4 transition-opacity duration-300 ${isEnabled ? 'opacity-30' : 'opacity-0'}`} enabled={false} />
            <FauxFlowLogo className={`w-4 h-4 transition-opacity duration-300 ${isEnabled ? 'opacity-30' : 'opacity-0'}`} enabled={true} />
          </div>
          
          {/* Glow Effect */}
          {isEnabled && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 animate-pulse" />
          )}
        </button>
      </div>
      
      <div className="text-center">
        <h3 className={`font-semibold transition-colors ${isEnabled ? 'text-blue-600' : 'text-gray-600'}`}>
          FauxFlow Detection
        </h3>
        <p className={`text-sm ${isEnabled ? 'text-blue-500' : 'text-gray-400'}`}>
          {isScanning ? '🔍 Scanning in progress...' : isEnabled ? 'Active' : 'Tap to activate'}
        </p>
      </div>
    </div>
  );
}
