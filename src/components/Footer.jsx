import React from 'react';
import '../styles/footer.css'
const Footer = () => {
  return <div className="container-footer">
    <div className="container-contact-left">
      <h3>Si vous souhaitez me contacter ☞</h3>
    </div>
    <div className="container-contact-right">
      <p>leonie.nollevalle@gmail.com</p>
      <div className="container-icon">
      <a href="https://www.instagram.com/leonienollevalle/">Instagram</a>
      <a href="https://www.linkedin.com/in/l%C3%A9onie-nollevalle-9310731b0/">Linkedin</a>
      <a href="https://github.com/LeonieNollevalle">GitHub</a>
      </div>
    </div>
  </div>;
};

export default Footer;
