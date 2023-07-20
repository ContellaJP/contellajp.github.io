import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  const socialLinks = [
    { name: 'Email', icon: faGoogle, link: 'mailto:jp29conte@gmail.com' },
    { name: 'LinkedIn', icon: faLinkedin, link: 'https://www.linkedin.com/in/john-contella-183775268/' },
    { name: 'GitHub', icon: faGithub, link: 'https://github.com/ContellaJP'}
    // Add more social links here
  ];

  return (
    <div className="social-icons">
      {socialLinks.map((social) => (
        <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={social.icon}  size="2x" color='rgb(80, 255, 208)' />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;