export default function FeaturesSection() {
  const features = [
    {
      title: "Safety First",
      description: "Your safety is our priority. All drivers are background-checked and vehicles are regularly inspected.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f5c8afc7-f391-4382-9c8c-f19aa675a9ed.png",
      stats: "99.9% safe trips"
    },
    {
      title: "Real-Time Tracking", 
      description: "Track your ride in real-time and share your trip details with friends and family for peace of mind.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6a970829-69e7-4d08-b529-a106100025e0.png",
      stats: "Live GPS updates"
    },
    {
      title: "Flexible Payment",
      description: "Pay with cash, card, or digital wallet. Split fares with friends and get instant receipts.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/550a548a-cb61-4f9d-b4e5-c7eb663b9627.png",
      stats: "6 payment methods"
    },
    {
      title: "24/7 Availability",
      description: "Need a ride at 3 AM? No problem. UberRide is available around the clock, every day of the year.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ad0d2617-3f53-4fe6-9ab3-1b8fe705be80.png",
      stats: "Always available"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why choose UberRide?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing you with the best ride experience through innovative features and reliable service
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="flex-1">
                <img 
                  src={feature.image}
                  alt={feature.description}
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              <div className="flex-1 space-y-6">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  {feature.stats}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="pt-4">
                  <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to experience the difference?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join millions of riders who trust UberRide for their daily transportation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get your first ride
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}