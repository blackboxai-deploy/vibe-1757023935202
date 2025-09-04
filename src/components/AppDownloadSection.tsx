export default function AppDownloadSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Content */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get the UberRide app
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Download our app for the fastest, most convenient way to request rides, track your driver, and manage your trips all in one place.
              </p>
            </div>

            {/* App Features */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">One-tap booking</h4>
                  <p className="text-gray-600">Request a ride with just one tap and get matched instantly</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Live tracking</h4>
                  <p className="text-gray-600">See your driver's location and estimated arrival time</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Seamless payments</h4>
                  <p className="text-gray-600">Pay automatically with your preferred method</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Trip history</h4>
                  <p className="text-gray-600">Access receipts and review your past rides</p>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="text-2xl">📱</div>
                <div className="text-left">
                  <div className="text-sm opacity-80">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="text-2xl">🤖</div>
                <div className="text-left">
                  <div className="text-sm opacity-80">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            {/* QR Code Option */}
            <div className="pt-6">
              <p className="text-gray-600 mb-4">Or scan the QR code with your phone camera</p>
              <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center border-2 border-gray-200">
                <span className="text-4xl">📄</span>
              </div>
            </div>
          </div>

          {/* Right side - Phone Mockup */}
          <div className="flex-1 flex justify-center">
            <div className="relative max-w-sm">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/45a286f1-cad2-4eb9-a6f7-04dd288aee42.png"
                alt="UberRide mobile app interface showing ride booking and tracking features"
                className="w-full h-auto rounded-3xl shadow-2xl border border-gray-200"
              />
              
              {/* Floating Feature Cards */}
              <div className="absolute -left-8 top-20 bg-white rounded-lg shadow-lg p-4 max-w-xs hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-lg">⚡</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Fast pickup</div>
                    <div className="text-sm text-gray-600">Average 3 minutes</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-8 bottom-32 bg-white rounded-lg shadow-lg p-4 max-w-xs hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-lg">💳</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Secure payment</div>
                    <div className="text-sm text-gray-600">Multiple options</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}