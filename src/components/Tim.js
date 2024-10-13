import React, { useEffect, useRef } from 'react';
import '../assets/styles/LandingPage.css'; // Pastikan path ini benar
import { FaYoutube, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import profile1 from '../assets/Image/PP/PROFILE_RISKA.jpg'; // Pastikan path ini benar
import profile2 from '../assets/Image/PP/PROFILE_ILHAM.jpg'; // Pastikan path ini benar

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Riska Oktaviana',
      position: 'BACKEND - UX Designer',
      description: 'Mengelola logika bisnis, pengelolaan database, dan integrasi layanan eksternal.',
      image: profile1, // Menggunakan path gambar yang diimport
      social: [
        { platform: 'YouTube', link: '#youtube' },
        { platform: 'Facebook', link: '#facebook' },
        { platform: 'Instagram', link: '#instagram' },
        { platform: 'Pinterest', link: '#pinterest' },
      ],
    },
    {
      name: 'Ilham Muh Kofa',
      position: 'FRONTEND - UI Designer',
      description: 'Menangani tampilan, desain, dan interaktivitas.',
      image: profile2, // Menggunakan path gambar yang diimport
      social: [
        { platform: 'YouTube', link: '#youtube' },
        { platform: 'Facebook', link: '#facebook' },
        { platform: 'Instagram', link: '#instagram' },
        { platform: 'Pinterest', link: '#pinterest' },
      ],
    },
  ];

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'YouTube':
        return <FaYoutube className="social-icon" />;
      case 'Facebook':
        return <FaFacebook className="social-icon" />;
      case 'Instagram':
        return <FaInstagram className="social-icon" />;
      case 'Pinterest':
        return <FaPinterest className="social-icon" />;
      default:
        return null;
    }
  };

  const teamRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(entry.target.dataset.animation);
        }
      });
    }, { threshold: 0.1 });

    teamRef.current.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      teamRef.current.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="team-section">
      <h2 className="team-header">Tim Pengembang</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div
            ref={(el) => (teamRef.current[index] = el)}
            className="team-member"
            key={index}
            data-animation={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
          >
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-info">
              <div className="team-details">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-description">{member.description}</p>
              </div>
              <div className="team-social">
                {member.social.map((social, i) => (
                  <a key={i} href={social.link} className="social-link">
                    {getSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
