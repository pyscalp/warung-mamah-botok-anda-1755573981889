import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ContactPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // In a real app, send this to a backend
    toast.success('Pesan Anda telah terkirim!');
    reset();
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle
        title="Hubungi Kami"
        subtitle="Kami siap melayani Anda. Jangan ragu untuk bertanya atau memberikan masukan."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-6">Informasi Kontak</h3>
          <div className="space-y-4 text-gray-700 text-lg">
            <p className="flex items-center">
              <MapPin size={24} className="mr-3 text-accent" />
              Jl. Botok Nikmat No. 10, RT.01/RW.02, Kel. Rasa, Kec. Lezat, Jakarta 12345
            </p>
            <p className="flex items-center">
              <Phone size={24} className="mr-3 text-accent" />
              +62 812 3456 7890 (Telepon/WhatsApp)
            </p>
            <p className="flex items-center">
              <Mail size={24} className="mr-3 text-accent" />
              info@mamahbotok.com
            </p>
            <p className="flex items-center">
              <Clock size={24} className="mr-3 text-accent" />
              Buka: Senin - Sabtu, 09.00 - 20.00 WIB
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Temukan Kami di Peta</h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3000000000007!2d106.8271!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ5JzQyLjAiUyAxMDbCsDUxJzQyLjAiRQ!5e0!3m2!1sen!2sid!4v1678901234567!5m2!1sen!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Warung Mamah Botok Anda"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary mb-6">Kirim Pesan kepada Kami</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Nama lengkap wajib diisi' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-accent"
              />
              {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email wajib diisi',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Format email tidak valid',
                  },
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-accent"
              />
              {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subjek</label>
              <input
                type="text"
                id="subject"
                {...register('subject', { required: 'Subjek wajib diisi' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-accent"
              />
              {errors.subject && <p className="text-red-500 text-xs italic mt-1">{errors.subject.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Pesan Anda</label>
              <textarea
                id="message"
                rows="5"
                {...register('message', { required: 'Pesan wajib diisi' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-accent"
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs italic mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="bg-accent hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ContactPage;