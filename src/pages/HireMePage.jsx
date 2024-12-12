import React, { useState } from "react";

const HireMePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value.trim()) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.contact.trim()) newErrors.contact = "Contact number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <section id="hireme" className="min-h-screen flex justify-center items-center bg-white">
      <div className="container mx-auto p-4">
        <div className="rounded-lg relative w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mx-auto shadow-lg border border-gray-300">
          {/* Header Section */}
          <div className="flex items-center p-4 rounded-t-lg border-b border-gray-200">
            <div className="flex mr-auto">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 ml-1.5"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 ml-1.5"></div>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row">
              {/* Left Section: Heading */}
              <div className="flex-1 p-12 flex flex-col order-1 md:order-none">
                <div className="text-black text-4xl font-bold mb-4 text-center md:text-left">
                  <span>CONTACT US</span>
                </div>
              </div>

              {/* Right Section: Form */}
              <div className="flex-1 p-12 order-2">
                <div className="space-y-6">
                  <div className="flex flex-col space-y-4">
                    {/* Name Input */}
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`bg-transparent border-b-2 ${
                          errors.name
                            ? "border-red-500"
                            : "border-gray-600 focus:border-red-500"
                        } text-black p-2 focus:outline-none`}
                        placeholder="NAME"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Email Input */}
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`bg-transparent border-b-2 ${
                          errors.email
                            ? "border-red-500"
                            : "border-gray-600 focus:border-red-500"
                        } text-black p-2 focus:outline-none`}
                        placeholder="EMAIL"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Contact Input */}
                    <div>
                      <input
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        className={`bg-transparent border-b-2 ${
                          errors.contact
                            ? "border-red-500"
                            : "border-gray-600 focus:border-red-500"
                        } text-black p-2 focus:outline-none`}
                        placeholder="CONTACT NO"
                      />
                      {errors.contact && (
                        <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
                      )}
                    </div>

                    {/* Message Input */}
                    <div>
                      <input
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`bg-transparent border-b-2 ${
                          errors.message
                            ? "border-red-500"
                            : "border-gray-600 focus:border-red-500"
                        } text-black p-2 focus:outline-none`}
                        placeholder="MESSAGE"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="text-right space-x-4 pt-5">
                    <button
                      type="button"
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() =>
                        setFormData({ name: "", email: "", contact: "", message: "" })
                      }
                    >
                      CANCEL
                    </button>
                    <button
                      type="submit"
                      className="text-red-600 hover:text-red-800"
                    >
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HireMePage;
