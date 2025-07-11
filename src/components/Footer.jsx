// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-6 text-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-bold text-pink-600">SweetCake</h3>
          <p className="text-sm mt-2">Your perfect cake is just a click away!</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="text-sm space-y-1 mt-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">Order</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Get In Touch</h4>
          <p className="text-sm mt-2">📍 Vijayawada, India</p>
          <p className="text-sm">📞 +91 98765 -----</p>
          <p className="text-sm">📧 support@sweetspot.in</p>
        </div>
      </div>
      <div className="text-center mt-8 text-xs text-gray-500">
        &copy; 2025 sweetspot. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
