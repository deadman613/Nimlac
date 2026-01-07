"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Star,
  Clock,
  Users,
  CheckCircle,
  Award,
  Laptop,
  ArrowLeft,
  Play,
} from "lucide-react";
import { getCourseById } from "@/Data/data";

// ✅ Helper to format student numbers (e.g., 1500 → 1.5K)
const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
};



export default function ParticularCourse() {
  const { id } = useParams();
  const router = useRouter();
  const [expandedMonth, setExpandedMonth] = useState(null);

  const course = getCourseById(id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent text-white">
        Course not found
      </div>
    );
  }
//   card  right wala

  const CourseInfoCard = () => (
  <div 
    className="w-full md:w-96 bg-gray-900 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-6 space-y-6 sticky top-20 max-h-[80vh] overflow-hidden"
    style={{
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
    }}
  >
    <style jsx>{`
      div {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      div::-webkit-scrollbar {
        display: none;
      }
    `}</style>

    {/* Course Image — taller to match wider card */}
    <img
      src={course.image.trim()}
      alt={course.title}
      className="w-full h-48 object-cover rounded-xl mb-4"
    />

    {/* Duration & Rating */}
    <div className="space-y-3 pt-4 border-t border-gray-700">
      <div className="flex items-center gap-2 text-gray-300">
        <Clock className="w-4 h-4 text-cyan-400" />
        <span>Duration: <strong>{course.duration}</strong></span>
      </div>
      <div className="flex items-center gap-2 text-gray-300">
        <Star className="w-4 h-4 text-yellow-400 fill-current" />
        <span>Rating: <strong>{course.rating}</strong> ({formatNumber(course.students)} students)</span>
      </div>
    </div>

    {/* Payment Options — improved centering & size */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div className="bg-gray-800/50 p-4 rounded-lg text-center">
        <div className="text-xs text-gray-400">Full Payment</div>
        <div className="text-2xl font-bold text-white mt-1">{course.price}</div>
        <div className="text-xs text-gray-400 line-through mt-1">{course.originalPrice}</div>
        <div className="text-xs text-red-400">{course.discount}</div>
      </div>
      <div className="bg-gray-800/50 p-4 rounded-lg text-center">
        <div className="text-xs text-gray-400">Easy Installments</div>
        <div className="text-2xl font-bold text-cyan-400 mt-1">
          ₹{parseInt(course.monthlyPrice.replace(/[^\d]/g, ''))}
        </div>
        <div className="text-xs text-gray-400 mt-1">/month</div>
        <div className="text-xs text-gray-400">{course.monthlyPayments} payments</div>
      </div>
    </div>

    {/* Enroll Button */}
    <button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold py-3.5 rounded-full mt-4">
      Enroll now
    </button>

    {/* What's Included */}
    <div className="pt-6 border-t border-gray-700 pb-6">
      <h4 className="text-sm font-semibold text-white mb-3 text-center">This course includes:</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        {course.includes.slice(0, 5).map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
        {course.includes.length > 5 && (
          <li className="text-gray-400 text-xs italic text-center">+{course.includes.length - 5} more</li>
        )}
      </ul>
    </div>
  </div>
);

  return (
    <div className="bg-transparent min-h-screen pt-20 pb-16">
      <div className="max-w-[1350px] mx-auto pt-20 px-2 sm:px-6">
        {/* Back Button */}
        <button
          onClick={() => router.push("/courses")}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-10"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Courses</span>
        </button>

        {/* Mobile: New card on top */}
        <div className="block md:hidden mb-10">
          <CourseInfoCard />
        </div>

        {/* Desktop: Two-column layout */}
        <div className="hidden md:flex gap-20">
          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            <div className="rounded-2xl overflow-hidden mb-10">
              <img
                src={course.image.trim()}
                alt={course.title}
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="mb-10">
              <span className="text-cyan-400 text-sm bg-cyan-900/20 px-3 py-1 rounded-full">
                {course.level} • {course.duration}
              </span>
              <h1 className="text-4xl font-bold text-white mt-4 mb-4">
                {course.title}
              </h1>
              <p className="text-gray-300 mb-6">{course.description}</p>

              <div className="flex flex-wrap gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>
                    {course.rating} ({course.students.toLocaleString()} students)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span>{course.mode}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-2xl mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                What You'll Learn
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.whatYouWillLearn.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-2xl mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Curriculum</h2>
              <div className="space-y-4">
                {course.modulesByMonth.map((mod) => (
                  <div
                    key={mod.month}
                    className="border-b border-gray-700 pb-4 last:border-0"
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() =>
                        setExpandedMonth(
                          expandedMonth === mod.month ? null : mod.month
                        )
                      }
                    >
                      <div>
                        <h3 className="font-bold text-white">
                          Month {mod.month}: {mod.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {mod.hours} hours
                        </p>
                      </div>
                      <span className="text-cyan-400">▼</span>
                    </div>
                    {expandedMonth === mod.month && (
                      <ul className="mt-3 space-y-2">
                        {mod.topics.map((topic, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-gray-300 text-sm"
                          >
                            <Play className="w-3 h-3 text-cyan-400" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Instructor</h2>
              <div className="flex items-center gap-4">
                <div className="bg-[#0c0e12] p-1.5 rounded-xl border border-gray-800 flex items-center justify-center overflow-hidden" style={{minWidth:'56px', minHeight:'56px'}}>
                  <img
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    className="w-16 h-16 object-cover object-top rounded-lg scale-110"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white">
                    {course.instructor.name}
                  </h3>
                  <p className="text-cyan-400 text-sm">
                    {course.instructor.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to start?
              </h3>
              <button className="bg-gradient-to-r from-cyan-400 to-cyan-300 text-black font-bold px-8 py-3.5 rounded-full">
                Enroll Now & Start Learning
              </button>
            </div>
          </div>

          {/* Sticky Sidebar - NOW with fixed height and scroll */}
          <div className="w-80 shrink-0">
            <CourseInfoCard />
          </div>
        </div>

        {/* Mobile: Full content below new card */}
        <div className="md:hidden space-y-10">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={course.image.trim()}
              alt={course.title}
              className="w-full h-64 object-cover"
            />
          </div>

          <div>
            <span className="text-cyan-400 text-sm bg-cyan-900/20 px-3 py-1 rounded-full">
              {course.level} • {course.duration}
            </span>
            <h1 className="text-2xl font-bold text-white mt-4 mb-4">
              {course.title}
            </h1>
            <p className="text-gray-300 mb-6">{course.description}</p>

            <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{course.rating}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>{course.duration}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 p-5 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-3">
              What You'll Learn
            </h2>
            <ul className="space-y-2">
              {course.whatYouWillLearn.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-300 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800/30 p-5 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-3">Curriculum</h2>
            <div className="space-y-4">
              {course.modulesByMonth.map((mod) => (
                <div
                  key={mod.month}
                  className="border-b border-gray-700 pb-4 last:border-0"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() =>
                      setExpandedMonth(
                        expandedMonth === mod.month ? null : mod.month
                      )
                    }
                  >
                    <div>
                      <h3 className="font-bold text-white">Month {mod.month}</h3>
                      <p className="text-sm text-gray-400">{mod.title}</p>
                    </div>
                    <span className="text-cyan-400 text-sm">▼</span>
                  </div>
                  {expandedMonth === mod.month && (
                    <ul className="mt-3 space-y-1.5">
                      {mod.topics.map((topic, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-gray-300 text-sm"
                        >
                          <Play className="w-3 h-3 text-cyan-400" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/30 p-5 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-3">Instructor</h2>
            <div className="flex items-center gap-4">
              <img
                src={course.instructor.image}
                alt={course.instructor.name}
                className="w-14 h-14 rounded-full"
              />
              <div>
                <h3 className="font-bold text-white text-lg">
                  {course.instructor.name}
                </h3>
                <p className="text-cyan-400 text-sm">
                  {course.instructor.title}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-6">
            <button className="bg-gradient-to-r from-cyan-400 to-cyan-300 text-black font-bold w-full py-3.5 rounded-full">
              Enroll Now & Start Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}