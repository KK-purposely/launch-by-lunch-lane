import React from "react";
import { AlertTriangle } from "lucide-react";

interface DashboardMockProps {
  square?: boolean;
  className?: string;
}

export const DashboardMock: React.FC<DashboardMockProps> = ({ square = false, className = "" }) => {
  const wrapperClass = `relative bg-white text-gray-900 rounded-2xl ${square ? "p-4 md:p-5" : "p-5 md:p-6"} ${className}`;
  const shadow = { boxShadow: "0 40px 80px -20px rgba(20,10,40,0.55), 0 20px 40px -20px rgba(20,10,40,0.4)" };

  if (square) {
    return (
      <div className={wrapperClass} style={shadow}>
        <div className="grid grid-cols-2 gap-2">
          {/* Revenue tile */}
          <div
            className="col-span-2 rounded-xl p-3 text-white flex flex-col items-center justify-center text-center min-h-[96px]"
            style={{ background: "linear-gradient(135deg, #421f52 0%, #ec4795 100%)" }}
          >
            <div className="text-[9px] font-semibold uppercase tracking-[0.15em] opacity-90">Revenue</div>
            <div className="mt-1">
              <div className="text-3xl font-extrabold leading-none">$48.2k</div>
              <div className="text-[10px] opacity-95 mt-1 flex items-center justify-center gap-1">
                <span>▲</span> 18% on pace
              </div>
            </div>
          </div>

          {/* Must Do tile */}
          <div className="col-span-2 rounded-xl border border-gray-200/80 bg-white p-2.5 min-h-[78px]">
            <div className="flex items-center gap-1 mb-1.5">
              <AlertTriangle className="h-2.5 w-2.5 text-red-500" />
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-red-500">Must Do</span>
            </div>
            <ul className="space-y-1">
              {[
                { name: "Atlas Advisory", days: 14, amt: "$2,950" },
                { name: "Brightwave Co", days: 9, amt: "$2,500" },
                { name: "Cedar & Co", days: 30, amt: "$250" },
              ].map((r) => (
                <li key={r.name} className="flex justify-between items-start text-[10px]">
                  <div className="leading-tight">
                    <div className="font-semibold text-gray-900">{r.name}</div>
                    <div className="text-[9px] text-red-500">{r.days} days overdue</div>
                  </div>
                  <span className="font-semibold text-gray-900">{r.amt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Revenue trend */}
          <div className="col-span-1 rounded-xl border border-gray-200/80 p-2">
            <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gray-500 mb-1">Trend</div>
            <svg viewBox="0 0 100 40" className="w-full h-8" preserveAspectRatio="none">
              <defs>
                <linearGradient id="trend-stroke" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#ec4795" />
                  <stop offset="100%" stopColor="#fc8817" />
                </linearGradient>
                <linearGradient id="trend-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ec4795" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#fc8817" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,34 L15,30 L30,32 L45,20 L60,24 L75,12 L100,6 L100,40 L0,40 Z" fill="url(#trend-fill)" />
              <polyline
                fill="none"
                stroke="url(#trend-stroke)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="0,34 15,30 30,32 45,20 60,24 75,12 100,6"
                pathLength={100}
                strokeDasharray="100"
                className="animate-trend-draw"
              />
              <circle cx="100" cy="6" r="2.5" fill="#fc8817" className="animate-trend-dot" />
            </svg>
          </div>

          {/* Goal donut */}
          <div className="col-span-1 rounded-xl border border-gray-200/80 p-2 flex flex-col items-center">
            <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gray-500 mb-1">Goal</div>
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <defs>
                  <linearGradient id="goal-arc" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ec4795" />
                    <stop offset="100%" stopColor="#fc8817" />
                  </linearGradient>
                </defs>
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f3e8f5" strokeWidth="3.4" />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="none"
                  stroke="url(#goal-arc)"
                  strokeWidth="3.4"
                  strokeDasharray="74, 100"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-extrabold text-gray-900">74%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperClass} style={shadow}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-semibold text-gray-700">This Month at a Glance</div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-orange-400" />
          <span className="h-2 w-2 rounded-full bg-pink-400" />
          <span className="h-2 w-2 rounded-full bg-purple-400" />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {/* Revenue tile */}
        <div
          className="col-span-2 rounded-xl p-4 text-white flex flex-col items-center justify-center text-center min-h-[150px]"
          style={{ background: "linear-gradient(135deg, #421f52 0%, #ec4795 100%)" }}
        >
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] opacity-90">Revenue</div>
          <div className="mt-2">
            <div className="text-3xl md:text-4xl font-extrabold leading-none">$48.2k</div>
            <div className="text-[11px] opacity-95 mt-2 flex items-center justify-center gap-1">
              <span>▲</span> 18% on pace
            </div>
          </div>
        </div>

        {/* Must Do tile */}
        <div className="col-span-3 rounded-xl border border-gray-200/80 bg-white p-3.5 min-h-[150px]">
          <div className="flex items-center gap-1.5 mb-2">
            <AlertTriangle className="h-3 w-3 text-red-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-red-500">Must Do</span>
          </div>
          <ul className="space-y-1.5">
            {[
              { name: "Atlas Advisory", days: 14, amt: "$2,950" },
              { name: "Brightwave Co", days: 9, amt: "$2,500" },
              { name: "Cedar & Co", days: 30, amt: "$250" },
            ].map((r) => (
              <li key={r.name} className="flex justify-between items-start text-[11px]">
                <div className="leading-tight">
                  <div className="font-semibold text-gray-900">{r.name}</div>
                  <div className="text-[10px] text-red-500">{r.days} days overdue</div>
                </div>
                <span className="font-semibold text-gray-900">{r.amt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Revenue trend */}
        <div className="col-span-3 rounded-xl border border-gray-200/80 p-3">
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-500 mb-1">Revenue Trend</div>
          <svg viewBox="0 0 100 40" className="w-full h-14" preserveAspectRatio="none">
            <defs>
              <linearGradient id="trend-stroke" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#ec4795" />
                <stop offset="100%" stopColor="#fc8817" />
              </linearGradient>
              <linearGradient id="trend-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ec4795" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#fc8817" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,34 L15,30 L30,32 L45,20 L60,24 L75,12 L100,6 L100,40 L0,40 Z" fill="url(#trend-fill)" />
            <polyline
              fill="none"
              stroke="url(#trend-stroke)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="0,34 15,30 30,32 45,20 60,24 75,12 100,6"
              pathLength={100}
              strokeDasharray="100"
              className="animate-trend-draw"
            />
            <circle cx="100" cy="6" r="2.5" fill="#fc8817" className="animate-trend-dot" />
          </svg>
        </div>

        {/* Goal donut */}
        <div className="col-span-2 rounded-xl border border-gray-200/80 p-3 flex flex-col items-center">
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-500 mb-1 self-start">Goal</div>
          <div className="relative w-16 h-16">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <defs>
                <linearGradient id="goal-arc" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ec4795" />
                  <stop offset="100%" stopColor="#fc8817" />
                </linearGradient>
              </defs>
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f3e8f5" strokeWidth="3.4" />
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="url(#goal-arc)"
                strokeWidth="3.4"
                strokeDasharray="74, 100"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-extrabold text-gray-900">74%</span>
            </div>
          </div>
          <span className="text-[10px] text-gray-500 mt-1">of target</span>
        </div>
      </div>
    </div>
  );
};
