import React from 'react'

const Footer = () => {
  return (
    <div>
      

  {/* SOCIAL ICONS & FOOTER */}
<div className="icon-container">
  <a href="https://instagram.com/an_ji__th" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="social-icon1" />
  </a>
  <a href="https://facebook.com/anjith k j" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="social-icon2" />
  </a>
  <a href="https://www.linkedin.com/in/anjith-kj-48022b223" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="social-icon4" />
  </a>
  <a href="https://github.com/anjithkj" target="_blank" rel="noopener noreferrer">
    <FaGithub className="social-icon3" />
  </a>
  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
    <RiTwitterXFill className="social-icon5" />
  </a>
</div>

   
      <footer className="footer">
        <div className="footerfill">
         
          <p >Copyright &copy; 2025 AKJ
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
