import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Master Simple hero: large static typographic name and profile photo.
 */
const Hero = () => {
  const largeText = 'HARIPRASAD H';

  // simple, clear presentation: monospace uppercase name and larger, clear photo
  return (
    <section id="home" className="min-h-screen flex items-center justify-center overflow-hidden relative pt-28 pb-16 lg:py-20">
      <div className="max-w-7xl w-full px-5 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] items-center gap-10 lg:gap-16">
          <div className="max-w-2xl lg:max-w-none justify-self-center lg:justify-self-start text-center lg:text-left overflow-hidden">
            <h1 className="font-body uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[6rem] sm:whitespace-nowrap leading-none tracking-wide text-charcoal dark:text-offwhite">
              {largeText}
            </h1>
            {/* Summary directly under the name */}
            <div className="mt-8">
              <p className="text-base lg:text-lg leading-relaxed text-gray-900 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">Product-focused Frontend Developer with hands-on experience in building scalable full-stack applications using React, FastAPI, and MySQL. Proficient in Python and Java, with a strong foundation in backend development, problem-solving, and data-driven applications. Skilled in developing responsive and user-centric interfaces, designing RESTful APIs, and implementing secure authentication systems. Experienced in working within Linux environments, managing development workflows, and deploying modern web applications. Passionate about crafting intuitive user experiences and writing clean, maintainable, and efficient code, with a strong drive to build impactful real-world solutions while continuously learning modern technologies.</p>

              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link to="/projects" className="inline-block">
                  <button className="btn-primary min-h-[44px] px-6">View Projects</button>
                </Link>
                <Link to="/contact" className="inline-block">
                  <button className="px-6 py-2.5 rounded-full border border-black/15 dark:border-white/20 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors min-h-[44px]">Contact</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-end">
            <img
              src="/profile.jpeg"
              alt="Profile"
              onError={(e) => { e.currentTarget.src = '/profile-sample.svg'; }}
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] max-w-full rounded-2xl object-cover border border-black/6 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.14)] dark:shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
              style={{ objectPosition: '50% 18%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
