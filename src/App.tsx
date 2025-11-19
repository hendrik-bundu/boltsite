import { Clock, CheckCircle2, Calendar, Database, TrendingUp, Users, Home, Sparkles, ShoppingCart, Briefcase, MessageSquare, Network, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A] border-b border-[#D0342C]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/marspebblelogoonly.png" alt="Marspebble" className="w-15 h-10" />
            <span className="text-white text-2xl font-bold tracking-tight">Marspebble</span>
          </div>
          <button className="bg-[#D0342C] hover:bg-[#B02D26] text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#D0342C]/30">
            Try it Now
          </button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1A1A1A] via-[#1A1A1A] to-[#2A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#D0342C] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#D0342C] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <p className="text-[#D0342C] font-semibold text-sm tracking-wider uppercase mb-2">AI Agents Built for Real Business Results</p>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                The Power of Conversational AI on WhatsApp
              </h1>
              <p className="text-xl text-[#F2F2F2]/80 leading-relaxed">
                Capture leads, qualify them, answer questions, and book meetings — automatically.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="bg-white hover:bg-[#F2F2F2] text-[#D0342C] px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                  Try It Now
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/FordWA.png"
                alt="WhatsApp Sales Agent Demo"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4">How it Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-[#D0342C] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Leads message your WhatsApp number (text or voicenote)</h3>
                <div className="mt-6 bg-[#F2F2F2] rounded-lg p-4">
                  <MessageSquare className="w-12 h-12 text-[#D0342C] mx-auto" />
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-[#D0342C]"></div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-[#D0342C] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">AI handles questions, captures details, and qualifies them</h3>
                <div className="mt-6 bg-[#F2F2F2] rounded-lg p-4">
                  <Sparkles className="w-12 h-12 text-[#D0342C] mx-auto" />
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-[#D0342C]"></div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <div className="w-16 h-16 bg-[#D0342C] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Appointments, leads, and notes sync automatically to your CRM</h3>
              <div className="mt-6 bg-[#F2F2F2] rounded-lg p-4">
                <Database className="w-12 h-12 text-[#D0342C] mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-bold mb-4">
              <span className="text-[#25D366]">Benefits</span>
              <span className="text-white"> of The WhatsApp Sales Agent</span>
            </h2>
          </div>
          <div className="flex justify-center">
            <img
              src="/WhatsApp_2.png"
              alt="WhatsApp Sales Agent Benefits"
              className="w-full max-w-4xl h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Use Cases</h2>
            <p className="text-xl text-[#F2F2F2]/70">Built for your industry</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#F2F2F2] rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#D0342C]/10 rounded-full flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-[#D0342C]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Real Estate</h3>
              <p className="text-[#1A1A1A]/70">Qualify buyers/sellers & book viewings</p>
            </div>

            <div className="bg-[#F2F2F2] rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#D0342C]/10 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-[#D0342C]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Beauty & Wellness</h3>
              <p className="text-[#1A1A1A]/70">Bookings & service info</p>
            </div>

            <div className="bg-[#F2F2F2] rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#D0342C]/10 rounded-full flex items-center justify-center mb-6">
                <ShoppingCart className="w-8 h-8 text-[#D0342C]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">E-commerce</h3>
              <p className="text-[#1A1A1A]/70">Order support & product questions</p>
            </div>

            <div className="bg-[#F2F2F2] rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#D0342C]/10 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-[#D0342C]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Professional Services</h3>
              <p className="text-[#1A1A1A]/70">Lead capture & appointment scheduling</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#D0342C] to-[#B02D26] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Automating Your Sales on WhatsApp — Request a Demo
          </h2>
          <p className="text-xl text-white/90 mb-10">
            See how MarsPebble can transform your business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="border-2 border-white hover:bg-white/10 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300">
              Try It Now
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/90">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-semibold">Secure & Compliant</span>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1A1A] py-8 border-t border-[#D0342C]/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src="/marspebblelogoonly.png" alt="Marspebble" className="w-6 h-6" />
            <span className="text-white text-xl font-bold">MarsPebble</span>
          </div>
          <p className="text-[#F2F2F2]/60 text-sm">AI Agents Built for Real Business Results</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
