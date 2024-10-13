import React, { useState } from "react";
import '../assets/styles/LandingPage.css';

// Fungsi untuk mengimpor gambar secara dinamis
const importAll = (r) => r.keys().map(r);

// Mengimpor gambar untuk setiap kategori
const tradisionalImages = importAll(require.context('../assets/Image/Tradisional', false, /\.(png|jpe?g|svg)$/));
const modernImages = importAll(require.context('../assets/Image/Modern', false, /\.(png|jpe?g|svg)$/));
const floraImages = importAll(require.context('../assets/Image/Flora', false, /\.(png|jpe?g|svg)$/));
const faunaImages = importAll(require.context('../assets/Image/Fauna', false, /\.(png|jpe?g|svg)$/));
const posterImages = importAll(require.context('../assets/Image/Poster', false, /\.(png|jpe?g|svg)$/));
const fashionImages = importAll(require.context('../assets/Image/Fashion', false, /\.(png|jpe?g|svg)$/));

// Menggabungkan semua gambar dalam satu array dan menambahkan kategori
const allImages = [
  ...tradisionalImages.map((image, index) => ({ image, title: `Tradisional ${index + 1}`, category: 'tradisional' })),
  ...modernImages.map((image, index) => ({ image, title: `Modern ${index + 1}`, category: 'modern' })),
  ...floraImages.map((image, index) => ({ image, title: `Flora ${index + 1}`, category: 'flora' })),
  ...faunaImages.map((image, index) => ({ image, title: `Fauna ${index + 1}`, category: 'fauna' })),
  ...posterImages.map((image, index) => ({ image, title: `Poster ${index + 1}`, category: 'poster' })),
  ...fashionImages.map((image, index) => ({ image, title: `Fashion ${index + 1}`, category: 'fashion' })),
];

// Fungsi untuk mengambil 30 gambar acak
const getRandomImages = (images, count) => {
  const shuffled = images.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const allCards = {
  all: getRandomImages(allImages, 30),
  tradisional: tradisionalImages.map((image, index) => ({ image, title: `Tradisional ${index + 1}`, category: 'tradisional' })),
  modern: modernImages.map((image, index) => ({ image, title: `Modern ${index + 1}`, category: 'modern' })),
  flora: floraImages.map((image, index) => ({ image, title: `Flora ${index + 1}`, category: 'flora' })),
  fauna: faunaImages.map((image, index) => ({ image, title: `Fauna ${index + 1}`, category: 'fauna' })),
  poster: posterImages.map((image, index) => ({ image, title: `Poster ${index + 1}`, category: 'poster' })),
  fashion: fashionImages.map((image, index) => ({ image, title: `Fashion ${index + 1}`, category: 'fashion' })),
};

const Galeri = () => {
  const [category, setCategory] = useState('all');
  const [activeButton, setActiveButton] = useState('all');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setActiveButton(newCategory);
  };

  const filteredCards = category === 'all' ? allCards.all : allCards[category];

  return (
    <div className="galeri-section">
      <div className="galeri-header-container">
        <h2 className="galeri-header">Galeri Batik</h2>
        <div className="category-buttons">
          <button className={activeButton === 'all' ? 'active' : ''} onClick={() => handleCategoryChange('all')}>Semua</button>
          <button className={activeButton === 'tradisional' ? 'active' : ''} onClick={() => handleCategoryChange('tradisional')}>Batik Tradisional</button>
          <button className={activeButton === 'modern' ? 'active' : ''} onClick={() => handleCategoryChange('modern')}>Batik Modern</button>
          <button className={activeButton === 'flora' ? 'active' : ''} onClick={() => handleCategoryChange('flora')}>Batik Flora</button>
          <button className={activeButton === 'fauna' ? 'active' : ''} onClick={() => handleCategoryChange('fauna')}>Batik Fauna</button>
          <button className={activeButton === 'poster' ? 'active' : ''} onClick={() => handleCategoryChange('poster')}>Batik Poster</button>
          <button className={activeButton === 'fashion' ? 'active' : ''} onClick={() => handleCategoryChange('fashion')}>Batik Fashion</button>
        </div>
      </div>
      <div className="card-container-galeri">
        {filteredCards.map((card, index) => (
          <div className="card-galeri" key={index}>
            <img src={card.image} alt={`Card image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeri;
