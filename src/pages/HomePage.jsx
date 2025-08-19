import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

const HomePage = () => {
  const featuredProducts = [
    {
      image: '/images/botok_tahu.svg',
      title: 'Botok Tahu Tempe',
      description: 'Perpaduan tahu dan tempe segar dengan bumbu rempah pilihan, dikukus sempurna.',
    },
    {
      image: '/images/botok_ikan.svg',
      title: 'Botok Ikan Patin',
      description: 'Ikan patin lembut berpadu dengan bumbu kuning khas, aroma daun kemangi yang menggoda.',
    },
    {
      image: '/images/botok_ayam.svg',
      title: 'Botok Ayam Jamur',
      description: 'Daging ayam empuk dan jamur tiram, dimasak dengan santan gurih dan bumbu rahasia.',
    },
  ];

  return (
    <div className="py-8">
      <Hero />
      <section className="container mx-auto px-4 py-16">
        <SectionTitle
          title="Menu Unggulan Kami"
          subtitle="Cicipi kelezatan botok pilihan yang menjadi favorit pelanggan setia kami."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card key={index} {...product} />
          ))}
        </div>
      </section>
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle
            title="Mengapa Memilih Kami?"
            subtitle="Kami berkomitmen menyajikan botok terbaik dengan bahan segar dan resep autentik."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-2">Bahan Segar</h3>
              <p className="text-gray-600">Kami hanya menggunakan bahan-bahan pilihan terbaik dan segar setiap hari.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-2">Resep Autentik</h3>
              <p className="text-gray-600">Resep turun-temurun yang menjaga cita rasa botok asli Nusantara.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-2">Pelayanan Prima</h3>
              <p className="text-gray-600">Kepuasan Anda adalah prioritas kami, dengan pelayanan yang ramah dan cepat.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;