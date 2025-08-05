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
      <div className="max-w-5xl font-mono mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-8">Let's Get in  <span className="text-yellow-500 font-extrabold text-3xl sm:text-4xl lg:text-6xl">Touch</span></h2>
        <p className="text-gray-300 mb-12 max-w-xl mx-auto">
          I'm always open to collaborations, projects, or just a friendly conversation. Drop a message!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* WhatsApp */}
          <div className="bg-[#1e1e1e] rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-green-400/30">
            <div className="flex items-center justify-between mb-4">
              <FaWhatsapp className="text-green-400 text-2xl" />
              <button
                onClick={() => handleCopy('+63 921 044 8930', 'phone')}
                className="text-xs text-gray-400 hover:text-green-400 transition"
              >
                {copiedField === 'phone' ? <FaCheck /> : <FaCopy />}
              </button>
            </div>
            <p className="text-sm break-words">+63 921 044 8930</p>
          </div>

          {/* Gmail */}
          <div className="bg-[#1e1e1e] rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-red-400/30">
            <div className="flex items-center justify-between mb-4">
              <FaEnvelope className="text-red-400 text-2xl" />
              <button
                onClick={() => handleCopy('penaleschristian45@email.com', 'email')}
                className="text-xs text-gray-400 hover:text-red-400 transition"
              >
                {copiedField === 'email' ? <FaCheck /> : <FaCopy />}
              </button>
            </div>
            <p className="text-sm break-words">penaleschristian45@email.com</p>
          </div>

          {/* Location */}
          <div className="bg-[#1e1e1e] rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-yellow-400/30">
            <div className="flex items-center justify-between mb-4">
              <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
              <button
                onClick={() => handleCopy('Misamis Occidental, Philippines', 'location')}
                className="text-xs text-gray-400 hover:text-yellow-400 transition"
              >
                {copiedField === 'location' ? <FaCheck /> : <FaCopy />}
              </button>
            </div>
            <p className="text-sm break-words">Misamis Occidental, Philippines</p>
          </div>
        </div>

        {/* Additional message */}
        <p className="mt-12 text-yellow-500 text-sm italic">
          Or you can simply message me by chatting with the bot here.
        </p>
      </div>
    </section>
  );
};

export default ContactMe;
