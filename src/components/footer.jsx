import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-1 mt-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20">

          {/* Colonne gauche */}
          <div className="flex-1 text-left">
            <h3 className="font-bold text-lg mb-2">Contact Us</h3>
            <p>Email: <a href="mailto:contact@maverickcollections.com" className="underline hover:text-gray-400">contact@maverickcollections.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="underline hover:text-gray-400">+1 (234) 567-890</a></p>
          </div>

          {/* Colonne centre */}
          <div className="flex-1 text-center">
            <h3 className="font-bold text-lg mb-2">Our Address</h3>
            <p>123 Maverick Street</p>
            <p>Alger</p>
          </div>

          {/* Colonne droite */}
          <div className="flex-1 text-right">
            <h3 className="font-bold text-lg mb-2 flex justify-center items-center">Follow Us</h3>
            <div className="flex justify-end gap-4">
              <a href="https://facebook.com/maverickcollections" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
              <a href="https://twitter.com/maverickcoll" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
              <a href="https://instagram.com/maverickcollections" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
              <a href="https://linkedin.com/company/maverickcollections" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
            </div>
          </div>

        </div>

        <p className="text-sm opacity-80 text-center mt-6">© {new Date().getFullYear()} Maverick Collections. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
