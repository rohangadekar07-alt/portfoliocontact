import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16" id="contact">
      
      {/* GRADIENT BORDER */}
      <div className="p-[2px]  bg-gradient-to-r from-blue-500 to-purple-600">
        
        {/* INNER CONTAINER */}
        <div className="w-full max-w-6xl bg-[#0f172a] text-white rounded-2xl p-10 shadow-xl">
          
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Contact Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-3"></div>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Let's discuss your project or just say hello! I'm always open to new opportunities.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
