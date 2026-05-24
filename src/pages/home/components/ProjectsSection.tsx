
import { useState } from 'react';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Echoes in the Void',
      category: 'vr',
      description: 'Currently developing a sci-fi VR survival game set on a space station invaded by invisible aliens. Players must protect themselves and the station using Unity VR.',
      image: 'https://readdy.ai/api/search-image?query=Sci-fi%20VR%20survival%20game%20screenshot%20showing%20futuristic%20space%20station%20interior%20with%20dark%20corridors%2C%20invisible%20alien%20threats%2C%20high-tech%20equipment%2C%20atmospheric%20lighting%2C%20Unity%20game%20engine%20graphics%2C%20immersive%20VR%20experience%20with%20holographic%20interfaces%20and%20space%20environment&width=600&height=400&seq=echoes-void&orientation=landscape',
      tech: ['Unity', 'C#', 'XR Interaction Toolkit'],
      features: ['Spatial Audio', 'Hand Tracking via Controllers', 'Unique Mechanics', 'AI Enemies'],
      // github: 'https://github.com/Lucky1403',
      // demo: '#',
      status: 'In Development'
    },
    {
      id: 2,
      title: 'The Woods VR',
      category: 'vr',
      description: 'Developed a VR zombie shooter game with immersive mechanics and interactions using Unity Game Engine. Players navigate a dark forest environment, combating AI-controlled zombies.',
      image: 'https://readdy.ai/api/search-image?query=VR%20zombie%20shooter%20game%20screenshot%20showing%20dark%20forest%20environment%20with%20zombies%2C%20first-person%20view%20with%20weapon%2C%20atmospheric%20lighting%2C%20Unity%20game%20engine%20graphics%2C%20horror%20survival%20gameplay%2C%20immersive%20VR%20experience%20with%20realistic%20shadows%20and%20fog%20effects&width=600&height=400&seq=woods-vr&orientation=landscape',
      tech: ['Unity', 'C#', 'XR Interaction Toolkit'],
      features: ['Immersive Combat', 'Environmental Audio', 'AI Zombies', 'Fast-Paced Action'],
      github: 'https://github.com/Kaustubh-Garg/The-Woods-VR',
      demo: 'https://youtu.be/vKry8ztTy4c'
    },
    {
      id: 3,
      title: 'Musical Auditorium VR',
      category: 'vr',
      description: 'Created a VR musical auditorium experience where users play musical instruments in a live concert setting.',
      image: 'https://readdy.ai/api/search-image?query=VR%20musical%20auditorium%20with%20virtual%20instruments%2C%20concert%20hall%20environment%2C%20users%20playing%20piano%20and%20guitar%20in%20VR%2C%20stage%20lighting%2C%20audience%20seating%2C%20immersive%20music%20experience%2C%20Unity%203D%20graphics%2C%20realistic%20concert%20venue%20atmosphere&width=600&height=400&seq=musical-vr&orientation=landscape',
      tech: ['Unity', 'XR Interaction Toolkit', 'Audio Systems', 'C#'],
      features: ['Hand Tracking via Controllers', 'Spatial Audio', 'Physics based Interactions', 'Real-Time Audio'],
      github: 'https://github.com/Lucky1403/Musical-Auditorium-VR',
      // demo: '#'
    },
    {
      id: 4,
      title: 'Battle of Cerium',
      category: 'game',
      description: 'Designed a Third-Person Shooter (TPS) game with engaging story-driven gameplay in Unity. Enemy spaceships invaded on your home planet Cerium, and you must defend it!',
      image: `${import.meta.env.BASE_URL}assets/Battle of Cerium Image.png`,
      tech: ['Unity', 'C#', 'Game Design'],
      features: ['Story Mode', 'Combat System', 'Dynamic AI'],
      github: 'https://github.com/Lucky1403/Battle-of-Cerium',
      // demo: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'web',
      description: 'Created a personal responsive portfolio website showcasing my Profile, Interests, Experience, Recognition & Achievements, Projects and technical skills.',
      image: `${import.meta.env.BASE_URL}assets/Portfolio Website.png`,
      tech: ['HTML', 'CSS', 'JavaScript', 'Vite'],
      features: ['Responsive Design', 'Interactive UI', 'Project Showcase', 'Skills & Experience'],
      github: 'https://github.com/Lucky1403/Portfolio-Website',
      demo: 'https://portfolio-website-eight-bay-36.vercel.app/'
    },
    {
      id: 6,
      title: 'Currency Calculator',
      category: 'web',
      description: 'Built a real-time currency converter using JavaScript and API Integration, enabling seamless conversions across 180+ global currencies with live updates. Features a user-friendly and responsive design.',
      image: 'https://readdy.ai/api/search-image?query=Currency%20calculator%20web%20application%20interface%20showing%20exchange%20rates%2C%20multiple%20currency%20options%2C%20real-time%20conversion%2C%20clean%20modern%20UI%20design%2C%20financial%20app%20interface%2C%20responsive%20web%20design&width=600&height=400&seq=currency-calc&orientation=landscape',
      tech: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      features: ['Real-Time Rates', 'Multi-Currency Support', 'Clean UI', 'API Integration'],
      github: 'https://github.com/Lucky1403/Currency-Converter',
      // demo: '#'
    },
    {
      id: 7,
      title: 'Weather Report',
      category: 'python',
      description: 'Built a Python tool that fetches real-time weather data using API integration.',
      image: 'https://readdy.ai/api/search-image?query=Weather%20application%20interface%20showing%20current%20weather%20conditions%2C%20temperature%20display%2C%20weather%20icons%2C%20forecast%20data%2C%20Python%20GUI%20application%2C%20clean%20weather%20app%20design%2C%20API%20data%20visualization&width=600&height=400&seq=weather-app&orientation=landscape',
      tech: ['Python', 'API Integration', 'Data Processing'],
      features: ['Real-Time Data', 'Weather Forecasts', 'Location-Based', 'CLI Tool'],
      // github: 'https://github.com/Lucky1403',
      // demo: '#'
    },
    {
      id: 8,
      title: 'Video Downloader',
      category: 'python',
      description: 'Created a YouTube video downloader with highest/requested quality download capabilities.',
      image: `${import.meta.env.BASE_URL}assets/Video Downloader Project.png`,
      tech: ['Python', 'yt-dlp', 'CLI', 'File Management'],
      features: ['Quality Selection', 'Progress Tracking', 'Format Options'],
      github: 'https://github.com/Lucky1403/YouTube-Video-Downloader',
      demo: 'https://www.youtube.com/watch?v=9D4WrMRwGfs'
    },
    {
      id: 9,
      title: 'AR Fruit Slash',
      category: 'ar',
      description: 'Created a Unity-based Augmented Reality (AR) game leverages AR Foundation to project the addictive fruit-slicing action onto any real-world surface, turning your environment into a dynamic arcade.',
      image: `${import.meta.env.BASE_URL}assets/AR Fruit Slash.png`,
      tech: ['Unity', 'C#', 'AR Foundation', 'AR Core'],
      features: ['Mobile Platform', 'Engaging', 'Augmented Reality'],
      github: 'https://github.com/Lucky1403/AR-Fruit-Slash',
      // demo: '#',
      status: 'In Development'
    },
    {
      id: 10,
      title: 'Deepseek Based NPC',
      category: 'vr',
      description: 'Created a DeepSeek API-powered NPC offers fully customizable, real-time conversational intelligence for virtual worlds, allowing its role and knowledge to be defined entirely by the use case.',
      image: `${import.meta.env.BASE_URL}assets/Deepseek NPC.png`,
      tech: ['Unity', 'C#', 'API Integration', 'Wit.ai'],
      features: ['Real-time Interaction', 'Text-to-Speech', 'Speech-to-Text'],
      github: 'https://github.com/Lucky1403/Deepseek-NPC',
      demo: 'https://youtu.be/GL3c6sDD5Gk',
    },
    {
      id: 11,
      title: 'Solar System AR',
      category: 'ar',
      description: 'Developed a markerless AR simulation that projects a precised and accurate, interactive 3D Solar System onto any surface using real-time plane detection and engages in interactive learning.',
      image: `${import.meta.env.BASE_URL}assets/Solar System AR.png`,
      tech: ['Unity', 'C#', 'Vuforia Engine SDK'],
      features: ['Markerless AR', 'Interactive learning', 'Ground Plane Detection'],
      github: 'https://github.com/Lucky1403/Solar-System-AR',
      // demo: '#',
      status: 'In Development'
    },
    {
      id: 12,
      title: 'Box Cricket VR',
      category: 'vr',
      description: 'Box Cricket VR brings the high-octane energy of indoor cricket to a fully immersive virtual stadium, allowing players to step onto the pitch from any lab or workspace.',
      image: `${import.meta.env.BASE_URL}assets/Box Cricket.png`,
      tech: ['Unity', 'C#', 'Unity Meta Movement SDK'],
      features: ['Immersive Experience', 'Realistic Physics', 'Full Body Tracking'],
      // github: 'https://github.com/Lucky1403/Solar-System-AR',
      // demo: '#',
      status: 'In Development'
    },
    {
      id: 13,
      title: 'Emissions Eye',
      category: 'web',
      description: 'Emissions Eye is an interactive web platform designed to quantify personal carbon footprints through dynamic user assessments and historical data tracking. It features a competitive leaderboard and visualizes progress over time using integrated data analytics to encourage sustainable lifestyle changes.',
      image: `${import.meta.env.BASE_URL}assets/Emission-Eye.png`,
      tech: ['HTML', 'CSS', 'Javascript', 'Flask', 'MySQL'],
      features: ['Dynamic Analytics', 'Advanced Carbon Calculator', 'Gamified Tier System'],
      github: 'https://github.com/Lucky1403/Emissions-Eye-Webpage',
      demo: 'https://emissions-eye-webpage.vercel.app/cover',
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'vr', label: 'VR', count: projects.filter(p => p.category === 'vr').length },
    { id: 'ar', label: 'AR', count: projects.filter(p => p.category === 'ar').length },
    { id: 'game', label: 'Games', count: projects.filter(p => p.category === 'game').length },
    { id: 'web', label: 'Web Dev', count: projects.filter(p => p.category === 'web').length },
    { id: 'python', label: 'Python', count: projects.filter(p => p.category === 'python').length }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black via-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Explore my diverse portfolio of XR Projects, games, and web applications showcasing technical skills and creativity.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 whitespace-nowrap cursor-pointer ${activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-transparent shadow-lg'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:border-purple-500/50 hover:text-white'
                }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.category === 'vr' ? 'bg-purple-500/80 text-white' :
                      project.category === 'game' ? 'bg-cyan-500/80 text-white' :
                        project.category === 'web' ? 'bg-pink-500/80 text-white' :
                          'bg-green-500/80 text-white'
                    }`}>
                    {project.category.toUpperCase()}
                  </span>
                  {project.status && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/80 text-white">
                      {project.status}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.features && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md border border-purple-500/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <i className="ri-github-fill mr-2"></i>
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
                  >
                    <i className="ri-external-link-line mr-2"></i>
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Lucky1403"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-github-fill mr-3 text-xl"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
