import {
  SiInstagram,
  SiFacebook,
  SiYoutube,
  SiWhatsapp
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-sm pt-10 pb-6 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        
        {/* Columna 1 */}
        <div>
          <h3 className="text-red-600 uppercase font-semibold mb-4">Automize</h3>
          <p className="text-gray-400 mb-4">
            We provide high-quality Japanese vehicles with reliable service and customer support.
          </p>

          <ul className="space-y-1 text-gray-400 mb-4">
            <li>📞 +123-456-789</li>
            <li>📧 info@domain.com</li>
            <li>🕘 Mon–Fri, 9:00–18:00 (EEST)</li>
          </ul>

          <div className="flex space-x-4 text-gray-400">
            <SiWhatsapp className="hover:text-white cursor-pointer" size={20} />
            <SiInstagram className="hover:text-white cursor-pointer" size={20} />
            <SiFacebook className="hover:text-white cursor-pointer" size={20} />
            <SiYoutube className="hover:text-white cursor-pointer" size={20} />
          </div>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 className="text-red-600 uppercase font-semibold mb-4">Help & Support</h3>
          <ul className="space-y-2">
            <li>Shipping Info</li>
            <li>Returns</li>
            <li>How to Order</li>
            <li>How to Track</li>
            <li>Size Guide</li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 className="text-red-600 uppercase font-semibold mb-4">Company Info</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Our Blog</li>
            <li>Careers</li>
            <li>Store Locations</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Columna 4 */}
        <div>
          <h3 className="text-red-600 uppercase font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2">
            <li>FAQs</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Gift Card</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>© 2023 Vroomtheme. All rights reserved.</p>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>🌐 English</span>
          <span>💲 USD</span>
        </div>
      </div>
    </footer>
  );
}
