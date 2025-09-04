export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Request your ride",
      description: "Open the app, enter your destination, and choose your ride type. Get an upfront price estimate.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c1a09e7f-8626-46a8-8cde-ff8f3e480d61.png"
    },
    {
      number: "02", 
      title: "Get matched with a driver",
      description: "We'll connect you with a nearby driver. See their photo, name, vehicle info, and track their arrival.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ab4b9366-4bb4-437f-8aac-cf862e69725d.png"
    },
    {
      number: "03",
      title: "Track your ride",
      description: "Follow your driver's location in real-time. Share your trip details with friends and family for safety.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f04b211a-2e6b-4189-8fcf-f8edd5aba760.png"
    },
    {
      number: "04",
      title: "Pay and rate",
      description: "Payment is automatic through your preferred method. Rate your driver and help maintain our quality standards.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8781953c-6db3-40d5-8001-fe2150ddf89b.png"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How UberRide works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting a ride is simple, fast, and reliable. Here's how it works in just a few easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {steps.map((step, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              <div className="ml-22 mt-6">
                <img 
                  src={step.image}
                  alt={step.description}
                  className="w-full max-w-md h-64 object-cover rounded-xl shadow-lg border border-gray-200"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to get started?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Download the UberRide app and take your first ride in minutes
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">📱</span>
                </div>
                <span className="text-lg font-semibold text-gray-700">Download the app</span>
              </div>
              
              <div className="hidden sm:block w-8 h-px bg-gray-300"></div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">🚗</span>
                </div>
                <span className="text-lg font-semibold text-gray-700">Request your ride</span>
              </div>
              
              <div className="hidden sm:block w-8 h-px bg-gray-300"></div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-lg">✨</span>
                </div>
                <span className="text-lg font-semibold text-gray-700">Enjoy the ride</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}