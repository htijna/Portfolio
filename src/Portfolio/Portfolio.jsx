import * as React from 'react';
import './styles.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CircularProgress, TextField } from '@mui/material';
import axios from 'axios';
import logo from './img/log1.png';
import akj from './img/logoakj.png';
import profilepic from './img/prof3.png';
import profilepicMobile from './img/pic2.png'; 
import proj1 from './img/tool1.png';
import proj2 from './img/webd1.jpeg';
import proj3 from './img/ctf1.jpg';

import skill1 from './img/skill1.png';
import skill2 from './img/skill2.png';
import skill3 from './img/skill3.png';
import skill4 from './img/skill4.png';
import skill5 from './img/skill5.png';
import skill6 from './img/skill6.png';
import skill7 from './img/skill7.png';
import skill8 from './img/skill8.png';
import skill9 from './img/skill9.png';

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

import TypewriterEffect from './TypewriterEffect';
import Carousel from './Carousel';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
  { name: 'Resume', id: 'resume', downloadLink: '/Anjith.pdf' }
];

function Portfolio(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [showErrors, setShowErrors] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };



 const location = useLocation();

  React.useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100); // small delay so DOM is ready
      }
    }
  }, [location.state]);

  
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmailValid(validateEmail(event.target.value));
  };

  // Telegram bot info (adjust these as needed)
  const botToken = '7316793067:AAGIvqne0jTHv-jWXOluDWc_-4Rz1oN71aQ';
  const chatId = '2032562417';

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitted) {
      alert('You have already submitted your feedback');
      return;
    }
    if (!name || !email || !message || !isEmailValid) {
      setShowErrors(true);
      return;
    }
    setLoading(true);
    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: `Name: ${name}\nEmail: ${email}\n\nFeedback: ${message}`,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsEmailValid(true);
    setSubmitted(false);
  };

  const container = window !== undefined ? () => window().document.body : undefined;
  const slideImages = [skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8, skill9];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={akj} alt="Logo" className="drawer-logo" style={{ height: '60px', margin: '0.1rem auto', display: 'block' }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            {item.name === "Resume" ? (
              <a
                href={item.downloadLink}
                download
                style={{ textDecoration: 'none', width: '100%' }}
              >
                <ListItemButton>
                  <ListItemText primary={item.name} sx={{ color: '#2ABCE47F' }} />
                </ListItemButton>
              </a>
            ) : (
              <ListItemButton onClick={() => handleNavClick(item.id)}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
  

  return (
    <div className="fullco">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
  component="nav"
  sx={{
    height: '70px',
    backgroundColor: '#000',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1300, // keep above other content
    willChange: 'transform' // smoother scroll
  }}
>

  <Toolbar>
    {/* Desktop View (sm and up): Logo on left, nav buttons on right */}
    <Box
      sx={{
        display: { xs: 'none', sm: 'flex' },
        width: '100%',
        alignItems: 'center'
      }}
    >
      {/* Logo on the left */}
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" className="logoakj" />
      </Typography>

      {/* Navigation Buttons on the right */}
      <Box sx={{ ml: 'auto', display: 'flex' }}>
        {navItems.map((item) =>
          item.name === 'Resume' ? (
            <Button
              key={item.id}
              sx={{ color: '#fff', mx: 2, '&:hover': { color: '#2ABCE47F' } }}
              component="a"
              href={item.downloadLink}
              download
            >
              {item.name}
            </Button>
          ) : (
            <Button
              key={item.id}
              sx={{ color: '#fff', mx: 2, '&:hover': { color: '#2ABCE47F' } }}
              onClick={() => handleNavClick(item.id)}
            >
              {item.name}
            </Button>
          )
        )}
      </Box>
    </Box>

    {/* Mobile View (xs): Menu icon on left, logo on right */}
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        width: '100%',
        alignItems: 'center'
      }}
    >
      {/* Menu Icon on the left */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      {/* Spacer automatically pushes logo to right */}
      <Box sx={{ ml: 'auto' }}>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" className="logoakj" />
        </Typography>
      </Box>
    </Box>
  </Toolbar>
</AppBar>

        <Box component="nav">
        <Drawer
  container={container}
  variant="temporary"
  open={mobileOpen}
  onClose={handleDrawerToggle}
  ModalProps={{ keepMounted: true }}
  sx={{
    display: { xs: 'block', sm: 'none' },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: drawerWidth,
      backgroundColor: '#000',
      color: '#2ABCE47F',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: '1rem'
    },
  }}
>
  {drawer}
</Drawer>

        </Box>
      </Box>
{/* HERO SECTION */}
<div className='page-content'>
<section id="hero" className="section">
  <div className="container">
    <p>
      The biggest threat is thinking ‘it won’t <br />happen to me.
    </p>
    <a href="/Anjith.pdf" className="btn" download>Hire Me</a>
  </div>
</section>

<section id="about" className="section">
  <div className="container">
    {/* About Me Heading */}
    <h2 className="habout">
      About <span className="h3col">Me</span>
    </h2>
    {/* Content Container for text and image */}
    <div className="about-container">
      {/* Text Content */}
      <div className="about-text">
        <p className="aboutname">Hello! I AM</p>
        <p className="aboutna">
          <span className="h3col">
            <TypewriterEffect text1="Anjith K J" text2="Cyber Security Analyst." />
          </span>
        </p>
        <p className="para">
          Simplifying complex security challenges, with a passion for securing systems, 
          identifying vulnerabilities, and designing tools to enhance analysis. Always
           exploring innovative ways to protect digital landscapes. 
           Adept at translating technical  challenges into actionable solutions and 
           implementing strategies to mitigate risks.
        </p>
      </div>
      {/* Profile Image */}
      <div className="about-image">
        <picture>
          <source media="(max-width: 768px)" srcSet={profilepicMobile} />
          <img className="profilepic" src={profilepic} alt="Profile" />
        </picture>
      </div>
    </div>
  </div>
</section>



      {/* SERVICES SECTION */}
     <section id="services" className="section">
        <div className="container">
          <h2 className='service-h2'>Our <span className='h3col'>Services</span></h2>
      
          <div className="services-grid">
            <div className="service">
              <h3 className='ptag'><span>Vulnerability Assessment </span></h3>
              <p>Identifying and mitigating security weaknesses</p>
            </div>
            <div className="service" >
              <h3 className='ptag'><span>Penetration Testing</span></h3>
              <p> Identify, exploit system and network flaws</p>
            </div>
            <div className="service" >
              <h3 className='ptag'><span>Network Security</span></h3>
              <p>Ensuring secure and resilient network infrastructure</p>
            </div>
            <div className="service" >
              
              <h3 className='ptag'> <span>Custom Tool </span></h3>
              <p>Developing tools for scanning, testing, and reporting </p>
            </div>
            <div className="service" >
              <h3 className='ptag'>
              <span> Data Recovery</span></h3>
              <p>Retrieving lost, corrupted, or inaccessible data.</p>
            </div>
            
          </div>
        </div>
      </section>
      {/* SKILLS SECTION */}
      <section id="skills" className="section">
        <div className="container">
          <h2>My <span className="h3col">Skills</span></h2>
          <div id="skillcaro">
            <Carousel slides={slideImages} />
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <div className="container">
          <h2>My <span className="h3col">Projects</span></h2>
          <div className="project-grid">
            <div className="project">
              <Link to="/ctools" className='project-card'>
                <img className="projectbg" src={proj1} alt="Project 1" />
             
              <h3 className="h3col">CTOOLS</h3>
              <p className="ptext">Comprehensive Tools Suite</p>
               <button className="project-btn">View</button>
               </Link>
            </div>
            <div className="project">

        <Link to="/webprojects" className='project-card'>
                <img className="projectbg" src={proj2} alt="Project 2" />
            
              <h3 className="h3col">WEB PROJECTS</h3>
              <p className="ptext">Design and Development</p>
                 <button className="project-btn">View</button> 
              </Link>
            </div>
            
            <div className="project">
              <Link to="/ctf" className='project-card'>
              <img className="projectbg" src={proj3} alt="Project 3" />
              <h3 className="h3col">CTF</h3>
              <p className="ptext">Hands-on Expertise</p>
                <button className="project-btn">View</button> 
              </Link>
            </div>
            
          </div>
        </div>
      </section>


{/* CONTACT SECTION */}
<section id="contact" className="section">
  <div className="container">
    <h2>
      Contact <span className="h3col">Me</span>
    </h2>
    <div className="logocard">
      <div className="logocard-front">
        <img src={logo} alt="Logo" className="logocardfront-image" />
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-name"
          label="Name"
          variant="filled"
   
          className="textfieldName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!name && showErrors}
          sx={{ mt: 3 }} 
        
        />
        <TextField
          id="outlined-email"
          label="Email"
         variant="filled"
          className="textfieldemail"
          value={email}
          onChange={(e) => handleEmailChange(e)}
          error={(!email || !isEmailValid) && showErrors}
         
        />
        <TextField
          id="outlined-message"
          label="Message"
          multiline
          rows={4}
         variant="filled"
          className="textfieldmess"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={!message && showErrors}
        
        
        />
        <div className="form-buttons">
          <Button
            type="submit"
            variant="outlined"
            color={submitted ? "success" : "primary"}
            className="buttonsub"

          >
            {loading ? <CircularProgress size={24} /> : (submitted ? 'Submitted' : 'Submit')}
          </Button>
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            className="buttonreset"
            onClick={handleReset}
           
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
  </div>
</section>



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
    </div>
  );
}

export default Portfolio;
