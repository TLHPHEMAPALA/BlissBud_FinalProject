import React from 'react';
import Navbar from '../NavBar/nav';
import Footer from '../Footer/Footer';
import ProfessionalCard from '../Contact/ProffessionalCards';
import proffessional1 from '../../Assests/proffessional1 .jpg' ;
import proffessional2 from '../../Assests/proffessional2 .jpg' ;
import proffessional3 from '../../Assests/proffessional3 .jpg' ;
import proffessional from '../../Assests/proffessional .jpg' ;

export default function Contact() {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #FFB6C1, #FFDAB9)', 
      padding: '1rem' 
    }}>
      <Navbar/>
      <div className="max-w-4xl mx-auto ">
        <h2 className="m-10 mb-8 text-3xl font-bold text-center text-gray-900">Contact Professionals</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ProfessionalCard 
            name="Miss.Ramya Sewmini"
            profession="Therapist"
            photo= {proffessional1}
            whatsappNumber="1234567890" 
            email="ramya@example.com" 
          />
          <ProfessionalCard
            name="Mr.Saman Perera"
            profession="Psychologist"
            photo={proffessional}
            whatsappNumber="9876543210" 
            email="saman@example.com" 
          />
          <ProfessionalCard
            name="Mrs.Kanthi Silva"
            profession="Counselor and Lecturer in UOK"
            photo={proffessional3}
            whatsappNumber="1239874560" 
            email="kanthi@example.com" 
          />
          <ProfessionalCard
            name="Ms.Sanath Silva"
            profession="Life Coach"
            photo={proffessional2}
            whatsappNumber="7894561230" 
            email="sanath@example.com" 
          />
        </div>
        
        <h2 className="my-8 mt-10 text-3xl font-bold text-center text-gray-900">Call Home</h2>
        <div className="p-4 mb-10 bg-white shadow-md bgrounded-lg">
          <h3 className="mb-2 text-xl font-semibold text-gray-800">Call Home</h3>
          <p className="text-gray-600">Click here to call home.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
