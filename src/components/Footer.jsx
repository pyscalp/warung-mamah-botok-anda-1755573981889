import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white p-8 mt-8">
      <div className="container mx-auto text-center md:flex md:justify-between md:items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-accent">Warung Mamah Botok Anda</h3>
          <p className="text-sm">Cita Rasa Nusantara, Langsung ke Meja Anda.</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="font-semibold mb-2">Kontak Kami</h4>
          <p className="flex items-center justify-center md:justify-start mb-1">
            <Mail size={18} className="mr-2 text-accent" /> info@mamahbotok.com
          </p>
          <p className="flex items-center justify-center md:justify-start mb-1">
            <Phone size={18} className="mr-2 text-accent" /> +62 812 3456 7890
          </p>
          <p className="flex items-center justify-center md:justify-start">
            <MapPin size={18} className="mr-2 text-accent" /> Jl. Botok Nikmat No. 10, Jakarta
          </p>
        </div>
        <div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Warung Mamah Botok Anda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;