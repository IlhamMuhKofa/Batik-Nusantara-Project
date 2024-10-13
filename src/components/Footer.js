import React from 'react';
import '../assets/styles/LandingPage.css';
import { FaFacebookF, FaGoogle, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section footer-left">
        <h2>BATIK NUSANTARA</h2>
        <p>Menjaga warisan, menghadirkan keindahan</p>
        <div className="about-us">
          <h4>Tentang</h4>
          <p> Temukan lebih banyak tentang apa yang kami lakukan dan bagaimana kami dapat membantu Anda.</p>
        </div>
        <div className="contact-us">
          <h4>Kontak kami</h4>
          <p>📞 +91 9999 999 999</p>
          <p>✉️ Batiknusantara.com</p>
        </div>
      </div>
      <div className="footer-section footer-center">
        <h4>Informasi</h4>
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang Kami</a>
        <a href="#label">Jenis Label</a>
        <a href="#deteksi_gambar">Deteksi Gambar</a>
        <a href="#galeri">Galeri Batik</a>
      </div>
      <div className="footer-section footer-center">
        <h4>Informasi tambahan</h4>
        <a href="#">Services</a>
        <a href="#">Supports</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div className="footer-section footer-right">
        <h4>Subscribe untuk informasi lebih lanjut</h4>
        <form>
          <input type="email" placeholder="masukkan email mu disini" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-bottom">
        <div className="social-links">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaGoogle /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
        <p>© Copyright 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
