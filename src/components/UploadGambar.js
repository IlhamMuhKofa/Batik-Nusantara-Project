import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/LandingPage.css';

const UploadGambar = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [label, setLabel] = useState('');
  const [description, setDescription] = useState('');
  const uploadRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    const uploadElement = uploadRef.current;
    if (uploadElement) {
      observer.observe(uploadElement);
    }

    return () => {
      if (uploadElement) {
        observer.unobserve(uploadElement);
      }
    };
  }, []);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setSelectedImage(URL.createObjectURL(img));
    }
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', document.querySelector('input[type="file"]').files[0]);

    fetch('https://c753-35-227-156-42.ngrok-free.app/predict', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Response from server:', data);
      if (data.label) {
        const labelName = getLabelName(data.label);
        setLabel(labelName);
        setDescription(getDescription(labelName));
      }
    })
    .catch(error => {
      console.error('Error uploading image:', error);
    });
  };

  const handleCancel = () => {
    setSelectedImage(null);
    setLabel('');
    setDescription('');
  };

  const getLabelName = (label) => {
    const labelNames = {
      2: 'Batik Pontianak',
      3: 'Batik Jawa',
      1: 'Batik Madura'
    };
    return labelNames[label] || 'Unknown Label';
  };

  const getDescription = (label) => {
    const descriptions = {
      'Batik Pontianak': 'Batik Pontianak adalah batik yang berasal dari Pontianak, Kalimantan Barat, dengan ciri khas motif tumbuhan dan hewan yang ada di Kalimantan.',
      'Batik Jawa': 'Batik Jawa adalah batik yang berasal dari Pulau Jawa, terkenal dengan motif yang sangat beragam, sering kali memiliki makna filosofi yang dalam.',
      'Batik Madura': 'Batik Madura adalah batik yang berasal dari Pulau Madura, Jawa Timur, dengan motif yang cerah dan berani, sering kali menggambarkan flora dan fauna setempat.'
    };
    return descriptions[label] || 'Deskripsi tidak tersedia.';
  };

  return (
    <div className="upload-section hidden" ref={uploadRef}>
      <div className="upload-container">
        <h2 className="upload-header">Upload Disini</h2>
        <label className="upload-area">
          <input 
            type="file" 
            className="file-input" 
            onChange={handleImageChange} 
          />
          {selectedImage ? (
            <div>
              <img 
                src={selectedImage} 
                alt="Preview" 
                className="image-preview"
              />
            </div>
          ) : (
            <p className="upload-message">
              Klik untuk Upload Gambar
            </p>
          )}
        </label>
        <div className="button-container">
          <button onClick={handleUpload} className="upload-button">Upload</button>
          <button onClick={handleCancel} className="cancel-button">Cancel</button>
        </div>
      </div>
      <div className="output-container">
        <h2 className="output-header">Output</h2>
        {selectedImage && (
          <>
            <img src={selectedImage} alt="Uploaded" className="uploaded-image" />
            <h3 className="label">{label}</h3>
            <p className="description">{description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadGambar;
