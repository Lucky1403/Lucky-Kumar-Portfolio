
export default function ProfileSection() {
  return (
    <section id="profile" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Profile Overview
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Personal Information */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-cyan-500 p-1">
                <img
                  src={`${import.meta.env.BASE_URL}assets/profile-picture.png`}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Lucky Kumar</h3>
              <p className="text-purple-400 font-medium">XR Developer & Gaming Technology</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <i className="ri-calendar-line text-purple-400 mr-3 w-5"></i>
                <span>Date of Birth: March 14, 2005</span>
              </div>
              <div className="flex items-center text-gray-300">
                <i className="ri-map-pin-line text-cyan-400 mr-3 w-5"></i>
                <span>New Delhi, India</span>
              </div>
              <div className="flex items-center text-gray-300">
                <i className="ri-graduation-cap-line text-pink-400 mr-3 w-5"></i>
                <span>B.Tech Computer Science (Gaming Tech)</span>
              </div>
              <div className="flex items-center text-gray-300">
                <i className="ri-building-line text-green-400 mr-3 w-5"></i>
                <span>VIT Bhopal University</span>
              </div>
              <div className="flex items-center text-gray-300">
                <i className="ri-star-line text-yellow-400 mr-3 w-5"></i>
                <span>CGPA: 9.65/10</span>
              </div>
            </div>
          </div>

          {/* Current Status */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <i className="ri-pulse-line text-cyan-400 mr-3"></i>
              Current Status
            </h3>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-xl p-4 border border-cyan-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Career Status</span>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">Available</span>
                </div>
                <p className="text-gray-400 text-sm">Open to Internships & Full-Time Roles</p>
              </div>

              <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-4 border border-pink-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Project Development</span>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full">In Progress</span>
                </div>
                <p className="text-gray-400 text-sm">Box Cricket VR</p>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl p-4 border border-purple-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Academic Status</span>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Active</span>
                </div>
                <p className="text-gray-400 text-sm">Final Year Student - VIT Bhopal</p>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <i className="ri-trophy-line text-pink-400 mr-3"></i>
              Key Highlights
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-white font-medium">Top 7 National Rank</p>
                  <p className="text-gray-400 text-sm">Innovate2Education Challenge, WAVES 2025</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-white font-medium">Experience in VR Hardware</p>
                  <p className="text-gray-400 text-sm">Meta Quest 2/3, Oculus Rift, HTC Vive Pro</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-white font-medium">Experience with Unity VR</p>
                  <p className="text-gray-400 text-sm">XR Design & Development </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-white font-medium">Research Experience</p>
                  <p className="text-gray-400 text-sm">Augmented Reality (AR) at IIT Delhi</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-white font-medium">Academic Excellence</p>
                  <p className="text-gray-400 text-sm">Consistent top performer with 9.65 CGPA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
