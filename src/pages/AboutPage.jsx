import React from 'react';
import SectionTitle from '../components/SectionTitle';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle
        title="Tentang Warung Mamah Botok Anda"
        subtitle="Kisah di balik setiap bungkus botok lezat kami."
      />
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/images/mamah_botok.svg"
            alt="Mamah Botok"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-gray-700 leading-relaxed">
          <p className="mb-4">
            Berawal dari kecintaan Mamah pada masakan tradisional Indonesia, terutama botok, Warung Mamah Botok Anda didirikan dengan satu misi: melestarikan dan menyajikan kelezatan botok autentik kepada setiap penikmat kuliner. Sejak tahun 20XX, kami telah berdedikasi untuk menghadirkan hidangan botok dengan resep turun-temurun yang kaya akan rempah pilihan.
          </p>
          <p className="mb-4">
            Setiap bungkus botok kami dibuat dengan bahan-bahan segar pilihan dari petani lokal, diolah dengan tangan terampil dan hati yang tulus. Kami percaya bahwa makanan bukan hanya sekadar nutrisi, tetapi juga cerita, tradisi, dan kehangatan keluarga.
          </p>
          <p>
            Kami bangga menjadi bagian dari perjalanan kuliner Anda, menyajikan botok yang tidak hanya lezat di lidah, tetapi juga menghangatkan hati. Datang dan rasakan sendiri bedanya botok Mamah Botok Anda!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;