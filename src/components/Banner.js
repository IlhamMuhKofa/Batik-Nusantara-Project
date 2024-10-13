import React, { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    const bannerText = document.querySelector('.banner-text');
    bannerText.classList.add('slide-in');
  }, []);

  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1 className="banner-heading1">
          Jelajahi Keindahan <span className="highlight">Motif Batik</span> dengan Klasifikasi yang Mudah
          </h1>
          <p className="banner-subheading">
          Temukan dan pelajari berbagai motif batik dengan mudah melalui klasifikasi motif batik yang terstruktur. Kenali keunikan setiap desain batik 
          dan temukan inspirasi untuk karya Anda dalam hitungan menit!
          </p>
          <div className="banner-buttons">
            <a href="#deteksi_gambar" className="explore-button">Coba Sekarang</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
