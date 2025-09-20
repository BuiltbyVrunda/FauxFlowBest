import { useState } from 'react';
import { Wifi, Bluetooth, Signal, Sun, Moon, Settings, Shield } from 'lucide-react';
import { useDarkMode } from '@/react-app/hooks/useDarkMode';

interface QuickSettingsProps {
  onFauxFlowToggle: (enabled: boolean) => void;
  isFauxFlowEnabled: boolean;
  isScanning?: boolean;
}

export default function QuickSettings({ onFauxFlowToggle, isFauxFlowEnabled, isScanning }: QuickSettingsProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
  const [mobileDataEnabled, setMobileDataEnabled] = useState(true);

  const quickControls = [
    {
      id: 'wifi',
      icon: <Wifi className="w-5 h-5" />,
      label: 'Wi-Fi',
      enabled: wifiEnabled,
      onToggle: () => setWifiEnabled(!wifiEnabled),
    },
    {
      id: 'bluetooth',
      icon: <Bluetooth className="w-5 h-5" />,
      label: 'Bluetooth',
      enabled: bluetoothEnabled,
      onToggle: () => setBluetoothEnabled(!bluetoothEnabled),
    },
    {
      id: 'mobile-data',
      icon: <Signal className="w-5 h-5" />,
      label: 'Mobile Data',
      enabled: mobileDataEnabled,
      onToggle: () => setMobileDataEnabled(!mobileDataEnabled),
    },
    {
      id: 'fauxflow',
      icon: <Shield className="w-5 h-5" />,
      label: 'FauxFlow',
      enabled: isFauxFlowEnabled,
      onToggle: () => onFauxFlowToggle(!isFauxFlowEnabled),
      isScanning: isScanning,
    },
    {
      id: 'dark-mode',
      icon: isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />,
      label: 'Dark Mode',
      enabled: isDarkMode,
      onToggle: toggleDarkMode,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Settings</h3>
        <Settings className="w-5 h-5 text-gray-400 dark:text-gray-500" />
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {quickControls.map((control) => (
          <button
            key={control.id}
            onClick={control.onToggle}
            disabled={control.isScanning}
            className={`
              relative flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 group
              ${control.enabled
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }
              ${control.isScanning ? 'animate-pulse' : ''}
              hover:scale-105 active:scale-95
            `}
          >
            {/* Icon */}
            <div className={`mb-2 ${control.isScanning && control.id === 'fauxflow' ? 'animate-spin' : ''}`}>
              {control.icon}
            </div>
            
            {/* Label */}
            <span className="text-xs font-medium text-center leading-tight">
              {control.label}
            </span>
            
            {/* Status indicator for FauxFlow */}
            {control.id === 'fauxflow' && control.isScanning && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
            )}
            
            {/* Glow effect when enabled */}
            {control.enabled && (
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </button>
        ))}
      </div>
      
      {/* Status text */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {isScanning ? '🔍 FauxFlow scanning...' : isFauxFlowEnabled ? '✓ FauxFlow active' : 'Tap FauxFlow to activate'}
        </p>
      </div>
    </div>
  );
}
