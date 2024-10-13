import React from 'react';
import '../assets/styles/LandingPage.css';
import Banner from './Banner';
import Tentang from './Tentang';
import Label from './Label';
import UploadGambar from './UploadGambar';
import Tim from './Tim';
import Galeri from './Galeri';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section id="beranda" className="home-section">
        <Banner />
      </section>
      <section id="tentang" className="about-section">
        <Tentang/>
      </section>
      <section id="label" className='label-section'>
        <Label/>
      </section>
      <section id="deteksi_gambar" className="services-section">
        <UploadGambar/>
      </section>
      <Tim/>
      <section id="galeri" className="projects-section">
      <Galeri/>
      </section>
      <Footer/>
    </div>
  );
};

export default LandingPage;
