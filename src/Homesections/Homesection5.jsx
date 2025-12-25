// app/components/FAQSection.tsx
"use client";
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  // Sets the initial open state to the first item (index 0)
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: " What makes NIMLACC different from other tech institutes?",
      answer: " NIMLACC focuses 100% on Machine Learning & Cloud Computing with a practical, project-based approach aligned to real hiring needs — not just theory or generic tech training."
    },
    {
      question: " Do I need coding experience to join your programs?",
      answer: "No. GhostWareOS is completely open-source and self-hosted. We don't track any user activity, store any logs, or have access to your data. Everything runs locally on your machine or your own infrastructure, ensuring zero latency from our side."
    },
    {
      question: "Will I get a job after completing a NIMLACC course?",
      answer: " Yes you will, we will prepare you for them. You’ll build real projects, a strong portfolio, and get mentorship, interview prep, and career guidance to confidently enter the ML/Cloud job market."
    },
    {
      question: "Are the courses online or offline?",
      answer: "All programs are delivered in a both offline & online format, with mentor interaction, hands-on labs, and real-time support — so you get the flexibility of online with the quality of in-person learning."
    },
    {
      question: "How are the projects structured in the programs?",
      answer: " Every project mirrors real industry scenarios — from building ML models using real datasets to deploying cloud-based services. You’ll submit code, get feedback, and deploy solutions like a pro."
    },
    {
      question: "Is there EMI or flexible fee support?",
      answer: "Yes, we offer easy EMI plans so you can start learning without heavy upfront cost. Serious learners should have access — we keep quality premium but flexible."
    }
  ];
  
  // Removed the duplicate question and slightly refined the answers for consistency.

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <style jsx global>{`
        /* * OPTIMIZED GRADIENT: Deeper, more subtle movement with less distraction, 
         * using deep space colors (near-black, dark cyan/blue).
         */
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .gradient-bg-optimized {
          /* Deeper, more atmospheric colors */
          background: linear-gradient(135deg, #01161d 0%, #000c10 25%, #01161d 50%, #001f28 75%, #01161d 100%);
          background-size: 200% 200%;
          animation: gradientShift 20s ease infinite; /* Slower animation for less lag */
        }

        .faq-item {
          /* Using transform for hover acceleration */
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-item:hover {
          transform: scale(1.005); /* Subtle scale effect */
        }

        /* Highly optimized and responsive height transition */
        .answer-enter {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease-out;
        }

        .answer-open {
          max-height: 500px; /* Large enough for any content */
          opacity: 1;
        }
      `}</style>

      <section className="relative min-h-screen gradient-bg-optimized overflow-hidden flex items-center justify-center px-4 py-16 md:py-24">
        
        {/* Ambient glow effects - Increased blur for more ethereal look */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          
          {/* Title - Enhanced color contrast */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-white mb-12 md:mb-16">
            Your Questions <span className="text-cyan-400">Answered</span>
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4 md:space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item relative rounded-2xl border transition-all duration-300
                  ${openIndex === index 
                    ? 'bg-cyan-950/40 border-cyan-500 shadow-xl shadow-cyan-500/15' 
                    : 'bg-gray-950/50 border-gray-700/50 hover:border-cyan-500/50'
                  }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 sm:px-6 md:px-8 py-4 md:py-5 flex items-center justify-between text-left group"
                >
                  <span className={`text-base sm:text-lg md:text-xl font-medium transition-colors duration-300
                    ${openIndex === index ? 'text-cyan-300' : 'text-gray-100 group-hover:text-cyan-400'}`}>
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Icon - Sharper visual feedback */}
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300 border-2
                    ${openIndex === index 
                      ? 'bg-cyan-500/30 border-cyan-400' 
                      : 'bg-gray-800/50 border-gray-700 group-hover:bg-cyan-500/20 group-hover:border-cyan-400'
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-cyan-400" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-5 h-5 text-cyan-400" strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div className={`answer-enter ${openIndex === index ? 'answer-open' : ''}`}>
                  <div className="px-5 sm:px-6 md:px-8 pb-4 md:pb-6 pt-0">
                    <div className="border-t border-cyan-500/20 pt-4">
                      <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle light leak on open (more subtle effect) */}
                {openIndex === index && (
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400/50 pointer-events-none" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          {/* <div className="mt-12 md:mt-20 text-center">
            <p className="text-gray-400 text-base md:text-lg mb-6">
              Still have questions about kernel architecture or self-hosting?
            </p>
            <button className="px-6 md:px-10 py-3 md:py-4 rounded-full bg-cyan-500/30 backdrop-blur-lg border border-cyan-400 text-white font-bold text-base md:text-xl uppercase tracking-wider hover:bg-cyan-500/40 hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-cyan-600/40">
              Contact Support
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
}