import React, { useEffect, useRef } from "react";
import '../assets/styles/LandingPage.css';
import image2 from '../assets/Image/Tools/FLOWCHART.png';

const Tentang = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }

            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }

            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }

            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <div className="tentang-section hidden" ref={sectionRef}>
            <h2 className="tentang-header" ref={headerRef}>Tentang Kami</h2>
            <div className="tentang-content">
                <div className="images-container" ref={imageRef}>
                    <img src={image2} alt="Image 1" className="image-item" />
                </div>
                <div className="text-container" ref={textRef}>
                    <h2 className="text-header">Mengapa Kami memulai proyek ini?</h2>
                    <p>Proyek kami merupakan inisiatif yang bertujuan untuk memperkenalkan dan melestarikan 
                        kekayaan budaya batik Indonesia melalui platform digital. Dengan menggabungkan teknologi modern dan 
                        seni tradisional, kami berharap dapat menjangkau audiens yang lebih luas dan meningkatkan apresiasi 
                        terhadap warisan budaya ini.</p>
                    <p>Batik adalah warisan budaya yang kaya dan berharga, penuh dengan nilai-nilai sejarah dan estetika. Namun, di era modern ini, batik sering kali kurang dikenal dan kurang dihargai oleh generasi muda. Melalui Proyek Batik Digital, kami ingin memastikan bahwa keindahan dan makna di balik setiap motif batik dapat dinikmati dan dipahami oleh semua orang, kapan saja dan di mana saja. Kami percaya bahwa dengan memanfaatkan teknologi, kita dapat melestarikan dan mempromosikan warisan budaya ini dengan cara yang inovatif dan berkelanjutan.</p>
                </div>
            </div>
        </div>
    );
};

export default Tentang;
