export default function StatsSection() {
  const stats = [
    {
      number: "500+",
      label: "Cities worldwide",
      description: "Available in major cities across the globe"
    },
    {
      number: "100M+", 
      label: "Rides completed",
      description: "Millions of satisfied customers trust us"
    },
    {
      number: "5M+",
      label: "Active drivers",
      description: "Professional drivers ready to serve you"
    },
    {
      number: "4.8★",
      label: "Average rating",
      description: "Highly rated by our community of riders"
    }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by millions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join a global community of riders and drivers who choose UberRide for reliable, safe transportation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              
              <h3 className="text-2xl font-semibold text-white">
                {stat.label}
              </h3>
              
              <p className="text-gray-400 text-lg">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Be part of the UberRide community
            </h3>
            
            <p className="text-xl mb-8 opacity-90">
              Whether you're a rider looking for convenient transportation or a driver seeking flexible earning opportunities, UberRide connects communities worldwide
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold mb-4">For Riders</h4>
                <p className="text-lg opacity-90 mb-6">
                  Get reliable rides at the tap of a button. Safe, affordable, and always available.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Start riding
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold mb-4">For Drivers</h4>
                <p className="text-lg opacity-90 mb-6">
                  Drive when you want, earn what you need. Flexible opportunities that fit your schedule.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Start driving
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}