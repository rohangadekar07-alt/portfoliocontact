const ContactItem = ({ icon, label, value }) => {
  return (
    
    <div className="flex items-center gap-4">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

export default ContactItem;
