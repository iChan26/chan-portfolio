import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCopy, FaCheck } from 'react-icons/fa';

const ContactMe = () => {
  const [copiedField, setCopiedField] = useState('');

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 2000);
  };

  return (
    <section
  id="contact"
  className="py-20 px-4 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white"
>
  <div className="max-w-5xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-6">
      Let’s Get in{" "}
      <span className="text-yellow-500 font-extrabold">
        Touch
      </span>
    </h2>
    <p className="text-gray-400 mb-12 max-w-xl mx-auto text-sm sm:text-base">
      I’m always open to collaborations, projects, or just a friendly
      conversation. Drop a message!
    </p>

    {/* Contact Grid */}
    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
      {/* WhatsApp */}
      <div className="bg-[#1e1e1e] rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-green-400/30">
        <div className="flex items-center justify-between mb-3">
          <FaWhatsapp className="text-green-400 text-2xl" />
          <button
            onClick={() => handleCopy('+63 921 044 8930', 'phone')}
            className="text-xs text-gray-400 hover:text-green-400 transition"
          >
            {copiedField === 'phone' ? <FaCheck /> : <FaCopy />}
          </button>
        </div>
        <p className="text-sm sm:text-base break-words">
          +63 921 044 8930
        </p>
      </div>

      {/* Gmail */}
      <div className="bg-[#1e1e1e] rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-red-400/30">
        <div className="flex items-center justify-between mb-3">
          <FaEnvelope className="text-red-400 text-2xl" />
          <button
            onClick={() => handleCopy('penaleschristian45@email.com', 'email')}
            className="text-xs text-gray-400 hover:text-red-400 transition"
          >
            {copiedField === 'email' ? <FaCheck /> : <FaCopy />}
          </button>
        </div>
        <p className="text-sm sm:text-base break-words">
          penaleschristian45@email.com
        </p>
      </div>

      {/* Location */}
      <div className="bg-[#1e1e1e] rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-yellow-400/30">
        <div className="flex items-center justify-between mb-3">
          <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
          <button
            onClick={() =>
              handleCopy('Misamis Occidental, Philippines', 'location')
            }
            className="text-xs text-gray-400 hover:text-yellow-400 transition"
          >
            {copiedField === 'location' ? <FaCheck /> : <FaCopy />}
          </button>
        </div>
        <p className="text-sm sm:text-base break-words">
          Misamis Occidental, Philippines
        </p>
      </div>
    </div>

    {/* Footer note */}
    <p className="mt-10 text-yellow-500 text-xs sm:text-sm italic">
      Or you can simply message me by chatting with the bot here.
    </p>
  </div>
</section>

  );
};

export default ContactMe;
