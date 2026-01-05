import ContactItem from "./ContactItem";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>

      <p className="text-gray-400 mb-8 leading-relaxed">
        I'm currently open to new opportunities and interesting projects.
        Whether you have a question or just want to say hi, I'll try my best
        to get back to you!
      </p>

      <div className="space-y-6">
        <ContactItem
          icon={<Mail />}
          label="Email"
          value="rohangadekar07@gmail.com"
        />
        <ContactItem
          icon={<Phone />}
          label="Phone"
          value="+91 9307270884"
        />
        <ContactItem
          icon={<MapPin />}
          label="Location"
          value="Pune, Maharashtra, India"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
