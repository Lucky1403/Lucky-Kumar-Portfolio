import { useState } from 'react';

interface JourneyItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  summary: string;
  color: 'purple' | 'cyan' | 'pink';
  year: string;
}

export default function JourneySection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const journeyData: JourneyItem[] = [
    {
      id: 1,
      role: 'XR Research Intern',
      company: 'IIT Delhi',
      duration: 'May - July 2025',
      summary: 'Contributed in the development of an AR application for dental tumor visualization and surgical assistance under faculty guidance at IIT Delhi. Worked on real-time facial landmark tracking using MediaPipe and assisted with 3D model alignment in Unity.',
      color: 'cyan',
      year: '2025'
    },
    {
      id: 2,
      role: 'Game Developer',
      company: 'LioMonk',
      duration: 'Nov 2025',
      summary: 'Developed an interactive 3D environment in Unity featuring an Art Gallery showcasing renowned artists from the 1970s to the 2020s, along with a cafeteria, an auditorium, and a landscaped outdoor environment to enhance the user experience.',
      color: 'purple',
      year: '2025'
    },
    {
      id: 3,
      role: 'Immersive Experience Designer',
      company: 'Wabric',
      duration: 'Jan - Mar 2026',
      summary: 'Contributed to building an AR application prototype in Unity, focusing on real-time rendering and Computer Vision integration. Assisted in creating and optimizing 3D assets and animations using Blender and Adobe After Effects.',
      color: 'pink',
      year: '2026'
    }
  ];

  const colorMapping = {
    purple: {
      hex: '#a855f7',
      rgb: '168, 85, 247',
      text: 'text-purple-400'
    },
    cyan: {
      hex: '#06b6d4',
      rgb: '6, 182, 212',
      text: 'text-cyan-400'
    },
    pink: {
      hex: '#ec4899',
      rgb: '236, 72, 153',
      text: 'text-pink-400'
    }
  };

  return (
    <section id="journey" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <style>{`
        /* Vertical timeline axis line */
        .journey-timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, rgba(168,85,247,0.3), rgba(6,182,212,0.3), rgba(236,72,153,0.3));
          z-index: 1;
        }
        @media (min-width: 768px) {
          .journey-timeline-line {
            left: 50%;
            transform: translateX(-50%);
          }
        }
        @media (max-width: 767px) {
          .journey-timeline-line {
            left: 1.5rem;
          }
        }

        /* Timeline row item container */
        .journey-item-row {
          position: relative;
          display: flex;
          width: 100%;
          min-height: 140px;
          align-items: center;
          margin-bottom: 2.5rem;
        }
        @media (min-width: 768px) {
          .journey-item-row {
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 4rem;
          }
        }
        @media (max-width: 767px) {
          .journey-item-row {
            flex-direction: column;
            align-items: flex-start;
            padding-left: 3.5rem;
          }
        }

        /* Desktop Column Layout */
        .journey-col-desktop {
          display: none;
        }
        @media (min-width: 768px) {
          .journey-col-desktop {
            display: flex;
            flex-direction: column;
            width: calc(50% - 3.5rem);
            justify-content: center;
          }
          .journey-col-desktop.left {
            text-align: right;
            align-items: flex-end;
            padding-right: 1.5rem;
          }
          .journey-col-desktop.right {
            text-align: left;
            align-items: flex-start;
            padding-left: 1.5rem;
          }
        }

        /* Mobile Card container */
        .journey-col-mobile {
          width: 100%;
          display: block;
        }
        @media (min-width: 768px) {
          .journey-col-mobile {
            display: none;
          }
        }

        /* Axis Stem & Dot Container for Desktop */
        .journey-axis-desktop {
          display: none;
        }
        @media (min-width: 768px) {
          .journey-axis-desktop {
            display: flex;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 7rem;
            height: 3rem;
            align-items: center;
            justify-content: center;
            z-index: 10;
          }
        }

        /* Axis Stem & Dot Container for Mobile */
        .journey-axis-mobile {
          display: flex;
          position: absolute;
          left: 1.5rem;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 2.5rem;
          height: 2rem;
          align-items: center;
          z-index: 10;
        }
        @media (min-width: 768px) {
          .journey-axis-mobile {
            display: none;
          }
        }

        /* Horizontal stems */
        .journey-stem-line {
          height: 2px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          transition: all 0.3s ease;
        }
        .journey-stem-line.to-left {
          right: 50%;
          width: 3.5rem;
        }
        .journey-stem-line.to-right {
          left: 50%;
          width: 3.5rem;
        }
        .journey-stem-line.to-mobile-right {
          left: 0;
          width: 2.5rem;
        }

        .journey-dot-node {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid #000;
          position: absolute;
          top: 50%;
          transition: all 0.3s ease;
        }
        .journey-dot-node.on-left {
          left: 0;
          transform: translate(-50%, -50%);
        }
        .journey-dot-node.on-right {
          right: 0;
          transform: translate(50%, -50%);
        }
        .journey-dot-node.on-mobile-right {
          right: 0;
          top: 50%;
          transform: translate(50%, -50%);
        }

        /* Axis Year badge */
        .journey-badge-year {
          position: absolute;
          top: -16px;
          font-size: 0.75rem;
          font-weight: 700;
          background-color: #000;
          padding: 2px 8px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          white-space: nowrap;
        }
      `}</style>

      {/* Background Blurs */}
      <div className="absolute top-40 left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center" style={{ marginBottom: '6.5rem' }}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            A chronological timeline of my professional experiences, research internships, and jobs.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative">
          {/* Vertical axis lines */}
          <div className="journey-timeline-line"></div>

          <div className="journey-timeline-list">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isHovered = hoveredId === item.id;
              const theme = colorMapping[item.color];

              return (
                <div
                  key={item.id}
                  className="journey-item-row"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* LEFT COLUMN (Desktop only) */}
                  <div className="journey-col-desktop left">
                    {isEven ? (
                      <div
                        className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border transition-all duration-300 transform"
                        style={{
                          borderColor: isHovered ? `rgba(${theme.rgb}, 0.5)` : 'rgba(255, 255, 255, 0.1)',
                          boxShadow: isHovered ? `0 4px 20px rgba(${theme.rgb}, 0.15)` : 'none',
                          transform: isHovered ? 'scale(1.02)' : 'scale(1)'
                        }}
                      >
                        <span className="text-gray-400 text-xs font-semibold tracking-wider block mb-1">{item.duration}</span>
                        <h3 className="text-lg font-bold text-white mb-1">{item.role}</h3>
                        <h4 className={`text-sm font-semibold ${theme.text} mb-2`}>{item.company}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.summary}</p>
                      </div>
                    ) : (
                      <div className="text-4xl font-extrabold text-white/20 select-none pr-8">
                        {item.year}
                      </div>
                    )}
                  </div>

                  {/* MIDDLE STEM & DOT FOR DESKTOP */}
                  <div className="journey-axis-desktop">
                    <div
                      className="journey-badge-year"
                      style={{
                        color: theme.hex,
                        borderColor: isHovered ? `rgba(${theme.rgb}, 0.3)` : 'rgba(255, 255, 255, 0.15)'
                      }}
                    >
                      {item.year}
                    </div>

                    {/* Horizontal stem branching from axis */}
                    <div
                      className={`journey-stem-line ${isEven ? 'to-left' : 'to-right'}`}
                      style={{
                        background: `linear-gradient(${isEven ? 'to left' : 'to right'}, ${theme.hex}, transparent)`,
                        opacity: isHovered ? 1 : 0.6
                      }}
                    ></div>

                    {/* Glowing dot node at the end of the stem (next to card) */}
                    <div
                      className={`journey-dot-node ${isEven ? 'on-left' : 'on-right'}`}
                      style={{
                        transform: isHovered
                          ? `${isEven ? 'translate(-50%, -50%)' : 'translate(50%, -50%)'} scale(1.3)`
                          : `${isEven ? 'translate(-50%, -50%)' : 'translate(50%, -50%)'}`,
                        backgroundColor: theme.hex,
                        boxShadow: `0 0 12px ${theme.hex}`
                      }}
                    ></div>
                  </div>

                  {/* MIDDLE STEM & DOT FOR MOBILE */}
                  <div className="journey-axis-mobile">
                    {/* Horizontal stem line */}
                    <div
                      className="journey-stem-line to-mobile-right"
                      style={{
                        background: `linear-gradient(to right, ${theme.hex}, transparent)`,
                        opacity: isHovered ? 1 : 0.6
                      }}
                    ></div>
                    {/* Glowing dot node */}
                    <div
                      className="journey-dot-node on-mobile-right"
                      style={{
                        transform: isHovered ? 'translate(50%, -50%) scale(1.3)' : 'translate(50%, -50%)',
                        backgroundColor: theme.hex,
                        boxShadow: `0 0 12px ${theme.hex}`
                      }}
                    ></div>
                  </div>

                  {/* RIGHT COLUMN (Desktop only) */}
                  <div className="journey-col-desktop right">
                    {!isEven ? (
                      <div
                        className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border transition-all duration-300 transform"
                        style={{
                          borderColor: isHovered ? `rgba(${theme.rgb}, 0.5)` : 'rgba(255, 255, 255, 0.1)',
                          boxShadow: isHovered ? `0 4px 20px rgba(${theme.rgb}, 0.15)` : 'none',
                          transform: isHovered ? 'scale(1.02)' : 'scale(1)'
                        }}
                      >
                        <span className="text-gray-400 text-xs font-semibold tracking-wider block mb-1">{item.duration}</span>
                        <h3 className="text-lg font-bold text-white mb-1">{item.role}</h3>
                        <h4 className={`text-sm font-semibold ${theme.text} mb-2`}>{item.company}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.summary}</p>
                      </div>
                    ) : (
                      <div className="text-4xl font-extrabold text-white/20 select-none pl-8">
                        {item.year}
                      </div>
                    )}
                  </div>

                  {/* MOBILE COLUMN */}
                  <div className="journey-col-mobile">
                    {/* Year badge for Mobile above card */}
                    <div className="text-sm font-bold tracking-wide mb-2" style={{ color: theme.hex }}>
                      {item.year} ({item.duration})
                    </div>

                    {/* Mobile Card */}
                    <div
                      className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border transition-all duration-300 transform"
                      style={{
                        borderColor: isHovered ? `rgba(${theme.rgb}, 0.5)` : 'rgba(255, 255, 255, 0.1)',
                        boxShadow: isHovered ? `0 4px 20px rgba(${theme.rgb}, 0.15)` : 'none',
                        transform: isHovered ? 'scale(1.02)' : 'scale(1)'
                      }}
                    >
                      <h3 className="text-lg font-bold text-white mb-1">{item.role}</h3>
                      <h4 className={`text-sm font-semibold ${theme.text} mb-2`}>{item.company}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.summary}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
