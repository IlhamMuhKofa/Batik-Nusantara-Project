import React, { useEffect, useRef } from "react";
import '../assets/styles/LandingPage.css';
import image1 from '../assets/Image/Label/Pontianak2.jpg';
import image2 from '../assets/Image/Label/Jawa2.jpg';
import image3 from '../assets/Image/Label/Madura.jpg';

const Label = () => {
    const labelRef = useRef(null);

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

        const labelElement = labelRef.current;
        if (labelElement) {
            observer.observe(labelElement);
        }

        return () => {
            if (labelElement) {
                observer.unobserve(labelElement);
            }
        };
    }, []);

    const cards = [
        {
            image: image1,
            title: "Batik Pontianak",
            description: "Batik Pontianak biasanya menggambarkan sejarah atau sesuatu yang berhubungan dengan kehidupan alam dan manusia"
        },
        {
            image: image2,
            title: "Batik Jawa",
            description: "Batik Jawa menggunakan warna kalem seperti coklat, hitam, putih, dan indigo. Motifnya klasik seperti parang dan kawung. Polanya simetris dan teratur."
        },
        {
            image: image3,
            title: "Batik Madura",
            description: "Batik Madura memiliki warna cerah dan kontras. Motifnya berupa flora, fauna, dan bentuk geometris. Polanya tegas dan kuat."
        },
    ];

    return (
        <div className="label-section hidden" ref={labelRef}>
            <h2 className="label-header">Jenis Label</h2>
            <div className="card-container-label">
                {cards.map((card, index) => (
                    <div className="card-label" key={index}>
                        <img src={card.image} alt={`Card image ${index + 1}`} />
                        <div className="card-content-label">
                            <div className="card-label-title">{card.title}</div>
                            <div className="card-description-label">{card.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Label;
