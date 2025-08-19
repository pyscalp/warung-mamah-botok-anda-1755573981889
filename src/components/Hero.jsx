import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Nikmati Kelezatan Botok Autentik
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Warung Mamah Botok Anda menyajikan hidangan botok tradisional dengan resep turun-temurun, kaya rasa dan penuh cinta.
        </p>
        <NavLink
          to="/layanan"
          className="inline-flex items-center bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
        >
          Lihat Menu Kami <ArrowRight size={20} className="ml-2" />
        </NavLink>
      </div>
    </section>
  );
};

export default Hero;