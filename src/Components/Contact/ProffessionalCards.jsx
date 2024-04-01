import React from 'react';
 
const ProfessionalCard = ({ name, profession, photo, whatsappNumber, email }) => {
   

  const handleWhatsAppClick = () => {
     
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;
    
    window.location.href = whatsappURL;
  };

  return (
    <div className="p-6 mb-8 bg-white rounded-lg shadow-md w-">  
    <img src={photo} alt={name} className="mx-auto mb-4 rounded-full" style={{ width: '100px', height: '100px' }} /> 
    <h3 className="mb-2 text-xl font-semibold text-gray-800">{name}</h3>
    <p className="text-gray-600">{profession}</p>
    <button className="mt-4 text-blue-500" onClick={handleWhatsAppClick}>WhatsApp</button>  
    <p className="mt-4">Email: {email}</p>  
  </div>
  
  
  );
};

export default ProfessionalCard;
