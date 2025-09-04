"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function HeroSection() {
  const [pickupLocation, setPickupLocation] = useState('')
  const [destination, setDestination] = useState('')

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/82047fc5-2777-4c66-97bf-1bd3454fab89.png" 
          alt="Modern city skyline at night with moving traffic lights and urban transportation"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Go anywhere with
          <span className="block text-blue-400">UberRide</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Request a ride, hop in, and go. Your journey starts with just a tap.
        </p>

        {/* Ride Request Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
          <div className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Enter pickup location"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="bg-white/90 border-white/30 text-gray-900 placeholder-gray-600 h-14 text-lg rounded-xl"
              />
            </div>
            
            <div>
              <Input
                type="text"
                placeholder="Where to?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="bg-white/90 border-white/30 text-gray-900 placeholder-gray-600 h-14 text-lg rounded-xl"
              />
            </div>
            
            <Button 
              size="lg" 
              className="w-full h-14 text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get a ride now
            </Button>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-white/80">
              Available in <span className="font-semibold text-blue-400">500+ cities</span> worldwide
            </p>
          </div>
        </div>

        {/* Quick Options */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
            Schedule for later
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
            Business travel
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
            Delivery service
          </Button>
        </div>
      </div>
    </section>
  )
}