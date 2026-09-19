import React from 'react';
import { Wifi, BatteryMedium, Signal } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
  currentTime?: string;
  isFramed?: boolean;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  currentTime = '9:41',
  isFramed = true,
}) => {
  if (!isFramed) {
    return (
      <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col min-h-[720px]">
        {children}
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[390px] sm:max-w-[400px]">
      {/* Phone outer bezel */}
      <div className="relative bg-[#1E293B] rounded-[52px] p-[10px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.1)_inset] border-[4px] border-[#334155]/60 transition-all duration-300">
        {/* Dynamic Island / speaker */}
        <div className="absolute top-[18px] left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-3 h-[28px] w-[120px] bg-black rounded-full shadow-inner">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111] ring-1 ring-zinc-800/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#0d1b2a] ring-1 ring-emerald-950/40 flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-emerald-500/60 animate-pulse" />
          </div>
        </div>

        {/* Screen canvas */}
        <div className="relative bg-[#F8F9FA] rounded-[42px] overflow-hidden min-h-[750px] max-h-[820px] flex flex-col">
          {/* iOS Status Bar */}
          <div className="pt-3.5 px-7 pb-2 flex justify-between items-center text-xs font-semibold text-gray-900 select-none z-40 bg-[#F8F9FA]/90 backdrop-blur-md">
            <span>{currentTime}</span>
            <div className="flex items-center gap-1.5 opacity-90">
              <Signal className="w-3.5 h-3.5 stroke-[2.5]" />
              <span className="text-[10px] font-bold tracking-tight">5G</span>
              <Wifi className="w-3.5 h-3.5 stroke-[2.5]" />
              <BatteryMedium className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>

          {/* Screen Content */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col relative">
            {children}
          </div>

          {/* iOS Home Indicator */}
          <div className="py-2 flex justify-center items-center bg-[#F8F9FA]/95 select-none z-40">
            <div className="w-32 h-1 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};
