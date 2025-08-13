import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-energy rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">OG</span>
              </div>
              <span className="font-serif font-bold text-xl">Oil & Gas Construction</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading the industry in oil & gas construction projects with over 20 years of experience in pipeline
              infrastructure and industrial facilities.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-energy-orange transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-energy-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-energy-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/pipeline" className="text-gray-300 hover:text-energy-orange transition-colors">
                  Pipeline Construction
                </Link>
              </li>
              <li>
                <Link href="/services/industrial" className="text-gray-300 hover:text-energy-orange transition-colors">
                  Industrial Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/services/infrastructure"
                  className="text-gray-300 hover:text-energy-orange transition-colors"
                >
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-gray-300 hover:text-energy-orange transition-colors">
                  Maintenance Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-energy-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-energy-orange transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/hse-quality" className="text-gray-300 hover:text-energy-orange transition-colors">
                  HSE & Quality
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-energy-orange transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-energy-orange transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-energy-orange flex-shrink-0" />
                <span className="text-gray-300">123 Industrial Blvd, Houston, TX 77001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-energy-orange flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-energy-orange flex-shrink-0" />
                <span className="text-gray-300">info@ogconstruction.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2024 Oil & Gas Construction Co. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-energy-orange transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-energy-orange transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
