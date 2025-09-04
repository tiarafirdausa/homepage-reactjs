// src/components/modul/profil.jsx

import React from 'react';
import { useState, useEffect } from 'react';
import { BASE_URL } from '@/config/url';
import { getSettings } from '@/services/settingsService';

export default function Profile({ title, className }) {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSettingsData = async () => {
      try {
        const response = await getSettings();
        setSettings(response);
      } catch (err) {
        setError('Gagal memuat profil.');
        console.error('Gagal mengambil data settings:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSettingsData();
  }, []);

  if (loading) {
    return <div className={className}>Memuat profil...</div>;
  }

  if (error || !settings || !settings.general || !settings.appearance) {
    return <div className={className}>{error || 'Data profil tidak tersedia.'}</div>;
  }

  const { general, appearance } = settings;

  return (
    // 1. Tambahkan <section> sebagai wrapper terluar untuk mengatur margin (misal: !mt-16)
    <section className={`wrapper ${className}`}>
      {/* 2. Tambahkan <div className="container"> untuk membatasi lebar dan menengahkan konten */}
      <div className="container">
        {/* 3. Kartu profil Anda sekarang berada di dalam container */}
        <div
          className={`card !bg-[#f0f0f8] !rounded-[0.8rem]`}
        >
          <div className="card-body py-[4.5rem] px-[40px]">
            <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] items-center">
              {/* Kolom Gambar */}
              <div className="md:w-8/12 lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mx-auto">
                <div className="flex justify-center">
                  <img
                    src={`${BASE_URL}${appearance.logo}`}
                    alt={general.site_title}
                    className="mx-auto"
                    width={300} // Ukuran bisa disesuaikan
                    height={300}
                  />
                </div>
              </div>
              {/* Kolom Teks */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full">
                <h2 className="!text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.2] xl:!text-[2.2rem] !mb-3">
                  {title}
                </h2>
                <p className="lead !text-[1.2rem] font-medium !leading-[1.65]">
                  👋 Hello! We are <strong>{general.short_title}</strong>
                </p>
                <p>{general.site_description}</p>
                <p>
                  Lokasi kami berada di <strong>{general.address}</strong>, dan Anda dapat menghubungi kami di nomor{' '}
                  <strong>{general.phone}</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}