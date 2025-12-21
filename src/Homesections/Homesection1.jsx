'use client';
import {
  ResponsiveContainer,
  AreaChart,
  BarChart,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Bar,
  Line,
} from "recharts";

// Course enrollment growth
const enrollmentData = [
  { month: "Jan", students: 245 },
  { month: "Feb", students: 412 },
  { month: "Mar", students: 678 },
  { month: "Apr", students: 891 },
  { month: "May", students: 1243 },
  { month: "Jun", students: 1567 },
  { month: "Jul", students: 1891 },
  { month: "Aug", students: 2234 },
];

// Course completion rates
const completionData = [
  { course: "ML Basics", rate: 92 },
  { course: "Deep Learning", rate: 87 },
  { course: "AWS Deploy", rate: 94 },
  { course: "Azure ML", rate: 89 },
  { course: "GCP AI", rate: 91 },
  { course: "MLOps", rate: 85 },
];

// Daily active learners
const activeData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  active: 800 + Math.sin(i / 5) * 200 + Math.random() * 150,
}));

// Course ratings over time
const ratingData = [
  { week: "W1", rating: 4.2 },
  { week: "W2", rating: 4.4 },
  { week: "W3", rating: 4.5 },
  { week: "W4", rating: 4.6 },
  { week: "W5", rating: 4.7 },
  { week: "W6", rating: 4.8 },
  { week: "W7", rating: 4.9 },
  { week: "W8", rating: 4.9 },
];

export default function NigapeAnalytics() {
  const satisfaction = 94;
  const circumference = 2 * Math.PI * 70;
  const strokeDashoffset = circumference - (circumference * satisfaction) / 100;

  return (
    <>
      <style jsx global>{`
        .bg-gradient-ghost-bg {
          background: linear-gradient(135deg, #01161d 0%, #000c10 25%, #01161d 50%, #001f28 75%, #01161d 100%);
        }

        .bg-gradient-logo {
          background: linear-gradient(135deg, #22d3ee 0%, #06b6d4 50%, #0891b2 100%);
        }

        .flex-center {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .glow-ring {
          filter: drop-shadow(0 0 12px rgba(34, 211, 238, 0.7));
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-logo flex-center text-black font-bold text-xl animate-float">
                    N
                  </div>
                  <div>
                    <h2 className="text-xl font-light text-white">
                      Nigape Analytics Dashboard
                    </h2>
                    <p className="text-cyan-300/60 text-xs">
                      ML & Cloud Learning Platform • Live Insights
                    </p>
                  </div>
                </div>

                {/* <div className="flex gap-2">
                  {["Courses", "Students", "Analytics", "Cloud"].map((t, i) => (
                    <button
                      key={i}
                      className={`px-4 py-1.5 text-xs rounded-full border ${
                        i === 2
                          ? "bg-cyan-500/20 border-cyan-400 text-cyan-100"
                          : "border-cyan-600/40 text-cyan-300"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div> */}
              </div>

              {/* Main Grid */}
              <div className="p-5 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4">
                  {/* Top 4 Metrics */}
                  {[
                    { l: "Active Students", v: "2,234", c: "+18%" },
                    { l: "Completion Rate", v: "89.4%", c: "+5.2%" },
                    { l: "Avg Rating", v: "4.9★", c: "+0.3" },
                    { l: "Revenue", v: "$142K", c: "+32%" },
                  ].map((m, i) => (
                    <div key={i} className="lg:col-span-3 col-span-1">
                      <div className="bg-black/50 backdrop-blur border border-cyan-600/30 rounded-2xl p-4 text-center">
                        <p className="text-cyan-300 text-xs">{m.l}</p>
                        <p className="text-2xl font-light text-white mt-1">{m.v}</p>
                        <p className="text-cyan-400 text-xs">{m.c}</p>
                      </div>
                    </div>
                  ))}

                  {/* Student Satisfaction Circle */}
                  <div className="lg:col-span-4 col-span-2 row-span-2">
                    <div className="bg-black/60 backdrop-blur-xl border border-cyan-500/40 rounded-2xl p-8 h-full flex flex-col items-center justify-center shadow-xl shadow-cyan-500/10">
                      <p className="text-cyan-400 text-sm font-medium mb-6 tracking-wide">
                        Student Satisfaction
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
                            {satisfaction}
                            <span className="text-3xl text-cyan-400">%</span>
                          </span>
                        </div>
                      </div>
                      <p className="text-cyan-300 text-sm mt-6 font-light">
                        Based on 1,847 reviews
                      </p>
                    </div>
                  </div>

                  {/* Student Growth Chart */}
                  <div className="lg:col-span-8 col-span-2">
                    <div className="bg-black/50 backdrop-blur border border-cyan-600/30 rounded-2xl p-5">
                      <h3 className="text-cyan-100 text-sm mb-3 flex items-center justify-between">
                        <span>Student Growth (8 Months)</span>
                        <span className="text-cyan-400 text-xs">+816% Growth</span>
                      </h3>
                      <ResponsiveContainer width="100%" height={180}>
                        <AreaChart data={enrollmentData}>
                          <defs>
                            <linearGradient id="enrollgrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.9} />
                              <stop offset="50%" stopColor="#06b6d4" stopOpacity={0.4} />
                              <stop offset="100%" stopColor="#0891b2" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <XAxis
                            dataKey="month"
                            stroke="#0891b2"
                            fontSize={11}
                          />
                          <YAxis stroke="#0891b2" fontSize={11} />
                          <Tooltip
                            contentStyle={{
                              background: "#001f28",
                              border: "1px solid #22d3ee",
                              borderRadius: "8px",
                            }}
                            labelStyle={{ color: "#22d3ee" }}
                          />
                          <Area
                            type="monotone"
                            dataKey="students"
                            stroke="#22d3ee"
                            strokeWidth={3}
                            fill="url(#enrollgrad)"
                            dot={false}
                            animationDuration={1500}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Daily Active Learners */}
                  <div className="lg:col-span-6 col-span-2">
                    <div className="bg-black/50 backdrop-blur border border-cyan-600/30 rounded-2xl p-5">
                      <h3 className="text-cyan-100 text-sm mb-3">Daily Active Learners</h3>
                      <ResponsiveContainer width="100%" height={160}>
                        <LineChart data={activeData}>
                          <Line
                            type="monotone"
                            dataKey="active"
                            stroke="#22d3ee"
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Course Completion Rates */}
                  <div className="lg:col-span-6 col-span-2">
                    <div className="bg-black/50 backdrop-blur border border-cyan-600/30 rounded-2xl p-5">
                      <h3 className="text-cyan-100 text-sm mb-3">Course Completion Rates</h3>
                      <ResponsiveContainer width="100%" height={160}>
                        <BarChart data={completionData}>
                          <Bar dataKey="rate" fill="#22d3ee" radius={[8, 8, 0, 0]} />
                          <XAxis 
                            dataKey="course" 
                            stroke="#0891b2" 
                            fontSize={10}
                            angle={-15}
                            textAnchor="end"
                            height={60}
                          />
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