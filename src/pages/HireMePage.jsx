import { useState } from "react";

const HireMePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, such as sending an email or saving the data
    console.log("Form submitted", formData);
  };

  return (
    <section
      id="hireme"
      className="w-full h-screen bg-gray-100 text-center py-20 flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold text-gray-800">Hire Me</h2>
      <p className="text-xl text-gray-600 mt-4">
        Interested in working together? Let’s get in touch!
      </p>

      <div className="mt-8 w-full sm:w-3/4 lg:w-1/2">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-8">
        <p className="text-lg text-gray-600">
          Or you can reach me directly at:
        </p>
        <div className="mt-4 text-lg text-gray-800">
          <p>Email: <a href="mailto:example@example.com" className="text-blue-500">example@example.com</a></p>
          <p>Phone: <a href="tel:+123456789" className="text-blue-500">+1 (234) 567-890</a></p>
        </div>
      </div>
    </section>
  );
};

export default HireMePage;
