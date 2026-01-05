import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  const RECIPIENT_EMAIL = "rohangadekar07@gmail.com"; // 👈 put your Gmail here

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const subject = `Portfolio Contact - ${name}`;
    const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open Gmail / default mail client
    window.open(mailtoLink, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        space-y-6
        p-6
        rounded-2xl
        border-2 
      "
    >
      {/* Name */}
      <div>
        <label className="block text-sm mb-2 text-gray-300">
          Your Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-[#1e293b] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm mb-2 text-gray-300">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-[#1e293b] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm mb-2 text-gray-300">
          Message
        </label>
        <textarea
          rows="5"
          maxLength="500"
          placeholder="Your message (max 500 characters)"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setCount(e.target.value.length);
          }}
          className="w-full bg-[#1e293b] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
        ></textarea>

        <p className="text-right text-xs text-gray-400 mt-1">
          {count}/500
        </p>
      </div>

      {/* Button */}
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
