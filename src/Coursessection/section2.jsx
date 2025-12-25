// app/components/CoursePackagesSection.jsx
"use client";
import { Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { courses } from "@/Data/data"; // Import your JSON data

export default function CoursePackagesSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");

  // Filter logic using data from JSON
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      (selectedCategory === "Diploma" && course.level === "diploma") ||
      (selectedCategory === "Advanced" && course.level === "advanced") ||
      (selectedCategory === "Certification" && course.level === "certificate");
    const matchesDuration =
      selectedDuration === "All" ||
      course.duration.toLowerCase().includes(selectedDuration.toLowerCase());
    return matchesSearch && matchesCategory && matchesDuration;
  });

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedDuration("All");
    setSearchTerm("");
  };

  return (
    <>
      <style jsx global>{`
        @keyframes subtleGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }

        .bg-gradient-diagonal {
          background: linear-gradient(135deg, #01161d 0%, #000c10 25%, #01161d 50%, #001f28 75%, #01161d 100%);
        }

        .bg-glow-pulse { animation: subtleGlow 8s ease-in-out infinite; }

        .filter-card {
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(34, 211, 238, 0.4);
        }

        .course-card {
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(34, 211, 238, 0.3);
          transition: all 0.5s ease;
          overflow: hidden;
        }

        .course-card:hover {
          border-color: #67e8f9;
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(103, 232, 249, 0.25);
        }

        .badge-bestseller {
          background: linear-gradient(90deg, #ffd700, #ffaa00);
          color: black;
          font-weight: bold;
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
          font-size: 0.75rem;
          display: inline-block;
        }
      `}</style>

      <section className="bg-gradient-diagonal relative py-16 lg:py-24 overflow-hidden lg:overflow-visible">
        {/* Background glows */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] bg-glow-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] bg-glow-pulse" style={{ animationDelay: "3s" }}></div>
        </div>

        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ML & Cloud <span className="text-cyan-400">Courses</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto">
              Industry-aligned programs designed to launch or accelerate your tech career.
            </p>
          </div>

          {/* Desktop Layout: Sidebar + Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-8 relative">
            {/* Desktop Filters */}
            <div className="col-span-1">
              <div className="filter-card rounded-3xl p-5 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto">
                <h3 className="text-cyan-300 text-base font-semibold mb-3">Search</h3>
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-black/40 backdrop-blur-md border border-cyan-800/50 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all text-sm"
                  />
                </div>

                <h4 className="text-cyan-300 text-base font-semibold mb-3">Category</h4>
                <div className="space-y-2 mb-6">
                  {["All", "Diploma", "Advanced", "Certification"].map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          selectedCategory === cat ? "border-cyan-400 bg-cyan-400/30" : "border-cyan-800/50"
                        }`}
                        onClick={() => setSelectedCategory(cat)}
                      >
                        {selectedCategory === cat && <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full" />}
                      </div>
                      <span className="text-gray-300 text-sm">{cat}</span>
                    </label>
                  ))}
                </div>

                <h4 className="text-cyan-300 text-base font-semibold mb-3">Duration</h4>
                <div className="space-y-2 mb-6">
                  {["All", "3 months", "4 months", "6 months", "12 months"].map((dur) => (
                    <label key={dur} className="flex items-center gap-3 cursor-pointer">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          selectedDuration === dur ? "border-cyan-400 bg-cyan-400/30" : "border-cyan-800/50"
                        }`}
                        onClick={() => setSelectedDuration(dur)}
                      >
                        {selectedDuration === dur && <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full" />}
                      </div>
                      <span className="text-gray-300 text-sm">{dur}</span>
                    </label>
                  ))}
                </div>

                <button
                  onClick={clearFilters}
                  className="w-full px-4 py-2.5 rounded-full bg-cyan-900/50 text-cyan-400 border border-cyan-800/50 hover:border-cyan-400 hover:bg-cyan-900/30 transition-all text-sm"
                >
                  Clear filters
                </button>
              </div>
            </div>

            {/* Course Grid */}
            <div className="col-span-3">
              <CourseGrid courses={filteredCourses} />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="relative mb-6 max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-black/40 backdrop-blur-md border border-cyan-800/50 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all text-sm"
              />
            </div>

            <div className="mb-6">
              <h4 className="text-cyan-300 text-sm font-semibold mb-2 px-2">Category</h4>
              <div className="flex flex-wrap gap-2">
                {["All", "Diploma", "Advanced", "Certification"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? "bg-cyan-600 text-white shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                        : "bg-black/30 text-gray-300 hover:bg-black/40"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-cyan-300 text-sm font-semibold mb-2 px-2">Duration</h4>
              <div className="flex flex-wrap gap-2">
                {["All", "3 months", "4 months", "6 months", "12 months"].map((dur) => (
                  <button
                    key={dur}
                    onClick={() => setSelectedDuration(dur)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedDuration === dur
                        ? "bg-cyan-600 text-white shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                        : "bg-black/30 text-gray-300 hover:bg-black/40"
                    }`}
                  >
                    {dur}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center mb-6">
              <button
                onClick={clearFilters}
                className="text-cyan-400 text-sm hover:underline"
              >
                Clear all filters
              </button>
            </div>

            <CourseGrid courses={filteredCourses} />
          </div>
        </div>
      </section>
    </>
  );
}

// Fixed Course Grid Component
function CourseGrid({ courses }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Link key={course.id} href={`/courses/${course.id}`}>
            <div className="course-card rounded-2xl overflow-hidden cursor-pointer">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <img
                  src={course.image}
                  alt={course.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                {course.id === 1 && (
                  <div className="absolute top-4 left-4 badge-bestseller">
                    BESTSELLER
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-grow bg-[#1a1a2e]">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 min-h-[3.5rem]">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">NIMLACC Academy</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 font-bold text-sm">{course.rating}</span>
                    <span className="text-gray-400 text-xs">({course.students.toLocaleString()})</span>
                  </div>
                  <span className="text-gray-300 text-xs bg-gray-800/50 px-3 py-1 rounded-full">
                    {course.duration}
                  </span>
                </div>
                <div className="mt-auto">
                  <p className="text-cyan-400 text-sm mb-4">
                    or <span className="font-semibold text-green-400">{course.monthlyPrice}</span>
                  </p>
                  <button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {courses.length === 0 && (
        <p className="text-center text-gray-400 text-xl mt-12">
          No courses found matching your filters.
        </p>
      )}
    </>
  );
}