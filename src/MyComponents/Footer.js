import React from 'react'



const Footer = () => {
  const footerStyle = {
    position: "relative",
    left: 0,
    bottom: 0,
    width: "100%",
    background: "linear-gradient(90deg, #232526 0%, #414345 100%)",
    color: "#fff",
    textAlign: "center",
    padding: "16px 0",
    fontFamily: "Segoe UI, Arial, sans-serif",
    fontSize: "1rem",
    boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
    zIndex: 1000
  };

  return (
    <footer style={{
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      background: "linear-gradient(90deg, #232526 0%, #434343 100%)",
      color: "#e0e7ef",
      textAlign: "center",
      padding: "20px 0 12px 0",
      fontFamily: "Montserrat, Segoe UI, Arial, sans-serif",
      fontSize: "1.13em",
      fontWeight: 500,
      boxShadow: "0 -2px 10px rgba(0,0,0,0.18)",
      zIndex: 1000,
      letterSpacing: '0.5px',
      borderTop: '1.5px solid #444',
    }}>
      <div>
        <span style={{fontWeight: 'bold', letterSpacing: '1px', fontSize: '1.13em', color: '#ffd700'}}>Todo List App</span> &nbsp;|&nbsp; 
        <span>Designed with <span style={{color: '#e25555'}}>&hearts;</span> by <span style={{color:'#ffd700'}}>Mirza Abdul Wasay</span></span>
      </div>
      <div style={{fontSize: '0.98em', marginTop: '4px', color: '#b0b0b0', fontFamily: 'Montserrat, Segoe UI, Arial, sans-serif'}}>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;


