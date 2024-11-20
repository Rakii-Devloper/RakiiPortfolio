const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-2">© 2024 Rakesh Antony. All Rights Reserved.</p>
          <div className="flex justify-center gap-6">
            {/* Social Media Links */}
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in text-2xl hover:text-blue-500 transition-all duration-300"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-2xl hover:text-gray-500 transition-all duration-300"></i>
            </a>
            <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope text-2xl hover:text-red-500 transition-all duration-300"></i>
            </a>
          </div>
          <p className="text-sm mt-4">
            <a href="#privacy" className="text-gray-400 hover:text-white">Privacy Policy</a> |{" "}
            <a href="#terms" className="text-gray-400 hover:text-white">Terms of Service</a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  