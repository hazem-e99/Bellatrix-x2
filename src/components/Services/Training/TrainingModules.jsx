import React from 'react';

const TrainingModules = ({ keyModulesSection, keyModules, renderIcon }) => {
  return (
    <div className="py-12 relative overflow-hidden animate-background-glow" style={{
      backgroundColor: '#001038',
      animation: 'background-glow 12s ease-in-out infinite'
    }}>
      {/* Creative Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Holographic Knowledge Web */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 animate-knowledge-flow">
          <svg viewBox="0 0 1200 800" className="w-full h-full">
            <defs>
              <linearGradient id="holoKnowledge" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:1}} />
                <stop offset="33%" style={{stopColor:'#191970', stopOpacity:0.8}} />
                <stop offset="66%" style={{stopColor:'#25274d', stopOpacity:0.6}} />
                <stop offset="100%" style={{stopColor:'#ffffff', stopOpacity:0.4}} />
              </linearGradient>
              <filter id="holoGlow">
                <feGaussianBlur stdDeviation="30" result="coloredBlur"/>
                <feGaussianBlur stdDeviation="20" result="coloredBlur2"/>
                <feGaussianBlur stdDeviation="10" result="coloredBlur3"/>
                <feGaussianBlur stdDeviation="5" result="coloredBlur4"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur2"/>
                  <feMergeNode in="coloredBlur3"/>
                  <feMergeNode in="coloredBlur4"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#holoGlow)">
              {/* Knowledge Nodes - Brain-like Network */}
              <circle cx="150" cy="200" r="8" fill="url(#holoKnowledge)" className="animate-brain-pulse"/>
              <circle cx="300" cy="150" r="12" fill="url(#holoKnowledge)" className="animate-brain-pulse-delay-1"/>
              <circle cx="450" cy="250" r="6" fill="url(#holoKnowledge)" className="animate-brain-pulse-delay-2"/>
              <circle cx="600" cy="180" r="10" fill="url(#holoKnowledge)" className="animate-brain-pulse"/>
              <circle cx="750" cy="300" r="7" fill="url(#holoKnowledge)" className="animate-brain-pulse-delay-1"/>
              <circle cx="900" cy="200" r="9" fill="url(#holoKnowledge)" className="animate-brain-pulse-delay-2"/>
              <circle cx="1050" cy="250" r="5" fill="url(#holoKnowledge)" className="animate-brain-pulse"/>
              
              {/* Synaptic Connections with Learning Signals */}
              <path d="M150,200 Q225,120 300,150" stroke="url(#holoKnowledge)" strokeWidth="2" opacity="0.8" strokeDasharray="8,4" className="animate-learning-signal"/>
              <path d="M300,150 Q375,200 450,250" stroke="url(#holoKnowledge)" strokeWidth="2" opacity="0.8" strokeDasharray="8,4" className="animate-learning-signal-delay-1"/>
              <path d="M450,250 Q525,215 600,180" stroke="url(#holoKnowledge)" strokeWidth="2" opacity="0.8" strokeDasharray="8,4" className="animate-learning-signal-delay-2"/>
              <path d="M600,180 Q675,240 750,300" stroke="url(#holoKnowledge)" strokeWidth="2" opacity="0.8" strokeDasharray="8,4" className="animate-learning-signal"/>
              <path d="M750,300 Q825,250 900,200" stroke="url(#holoKnowledge)" strokeWidth="2" opacity="0.8" strokeDasharray="8,4" className="animate-learning-signal-delay-1"/>
              <path d="M900,200 Q975,225 1050,250" stroke="url(#holoKnowledge)" strokeWidth="2" opacity="0.8" strokeDasharray="8,4" className="animate-learning-signal-delay-2"/>
              
              {/* Cross-connections for neural complexity */}
              <path d="M150,200 Q400,100 600,180" stroke="url(#holoKnowledge)" strokeWidth="1" opacity="0.4" strokeDasharray="4,8" className="animate-neural-cross"/>
              <path d="M300,150 Q600,350 900,200" stroke="url(#holoKnowledge)" strokeWidth="1" opacity="0.4" strokeDasharray="4,8" className="animate-neural-cross-delay"/>
            </g>
          </svg>
        </div>
        
        {/* Digital Learning Constellation */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-25 animate-constellation-rotate">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <radialGradient id="starGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:1}} />
                <stop offset="50%" style={{stopColor:'#191970', stopOpacity:0.8}} />
                <stop offset="100%" style={{stopColor:'#25274d', stopOpacity:0}} />
              </radialGradient>
              <filter id="starGlow">
                <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                <feGaussianBlur stdDeviation="8" result="coloredBlur2"/>
                <feGaussianBlur stdDeviation="3" result="coloredBlur3"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur2"/>
                  <feMergeNode in="coloredBlur3"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#starGlow)">
              {/* Learning Stars */}
              <polygon points="200,50 210,80 240,80 218,98 228,128 200,110 172,128 182,98 160,80 190,80" fill="url(#starGrad)" className="animate-twinkle"/>
              <polygon points="100,150 107,170 127,170 111,182 118,202 100,190 82,202 89,182 73,170 93,170" fill="url(#starGrad)" className="animate-twinkle-delay-1"/>
              <polygon points="300,200 307,220 327,220 311,232 318,252 300,240 282,252 289,232 273,220 293,220" fill="url(#starGrad)" className="animate-twinkle-delay-2"/>
              <polygon points="150,300 157,320 177,320 161,332 168,352 150,340 132,352 139,332 123,320 143,320" fill="url(#starGrad)" className="animate-twinkle"/>
              <polygon points="320,120 325,135 340,135 328,145 333,160 320,152 307,160 312,145 300,135 315,135" fill="url(#starGrad)" className="animate-twinkle-delay-1"/>
              
              {/* Constellation Lines */}
              <line x1="200" y1="80" x2="300" y2="220" stroke="url(#starGrad)" strokeWidth="1.5" opacity="0.6" strokeDasharray="6,3" className="animate-constellation-line"/>
              <line x1="100" y1="170" x2="150" y2="320" stroke="url(#starGrad)" strokeWidth="1.5" opacity="0.6" strokeDasharray="6,3" className="animate-constellation-line-delay"/>
              <line x1="300" y1="220" x2="320" y2="135" stroke="url(#starGrad)" strokeWidth="1.5" opacity="0.6" strokeDasharray="6,3" className="animate-constellation-line"/>
            </g>
          </svg>
        </div>

        {/* Floating Code Particles */}
        <div className="absolute bottom-1/4 left-1/6 w-80 h-80 opacity-30 animate-code-drift">
          <svg viewBox="0 0 320 320" className="w-full h-full">
            <defs>
              <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:1}} />
                <stop offset="50%" style={{stopColor:'#191970', stopOpacity:0.8}} />
                <stop offset="100%" style={{stopColor:'#25274d', stopOpacity:0.6}} />
              </linearGradient>
              <filter id="codeGlow">
                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                <feGaussianBlur stdDeviation="4" result="coloredBlur2"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur2"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#codeGlow)" fill="url(#codeGrad)">
              {/* Code Symbols */}
              <text x="50" y="80" fontSize="16" className="animate-code-float">{'{ }'}</text>
              <text x="150" y="120" fontSize="14" className="animate-code-float-delay-1">{'< />'}</text>
              <text x="250" y="100" fontSize="18" className="animate-code-float-delay-2">{'( )'}</text>
              <text x="80" y="180" fontSize="12" className="animate-code-float">{'[ ]'}</text>
              <text x="200" y="220" fontSize="15" className="animate-code-float-delay-1">{'<>'}</text>
              <text x="120" y="250" fontSize="13" className="animate-code-float-delay-2">{'=/='}</text>
              <text x="280" y="200" fontSize="16" className="animate-code-float">{'+'}</text>
              <text x="40" y="240" fontSize="14" className="animate-code-float-delay-1">{'*'}</text>
              <text x="180" y="60" fontSize="12" className="animate-code-float-delay-2">{'#'}</text>
              <text x="260" y="280" fontSize="15" className="animate-code-float">{'@'}</text>
            </g>
          </svg>
        </div>
        
        {/* Digital Matrix Rain */}
        <div className="absolute top-0 right-1/8 w-40 h-full opacity-20 animate-matrix-rain">
          <svg viewBox="0 0 120 800" className="w-full h-full">
            <defs>
              <linearGradient id="matrixGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:1}} />
                <stop offset="50%" style={{stopColor:'#191970', stopOpacity:0.8}} />
                <stop offset="100%" style={{stopColor:'#25274d', stopOpacity:0.4}} />
              </linearGradient>
              <filter id="matrixGlow">
                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#matrixGlow)" fill="url(#matrixGrad)">
              <text x="10" y="50" fontSize="12" className="animate-matrix-fall">1</text>
              <text x="30" y="100" fontSize="10" className="animate-matrix-fall-delay-1">0</text>
              <text x="50" y="80" fontSize="14" className="animate-matrix-fall-delay-2">1</text>
              <text x="70" y="130" fontSize="11" className="animate-matrix-fall">0</text>
              <text x="90" y="90" fontSize="13" className="animate-matrix-fall-delay-1">1</text>
              <text x="15" y="200" fontSize="9" className="animate-matrix-fall-delay-2">0</text>
              <text x="35" y="250" fontSize="12" className="animate-matrix-fall">1</text>
              <text x="55" y="220" fontSize="10" className="animate-matrix-fall-delay-1">0</text>
              <text x="75" y="280" fontSize="11" className="animate-matrix-fall-delay-2">1</text>
              <text x="95" y="240" fontSize="13" className="animate-matrix-fall">0</text>
            </g>
          </svg>
        </div>
        
        {/* Geometric Learning Patterns */}
        <div className="absolute top-1/2 left-1/8 w-64 h-64 opacity-25 animate-geometric-pulse">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="geoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:0.8}} />
                <stop offset="50%" style={{stopColor:'#191970', stopOpacity:0.6}} />
                <stop offset="100%" style={{stopColor:'#25274d', stopOpacity:0.4}} />
              </linearGradient>
            </defs>
            <g stroke="url(#geoGrad)" strokeWidth="2" fill="none">
              <polygon points="100,20 130,60 100,100 70,60" className="animate-geo-rotate"/>
              <circle cx="100" cy="100" r="40" strokeDasharray="8,4" className="animate-geo-rotate-reverse"/>
              <rect x="60" y="60" width="80" height="80" strokeDasharray="6,3" className="animate-geo-scale"/>
              <polygon points="100,40 120,80 100,120 80,80" strokeDasharray="4,6" className="animate-geo-morph"/>
            </g>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {keyModulesSection.title.split(' ')[0]} <span className="text-blue-400">{keyModulesSection.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {keyModulesSection.description}
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyModules.map((module, index) => (
            <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 rounded-3xl p-6 border border-gray-600/50 shadow-2xl hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${
                index % 4 === 0 ? 'from-blue-500/30 to-cyan-500/30' :
                index % 4 === 1 ? 'from-blue-400/30 to-purple-500/30' :
                index % 4 === 2 ? 'from-blue-600/30 to-cyan-400/30' :
                'from-blue-700/30 to-purple-600/30'
              } rounded-full opacity-20 transform translate-x-12 -translate-y-12 group-hover:opacity-40 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-br ${
                  index % 4 === 0 ? 'from-blue-500 to-blue-600' :
                  index % 4 === 1 ? 'from-blue-400 to-blue-500' :
                  index % 4 === 2 ? 'from-blue-600 to-blue-700' :
                  'from-blue-700 to-blue-800'
                } rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  {renderIcon(module.icon, "w-6 h-6 text-white")}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {module.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {module.description}
                </p>
                <div className="text-xs text-blue-400 font-medium">
                  Duration: {module.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingModules; 