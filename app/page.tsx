import Link from 'next/link';
import { ArrowRight, Network, Shield, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-screen bg-[#0a192f] text-white'>
      <header className='fixed w-full bg-[#0a192f]/90 backdrop-blur-sm z-50'>
        <nav className='container mx-auto px-6 py-4'>
          <div className='flex justify-between items-center'>
            <div className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent '>
              <img
                src={'/Image sans arrière-plan.png'}
                className='h-24 flex items-center justify-center'
              ></img>
            </div>
            <div className='space-x-8 text-sm'>
              <Link
                href='#solutions'
                className='hover:text-blue-400 transition-colors'
              >
                Solutions
              </Link>
              <Link
                href='#expertise'
                className='hover:text-blue-400 transition-colors'
              >
                Expertise
              </Link>
              <Link
                href='#contact'
                className='hover:text-blue-400 transition-colors'
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className='pt-32 pb-20 px-6'>
          <div className='container mx-auto max-w-4xl text-center'>
            <h1 className='text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent'>
              Next Generation VoLTE Solutions
            </h1>
            <p className='text-lg text-gray-300 mb-8 max-w-2xl mx-auto'>
              Delivering cutting-edge telecommunications infrastructure with advanced VoLTE technology and cloud-native solutions.
            </p>
            <button className='group bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 transition-colors inline-flex items-center gap-2'>
              Learn More
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </button>
          </div>
        </section>

        <section
          id='solutions'
          className='py-20 bg-[#112240]'
        >
          <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold mb-12 text-center'>Our Solutions</h2>
            <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
              <div className='p-6 rounded-lg bg-[#1a2c4e] hover:bg-[#1f3356] transition-colors'>
                <Network className='w-12 h-12 text-blue-400 mb-4' />
                <h3 className='text-xl font-semibold mb-3'>VoLTE Infrastructure</h3>
                <p className='text-gray-300'>Complete VoLTE solution with geo-redundancy and high availability architecture.</p>
              </div>
              <div className='p-6 rounded-lg bg-[#1a2c4e] hover:bg-[#1f3356] transition-colors'>
                <Shield className='w-12 h-12 text-blue-400 mb-4' />
                <h3 className='text-xl font-semibold mb-3'>Security</h3>
                <p className='text-gray-300'>Comprehensive security features with end-to-end encryption and advanced protocols.</p>
              </div>
              <div className='p-6 rounded-lg bg-[#1a2c4e] hover:bg-[#1f3356] transition-colors'>
                <Cpu className='w-12 h-12 text-blue-400 mb-4' />
                <h3 className='text-xl font-semibold mb-3'>Cloud Integration</h3>
                <p className='text-gray-300'>Cloud-native architecture with containerized applications and microservices.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id='expertise'
          className='py-20'
        >
          <div className='container mx-auto px-6 max-w-4xl'>
            <h2 className='text-3xl font-bold mb-8 text-center'>Technical Expertise</h2>
            <div className='space-y-6 text-gray-300'>
              <p>Our team specializes in implementing advanced VoLTE solutions with:</p>
              <ul className='list-disc list-inside space-y-3 pl-4'>
                <li>Geo-redundant infrastructure deployment</li>
                <li>High-performance IMS core implementation</li>
                <li>Advanced session border control</li>
                <li>Comprehensive DNS and ENUM services</li>
                <li>24/7 technical support and maintenance</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id='contact'
          className='py-20 bg-[#112240]'
        >
          <div className='container mx-auto px-6 max-w-4xl text-center'>
            <h2 className='text-3xl font-bold mb-8'>Get in Touch</h2>
            <p className='text-gray-300 mb-8'>Ready to transform your telecommunications infrastructure? Contact us to discuss your needs.</p>
            <Link href='mailto:contact@quantum-link-innovations.com'>
              <button className='bg-blue-500 px-8 py-3 rounded-md hover:bg-blue-600 transition-colors'>Contact Us</button>
            </Link>
          </div>
        </section>
      </main>

      <footer className='bg-[#0a192f] py-8 border-t border-gray-800'>
        <div className='container mx-auto px-6 text-center text-gray-400'>
          <p>&copy; 2025 Quantum Link Innovations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
