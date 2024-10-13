import React, { useEffect } from "react";
import logo from '../assets/Image/Logo/L1.png';
import '../assets/styles/LandingPage.css';

const Navbar = () => {

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.add('fade-in');
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                    <span className="logo-text">BATIK NUSANTARA</span>
                </div>
            </div>
            <div className="navbar-right">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <a href="#beranda">Beranda</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#tentang">Tentang Kami</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#label">Jenis Label</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#deteksi_gambar">Deteksi Gambar</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#galeri">Galeri Batik</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
