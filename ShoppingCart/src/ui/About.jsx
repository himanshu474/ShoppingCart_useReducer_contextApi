import React from 'react';

const About = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://th.bing.com/th/id/OIP.b0tp1xzRtlYh9LbR26GThwHaEK?w=315&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7)' }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white p-12">
          <h1 className="text-4xl font-semibold">About Us</h1>
          <p className="text-lg mt-4">Your one-stop destination for all computer products and accessories in India.</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16 text-center lg:text-left">
        <div className="max-w-4xl mx-auto">
          {/* Who We Are Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700">
              At E-Store, we believe in providing the latest and most reliable computer products to our customers in India. Whether you're looking for powerful desktops, top-of-the-line laptops, or accessories for your workstation, we have something for everyone.
            </p>
          </section>

          {/* Our Mission Section */}
          <section className="mb-12 bg-gray-100 py-8 px-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700">
              Our mission is to make technology accessible to everyone in India by providing quality products at affordable prices. From students to professionals, gamers to creators, we aim to be your trusted partner in all things tech.
            </p>
          </section>

          {/* What We Offer Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h3>
            <p className="text-lg text-gray-700 mb-6">
              We specialize in offering a wide range of computer-related products, including:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>High-performance Laptops & Desktops</li>
              <li>Ergonomic Keyboards, Mice & Gaming Gear</li>
              <li>Advanced Computer Accessories and Peripherals</li>
              <li>Computer Software and Tech Solutions</li>
              <li>Custom PC Builds & Gaming PCs</li>
            </ul>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-12 bg-gray-100 py-8 px-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Here’s why thousands of customers in India trust E-Store for their tech needs:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Fast Delivery Across India (Free on Orders Above ₹5000)</li>
              <li>Wide Selection of Premium Brands (Dell, HP, Lenovo, ASUS, etc.)</li>
              <li>Affordable Prices with Regular Discounts</li>
              <li>Top-notch Customer Service with Expert Support</li>
              <li>Secure Payment Options and Easy EMI Plans</li>
            </ul>
          </section>

          {/* Our Values Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
            <p className="text-lg text-gray-700 mb-6">
              At E-Store, we’re driven by our values of integrity, quality, and customer satisfaction. We strive to create a seamless shopping experience by offering products that meet the highest standards. Our team is committed to ensuring that every customer has a delightful experience when they shop with us.
            </p>
          </section>

          {/* Closing Message */}
          <section>
            <p className="text-lg text-gray-700">
              Thank you for choosing E-Store, where technology meets excellence. We look forward to serving you and becoming your go-to destination for all your computer and tech needs in India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
