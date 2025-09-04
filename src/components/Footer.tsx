export default function Footer() {
  const footerLinks = {
    company: [
      "About us",
      "Careers", 
      "Press",
      "Blog",
      "Investors"
    ],
    products: [
      "UberX",
      "Uber Comfort", 
      "Uber Black",
      "Uber Eats",
      "Business"
    ],
    support: [
      "Help center",
      "Safety",
      "Contact us",
      "Lost items",
      "Insurance"
    ],
    legal: [
      "Privacy policy",
      "Terms of service",
      "Cookie policy", 
      "Accessibility",
      "Modern slavery"
    ]
  }

  const socialLinks = [
    { name: "Facebook", symbol: "f" },
    { name: "Twitter", symbol: "𝕏" },
    { name: "Instagram", symbol: "📷" },
    { name: "LinkedIn", symbol: "💼" },
    { name: "YouTube", symbol: "📺" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-2xl font-bold text-blue-400">UberRide</h3>
              <p className="text-gray-400 leading-relaxed">
                Your reliable partner for safe, convenient, and affordable transportation in cities worldwide.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <span className="text-sm">{social.symbol}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <button className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <button className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <button className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-12">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h4 className="text-2xl font-bold">Stay updated</h4>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates, promotions, and news
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* App Download Banner */}
        <div className="border-t border-gray-800 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h4 className="text-xl font-bold mb-2">Get the UberRide app</h4>
              <p className="text-gray-400">Available on iOS and Android</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl transition-all duration-300">
                <span className="text-xl">📱</span>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl transition-all duration-300">
                <span className="text-xl">🤖</span>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 UberRide Technologies Inc. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors duration-300">Privacy</button>
              <button className="hover:text-white transition-colors duration-300">Terms</button>
              <button className="hover:text-white transition-colors duration-300">Sitemap</button>
              <button className="hover:text-white transition-colors duration-300">Cookies</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}