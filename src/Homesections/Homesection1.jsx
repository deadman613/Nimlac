// components/Homesection1.tsx
"use client";

import {
  ResponsiveContainer,
  AreaChart,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Bar,
} from "recharts";

// Realistic ML Training Loss
const lossData = [
  { epoch: 1, loss: 2.31 },
  { epoch: 5, loss: 1.68 },
  { epoch: 10, loss: 0.92 },
  { epoch: 15, loss: 0.61 },
  { epoch: 20, loss: 0.48 },
  { epoch: 25, loss: 0.39 },
  { epoch: 30, loss: 0.34 },
  { epoch: 35, loss: 0.31 },
  { epoch: 40, loss: 0.28 },
  { epoch: 45, loss: 0.26 },
  { epoch: 50, loss: 0.24 },
  { epoch: 55, loss: 0.23 },
  { epoch: 60, loss: 0.21 },
  { epoch: 65, loss: 0.2 },
  { epoch: 70, loss: 0.19 },
  { epoch: 75, loss: 0.18 },
  { epoch: 80, loss: 0.17 },
  { epoch: 85, loss: 0.16 },
  { epoch: 90, loss: 0.15 },
  { epoch: 100, loss: 0.13 },
].map((d) => ({ ...d, loss: d.loss + Math.random() * 0.03 }));

const conversionData = Array.from({ length: 20 }, (_, i) => ({
  day: i + 1,
  value: 1200 + Math.sin(i / 3) * 600 + Math.random() * 300,
}));

const performanceData = [
  { month: "Jan", acc: 85 },
  { month: "Feb", acc: 88 },
  { month: "Mar", acc: 92 },
  { month: "Apr", acc: 89 },
  { month: "May", acc: 95 },
  { month: "Jun", acc: 93 },
];

const revenueData = [
  { q: "Q1", rev: 85 },
  { q: "Q2", rev: 112 },
  { q: "Q3", rev: 98 },
  { q: "Q4", rev: 136 },
];

export default function Homesection1() {
  const rating = 87;
  const circumference = 2 * Math.PI * 70;
  const strokeDashoffset = circumference - (circumference * rating) / 100;

  return (
    <>
      {/* Custom CSS to replace non-working Tailwind gradient classes */}
      <style jsx global>{`
        /* Full-screen ghost gradient background */
        .bg-gradient-ghost-bg {
          background: linear-gradient(135deg, #01161d 0%, #000c10 25%, #01161d 50%, #001f28 75%, #01161d 100%);
        }

        /* Logo gradient */
        .bg-gradient-logo {
          background: linear-gradient(135deg, #22d3ee 0%, #06b6d4 50%, #0891b2 100%);
        }

        /* Simple flex center utility */
        .flex-center {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Optional extra glow for the ring (you can remove if not needed) */
        .glow-ring {
          filter: drop-shadow(0 0 12px rgba(34, 211, 238, 0.7));
        }
      `}</style>

      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Ghost background */}
        <div className="absolute inset-0 bg-gradient-ghost-bg" />

        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
          <div className="w-full max-w-7xl">
            <div className="backdrop-blur-2xl bg-black/70 border border-cyan-500/40 rounded-3xl shadow-2xl ring-1 ring-cyan-500/20 overflow-hidden">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 border-b border-cyan-600/30">
                <div className="flex items-center gap-4">
                  {/* Logo with fixed gradient */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-logo flex-center text-black font-bold text-xl">
                    G
                  </div>
                  <div>
                    <h2 className="text-xl font-light text-white">
                      ML Analytics Dashboard
                    </h2>
                    <p className="text-cyan-300/60 text-xs">
                      Live training • Privacy shielded
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  {["Scan", "Train", "Relay", "Secure"].map((t, i) => (
                    <button
                      key={i}
                      className={`px-4 py-1.5 text-xs rounded-full border ${
                        i === 3
                          ? "bg-cyan-500/20 border-cyan-400 text-cyan-100"
                          : "border-cyan-600/40 text-cyan-300"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Grid */}
              <div className="p-5 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4">
                  {/* Top 4 Metrics */}
                  {[
                    { l: "Models", v: "41.2k", c: "+12%" },
                    { l: "Accuracy", v: "94.3%", c: "+5.8%" },
                    { l: "Loss", v: "0.13", c: "-87%" },
                    { l: "Revenue", v: "$136M", c: "+28%" },
                  ].map((m, i) => (
                    <div key={i} className="lg:col-span-3 col-span-1">
                      <div className="bg-black/50 backdrop-blur border border-cyan-600/30 rounded-2xl p-4 text-center">
                        <p className="text-cyan-300 text-xs">{m.l}</p>
                        <p className="text-2xl font-light text-white mt-1">{m.v}</p>
                        <p className="text-cyan-400 text-xs">{m.c}</p>
                      </div>
                    </div>
                  ))}

                  {/* Ghost Rating Circle */}
                  <div className="lg:col-span-4 col-span-2 row-span-2">
                    <div className="bg-black/60 backdrop-blur-xl border border-cyan-500/40 rounded-2xl p-8 h-full flex flex-col items-center justify-center shadow-xl shadow-cyan-500/10">
                      <p className="text-cyan-400 text-sm font-medium mb-6 tracking-wide">
                        Ghost Rating
                      </p>
                      <div className="relative w-40 h-40">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                          <circle
                            cx="80"
                            cy="80"
                            r="70"
                            stroke="#0f3a3f"
                            strokeWidth="12"
                            fill="none"
                          />
                          <circle
                            cx="80"
                            cy="80"
                            r="70"
                            stroke="url(#grad)"
                            strokeWidth="12"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            className="transition-all duration-1000 ease-out glow-ring"
                            fill="none"
                          />
                          <defs>
                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#22d3ee" />
                              <stop offset="50%" stopColor="#06b6d4" />
                              <stop offset="100%" stopColor="#0891b2" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-5xl font-bold text-white">
                            {rating}
                            <span className="text-3xl text-cyan-400">%</span>
                          </span>
                        </div>
                      </div>
                      <p className="text-cyan-300 text-sm mt-6 font-light">
                        Stronger anonymity
                      </p>
                    </div>
                  </div>

                  {/* Training Loss Chart */}
                  <div className="lg:col-span-8 col-span-2">
                    <div className="bg-black/50 backdrop-blur border border-cyan-600/30 rounded-2xl p-5">
                      <h3 className="text-cyan-100 text-sm mb-3 flex items-center justify-between">
                        <span>Training Loss (100 Epochs)</span>
                        <span className="text-cyan-400 text-xs">Converged</span>
                      </h3>
                      <ResponsiveContainer width="100%" height={180}>
                        <AreaChart data={lossData}>
                          <defs>
                            <linearGradient id="lossgrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#f472b6" stopOpacity={0.9} />
                              <stop offset="50%" stopColor="#ec4899" stopOpacity={0.4} />
                              <stop offset="100%" stopColor="#ec4899" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <XAxis
                            dataKey="epoch"
                            stroke="#0891b2"
                            fontSize={11}
                            ticks={[1, 20, 40, 60, 80, 100]}
                          />
                          <YAxis stroke="#0891b2" fontSize={11} domain={[0, 2.5]} />
                          <Tooltip
                            contentStyle={{
                              background: "#1e1b4b",
                              border: "1px solid #ec4899",
                              borderRadius: "8px",
                            }}
                            labelStyle={{ color: "#ec4899" }}
                          />
                          <Area
                            type="monotone"
                            dataKey="loss"
                            stroke="#ec4899"
                            strokeWidth={3}
                            fill="url(#lossgrad)"
                            dot={false}
                            animationDuration={1500}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Live Conversions */}
                  <div className="lg:col-span-6 col-span-2">
                    <div className="bg-black/50 backdrop-blur border border-cyan-600/30 rounded-2xl p-5">
                      <h3 className="text-cyan-100 text-sm mb-3">Live Conversions</h3>
                      <ResponsiveContainer width="100%" height={160}>
                        <AreaChart data={conversionData}>
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#22d3ee"
                            fill="#22d3ee22"
                            strokeWidth={2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Model Accuracy */}
                  <div className="lg:col-span-6 col-span-2">
                    <div className="bg-black/50 backdrop-blur border border-cyan-600/30 rounded-2xl p-5">
                      <h3 className="text-cyan-100 text-sm mb-3">Model Accuracy</h3>
                      <ResponsiveContainer width="100%" height={160}>
                        <BarChart data={performanceData}>
                          <Bar dataKey="acc" fill="#22d3ee" radius={[8, 8, 0, 0]} />
                          <XAxis dataKey="month" stroke="#0891b2" fontSize={11} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}