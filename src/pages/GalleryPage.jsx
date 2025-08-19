import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

const GalleryPage = () => {
  const galleryItems = [
    { image: '/images/gallery_1.svg', title: 'Botok Komplit', description: 'Aneka botok dalam satu sajian.' },
    { image: '/images/gallery_2.svg', title: 'Botok Tahu', description: 'Botok tahu lembut dan gurih.' },
    { image: '/images/gallery_3.svg', title: 'Botok Tempe', description: 'Botok tempe dengan bumbu meresap.' },
    { image: '/images/gallery_4.svg', title: 'Botok Ikan', description: 'Botok ikan segar pilihan.' },
    { image: '/images/gallery_5.svg', title: 'Botok Ayam', description: 'Botok ayam dengan rempah khas.' },
    { image: '/images/gallery_6.svg', title: 'Botok Udang', description: 'Botok udang pedas manis.' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle
        title="Galeri Botok Kami"
        subtitle="Lihatlah kelezatan visual dari hidangan-hidangan botok yang kami sajikan."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {galleryItems.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
      <section className="mt-16 text-center bg-blue-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-primary mb-4">Tertarik Mencoba?</h3>
        <p className="text-lg text-gray-700 mb-6">
          Kunjungi warung kami atau pesan sekarang untuk merasakan langsung kelezatan botok Mamah Botok Anda!
        </p>
        <a
          href="/layanan"
          className="inline-flex items-center bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
        >
          Pesan Sekarang
        </a>
      </section>
    </div>
  );
};

export default GalleryPage;