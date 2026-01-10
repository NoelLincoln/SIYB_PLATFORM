import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

interface WelcomeData {
  message: string;
  description: string;
  modules: {
    GYB: string;
    SYB: string;
    IYB: string;
    EYB: string;
    SIYB_Game: string;
  };
}

const moduleDescriptions: Record<string, { title: string; icon: string; fullDescription: string }> =
  {
    GYB: {
      title: 'Generate Your Business Idea',
      icon: '🌱',
      fullDescription:
        'Targets those who want to start a business by helping them develop a concrete business idea. It focuses on self-assessment of entrepreneurial strengths and weaknesses, generating and analyzing business ideas, and selecting the most viable one.',
    },
    SYB: {
      title: 'Start Your Business',
      icon: '📈',
      fullDescription:
        'Designed for those with concrete business ideas to help them actualize their plans. It guides entrepreneurs through systematic and simple steps of preparing a comprehensive business plan.',
    },
    IYB: {
      title: 'Improve Your Business',
      icon: '💼',
      fullDescription:
        'Targets existing entrepreneurs by introducing them to good principles of business management. It covers six key modules: Marketing, Costing, Buying and Stock Control, Record Keeping, Planning for Your Business, and People and Productivity.',
    },
    EYB: {
      title: 'Expand Your Business',
      icon: '🏆',
      fullDescription:
        'Provides growth-oriented small and medium enterprises with practical tools for business expansion. It focuses on business strategy and actionable steps to scale and grow your business effectively.',
    },
    SIYB_Game: {
      title: 'SIYB Game',
      icon: '🎮',
      fullDescription:
        'A practical simulation tool that helps entrepreneurs understand the realities of starting and running a business through interactive, hands-on learning experiences.',
    },
  };

function App() {
  const [welcomeData, setWelcomeData] = useState<WelcomeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from Django API
    fetch('http://localhost:8000/api/accounts/welcome/')
      .then((response) => response.json())
      .then((data) => {
        setWelcomeData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-siyb-blue"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 via-siyb-blue to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to SIYB Platform!
          </h1>
          <p className="text-gray-200 text-xl">Start and Improve Your Business Training Platform</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {welcomeData && (
          <div className="space-y-12">
            {/* About SIYB Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">What is SIYB?</h2>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  SIYB (Start and Improve Your Business) is a comprehensive training program
                  designed to help entrepreneurs and small business owners develop essential
                  business skills.
                </p>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Our curriculum covers everything from business planning and financial management
                  to marketing strategies and customer relations, providing practical knowledge that
                  can be immediately applied to real-world business scenarios.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-siyb-blue text-2xl mt-1">✓</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Practical Skills</h3>
                      <p className="text-gray-600">Learn actionable business strategies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-siyb-green text-2xl mt-1">✓</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Expert Guidance</h3>
                      <p className="text-gray-600">Train with industry professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-siyb-orange text-2xl mt-1">✓</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Global Network</h3>
                      <p className="text-gray-600">Connect with entrepreneurs worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="flex items-center justify-center">
                <div className="w-full h-80 bg-gradient-to-br from-siyb-blue/10 to-siyb-green/10 rounded-2xl border-2 border-dashed border-siyb-blue/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-gray-600 font-semibold">Add your illustration here</p>
                    <p className="text-gray-500 text-sm mt-2">
                      Replace with your custom image or SVG
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Modules */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Training Modules</h2>
                <p className="text-gray-600">
                  Explore our comprehensive business training programs
                </p>
                <div className="h-1 w-20 bg-siyb-blue rounded-full mt-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(welcomeData.modules).map(([key]) => {
                  const moduleInfo = moduleDescriptions[key];
                  return (
                    <div
                      key={key}
                      className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-siyb-blue"
                    >
                      {/* Card Header with Icon */}
                      <div className="bg-gradient-to-r from-siyb-blue to-siyb-green p-8 text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                          {moduleInfo.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{moduleInfo.title}</h3>
                      </div>

                      {/* Card Body */}
                      <div className="p-8">
                        <p className="text-gray-700 text-base leading-relaxed mb-6">
                          {moduleInfo.fullDescription}
                        </p>
                        <button className="w-full bg-siyb-blue text-white py-3 rounded-lg font-semibold hover:bg-siyb-blue/90 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
// test
