import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

const ServicesPage = () => {
  const services = [
    {
      image: '/images/service_dinein.svg',
      title: 'Makan di Tempat',
      description: 'Nikmati suasana nyaman warung kami sambil menyantap botok hangat langsung dari kukusan.',
    },
    {
      image: '/images/service_delivery.svg',
      title: 'Pesan Antar',
      description: 'Botok favorit Anda siap diantar langsung ke rumah atau kantor, praktis dan cepat.',
    },
    {
      image: '/images/service_catering.svg',
      title: 'Layanan Katering',
      description: 'Sajikan botok lezat kami untuk acara spesial Anda, mulai dari rapat hingga pesta keluarga.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle
        title="Layanan Kami"
        subtitle="Kami hadir untuk memenuhi kebutuhan botok Anda dalam berbagai kesempatan."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
      <section className="mt-16 text-center bg-blue-50 p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-primary mb-4">Pesan Sekarang!</h3>
        <p className="text-lg text-gray-700 mb-6">
          Untuk pemesanan atau informasi lebih lanjut mengenai layanan katering, jangan ragu menghubungi kami.
        </p>
        <a
          href="/kontak"
          className="inline-flex items-center bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
        >
          Hubungi Kami
        </a>
      </section>
    </div>
  );
};

export default ServicesPage;