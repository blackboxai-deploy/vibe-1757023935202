import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ServicesSection() {
  const services = [
    {
      title: "UberX",
      description: "Affordable, everyday rides",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2cae911d-3a15-4298-91fe-0dae26a4da4d.png",
      price: "From $8.50",
      features: ["4 seats", "Everyday rides", "Most popular"]
    },
    {
      title: "Uber Comfort", 
      description: "Newer cars with extra legroom",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9aeb855e-73ff-4d21-9a97-58a830b3cea9.png",
      price: "From $12.00",
      features: ["4 seats", "Extra legroom", "Quiet ride"]
    },
    {
      title: "Uber Black",
      description: "Premium rides in luxury vehicles",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3d1fae7c-c74a-4a24-89dd-922be92cbfca.png",
      price: "From $25.00", 
      features: ["4 seats", "Luxury vehicles", "Professional drivers"]
    },
    {
      title: "UberXL",
      description: "Bigger group? No problem",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d47e4f09-8bb2-441e-8875-fc918fbb25fe.png",
      price: "From $15.00",
      features: ["6 seats", "Extra space", "Group rides"]
    },
    {
      title: "Uber Eats",
      description: "Food delivery to your door",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7fd4b25b-1d3a-4080-9c4e-ebd905f24a98.png",
      price: "Delivery from $2.99",
      features: ["30min delivery", "1000+ restaurants", "Real-time tracking"]
    },
    {
      title: "Uber for Business",
      description: "Business travel solutions",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6ae99e3f-484a-490e-b84c-057100b328b4.png",
      price: "Custom pricing",
      features: ["Expense management", "Corporate accounts", "Priority support"]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose your ride
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From budget-friendly options to premium experiences, we have the perfect ride for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
              <div className="aspect-w-16 aspect-h-10">
                <img 
                  src={service.image}
                  alt={service.description}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4 text-lg">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300">
                  Select {service.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
            View all services
          </Button>
        </div>
      </div>
    </section>
  )
}