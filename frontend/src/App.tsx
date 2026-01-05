import { useState, useEffect } from 'react'
import './App.css'

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
  status: string;
}

function App() {
  const [welcomeData, setWelcomeData] = useState<WelcomeData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch data from Django API
    fetch('http://localhost:8000/api/accounts/welcome/')
      .then(response => response.json())
      .then(data => {
        setWelcomeData(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-siyb-blue"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            🚀 SIYB Platform
          </h1>
          <p className="text-gray-600 mt-2">Start and Improve Your Business Training Platform</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {welcomeData && (
          <div className="space-y-8">
            {/* Welcome Message */}
            <div className="siyb-card">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {welcomeData.message}
              </h2>
              <p className="text-gray-700 text-lg">
                {welcomeData.description}
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Status: {welcomeData.status}
                </span>
              </div>
            </div>

            {/* Training Modules */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Training Modules</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(welcomeData.modules).map(([key, value]) => (
                  <div key={key} className="siyb-card hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-siyb-blue rounded-lg flex items-center justify-center text-white font-semibold">
                        {key === 'SIYB_Game' ? '🎮' : key}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{key}</h4>
                        <p className="text-sm text-gray-600">{value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* API Status */}
            <div className="siyb-card bg-blue-50">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🔗 API Connection Status
              </h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-700">Connected to Django Backend</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Backend API: <code className="bg-gray-200 px-2 py-1 rounded">http://localhost:8000/api/</code>
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
