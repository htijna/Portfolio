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
import logo from './img/log1.png';
import akj from './img/logoakj.png';
import profilepic from './img/pic.png'
import proj1 from './img/ecog.png';
import proj2 from './img/infogather.png';
import proj3 from './img/COming soon.png';

import skill1 from './img/skill1.png';
import skill2 from './img/skill2.png';
import skill3 from './img/skill3.png';
import skill4 from './img/skill4.png';
import skill5 from './img/skill5.png';
import skill6 from './img/skill6.png';
import skill7 from './img/skill7.png';
import skill8 from './img/skill8.png';
import skill9 from './img/skill9.png';



import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

import TypewriterEffect from './TypewriterEffect';
import Carousel from './Carousel';
import { useState } from 'react';
import { CircularProgress, TextField} from '@mui/material';
import axios from 'axios';

import logocard from "./img/log1.png"


const drawerWidth = 240;





const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Skills', id: 'skills' },
  {name:'Projects' ,id: 'projects'},
  { name: 'Contact', id: 'contact' },
 
  {name: 'Resume', id: 'resume', downloadLink: '/Anjith.pdf'}

];



function Portfolio(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false); // Close drawer on mobile after clicking
    }
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);



  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmailValid(validateEmail(event.target.value));
  };

  const botToken = '7316793067:AAGIvqne0jTHv-jWXOluDWc_-4Rz1oN71aQ';
  const chatId = '2032562417';

  const Sendm = () => {
    axios
      .post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: `Name: ${name}\nEmail: ${email}\n\nFeedback: ${message}`,
      })
      .then((response) => {
        setSubmitted(true);
        setLoading(false);
        console.log('Message sent successfully');
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error sending message:', error);
      });
  };

  const [showErrors, setShowErrors] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (submitted) {
      return alert('You have already submitted your feedback');
    }
  
    if (!name || !email || !message || !isEmailValid) {
      setShowErrors(true); // Show validation errors
      return console.log("Please fill out all fields correctly.");
    }
  
    setLoading(true);
  
    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: `Name: ${name}\nEmail: ${email}\n\nFeedback: ${message}`,
      });
  
      setSubmitted(true);
      console.log("Message sent successfully!");
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
    setIsEmailValid(true); // Optional: Reset email validation state if necessary
    setSubmitted(false);   // Optional: Reset submitted state
  };
  


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', }}>
     
        <img src={akj} alt="Logo" style={{ height: '80px', width: 'auto' ,position:'relative',left:'85px',top:'5px' }} />  
      
      

        <List>
  {navItems.map((item) => (
    <ListItem key={item.id} disablePadding>
      {item.name === "Resume" ? (
        <a
          href={item.downloadLink}
          download
          style={{ textDecoration: 'none', width: '100%' }}
        >
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary={item.name} sx={{ color: '#2ABCE47F' }} />
          </ListItemButton>
        </a>
      ) : (
        <ListItemButton
          sx={{ textAlign: 'center' }}
          onClick={() => handleNavClick(item.id)}
        >
          <ListItemText primary={item.name} />
        </ListItemButton>
      )}
    </ListItem>
  ))}
</List>

    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const slideImages = [ skill1,skill2, skill3,skill4,skill5,skill6,skill7,skill8,skill9];

  return (
    <div className='fullco'>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          height: '70px', // Fixed height for the AppBar
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#000', // Set background color to black
          position:'fixed',
     
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' , } }}
          >
            <MenuIcon  />
          </IconButton>
          <Typography
        className="logovisible"
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: { xs: 'right', sm: 'flex-start' }, // Center logo in mobile view
          alignItems: 'center',
        }}
      >
            <img
              src={logo}
              alt="Logo"
              className="logoakj"
           
            />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) =>
  item.name === 'Resume' ? (
    <Button
      key={item.id}
      sx={{ color: '#fff', margin: '0 20px', alignItems: 'center', '&:hover': { color: '#2ABCE47F' } }}
      component="a"
      href={item.downloadLink}
      download // Enable file download
    >
      {item.name}
    </Button>
  ) : (
    <Button
      key={item.id}
      sx={{ color: '#fff', margin: '0 20px', alignItems: 'center', '&:hover': { color: '#2ABCE47F' } }}
      onClick={() => handleNavClick(item.id)}
    >
      {item.name}
    </Button>
  )
)}

          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth , backgroundColor: '#000',color: '#2ABCE47F'},
          }}
        >
          {drawer}
        </Drawer>
      </nav>

{/* afternavbar */}
        
    </Box>


    <section id="hero">
        <div>
          <div className="container">
            
            {/* <p>Privacy is dead. Get over it.</p> */}
            <p>The biggest threat is thinking ‘it won’t happen to me.</p>
            <a href="/Anjith.pdf" className="btn" download>Hire Me</a>

          </div>
        </div>
      </section>
      <section id="about" className="section">
  <div className="container about-container">
    {/* Left Side: Text */}
    <div className="about-text">
      <h2 className="habout">
        
        About <span className="h3col">Me</span>
      </h2>
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
        Adept at translating technical challenges into actionable solutions and
         implementing strategies to mitigate risks.
      </p>
    </div>

    {/* Right Side: Image */}
    <div className="about-image">
      <img className="profilepic" src={profilepic} alt="Profile" />
    </div>
  </div>
</section>

<section id="services" className="section">
        <div className="container">
          <h2>Our <span className='h3col'>Services</span></h2>
      
          <div className="services-grid">
            <div className="service">
              <h3 className='ptag'><span>Vulnerability Assessment </span></h3>
              <p> Identifying and mitigating system and network security weaknesses.</p>
            </div>
            <div className="service" >
              <h3 className='ptag'><span>Penetration Testing</span></h3>
              <p> Identify and exploit vulnerabilities in systems and networks</p>
            </div>
            <div className="service" >
              <h3 className='ptag'><span>Network Security</span></h3>
              <p>Ensuring secure and resilient network infrastructure</p>
            </div>
            <div className="service" >
              
              <h3 className='ptag'> <span>Custom Tool Development</span></h3>
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
      <section id="skills" className="section">
      <div className="container">
      <h2>My <span className='h3col'>Skills</span></h2>
      <div className="skillcaro">
      <Carousel slides={slideImages} />
        </div>
        </div>
        </section>

        <section id="projects" className="section">
        <div className="container">
          <h2> My <span className='h3col'>Projects</span></h2>
          <div className="project-grid">
            <div className="project">
              <a href='https://github.com/htijna/Ecogfront'>
              <img className="projectbg" src={proj1} alt="Project 1" /></a>
              <h3 className='h3col'>ECO-G</h3>
              <p className='ptext'> Farmer-Consumer Marketplace</p>
            </div>
            <div className="project">
              <a href='https://github.com/htijna/Infogather'>
              <img className='projectbg' src={proj2} alt="Project 2" /></a>
              <h3 className='h3col'>INFOGATHER</h3>
              <p className='ptext'>OSINT Analysis and Reporting Tool</p>
            </div>
            <div className="project">
              <img className='projectbg' src={proj3} alt="Project 3" />
              <h3 className='h3col'>Project 3</h3>
              <p className='ptext'>Description of Project 3.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section id="contact" className="section">
        <div className="container">
          <h2>Contact <span className='h3col'>Me</span></h2>


    <div className="logocard">
    <div className="logocard-front">
    <img src={logocard} alt="Logo" className="logocardfront-image" />
    
   
    
   </div>
   


   <form  onSubmit={handleSubmit}>

   <TextField
    id="outlined-name"
    label="Name"
    variant="outlined"
    className="textfieldName"
    value={name}
    onChange={(e) => setName(e.target.value)}
    error={!name && showErrors}
   
  />&nbsp;

  
  <TextField
    id="outlined-email"
    label="Email"
    variant="outlined"
    className="textfieldemail"
    value={email}
    onChange={handleEmailChange}
    error={(!email || !isEmailValid) && showErrors}
   
  />&nbsp;
  
  <TextField
    id="outlined-message"
    label="Message"
    multiline
    rows={4}
    variant="outlined"
    className="textfieldmess"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    error={!message && showErrors}
   
  />&nbsp;
  <Button type="submit" variant="outlined" color={submitted ? "success" : "primary"} className='buttonsub'>
    {loading ? <CircularProgress size={24} /> : (submitted ? 'Submited' : 'Submit')}
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

</form>


   </div>
 
   
         
        </div>
      </section>
      
      <div className='icon-container'>
       
 
<FaInstagram className="social-icon1"/>
<FaFacebook className="social-icon2"/>
<FaGithub className="social-icon3"/>
<FaLinkedin className="social-icon4"/>
<RiTwitterXFill className="social-icon5"/>

      </div>
      
      <section   className='footer'>
        <div className='footerfill'>
          <p >&copy; 2024 Cybersecurity Portfolio</p>
        </div>
      </section>

    </div>
  );
}

export default Portfolio;
