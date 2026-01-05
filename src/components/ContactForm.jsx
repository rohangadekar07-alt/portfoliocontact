import { useState } from "react";

const ContactForm = () => {
  const [count, setCount] = useState(0);

  return (
    <form
      className="
        space-y-6
        p-6
        rounded-2xl
        border-2 
      "
    >
      <div>
        <label className="block text-sm mb-2 text-gray-300">
          Your Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full bg-[#1e293b] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm mb-2 text-gray-300">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-[#1e293b] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm mb-2 text-gray-300">
          Message
        </label>
        <textarea
          rows="5"
          maxLength="500"
          placeholder="Your message (max 500 characters)"
          className="w-full bg-[#1e293b] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
          onChange={(e) => setCount(e.target.value.length)}
        ></textarea>

        <p className="text-right text-xs text-gray-400 mt-1">
          {count}/500
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-black font-semibold py-3 rounded-lg hover:scale-105 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
