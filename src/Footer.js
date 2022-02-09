import React from 'react';

const Footer = () => {
  const today = new Date();
  return (
    <footer className='Footer'>
      <p>Copyright &copy; {today.getFullYear()} Subrat</p>
    </footer>
  );
};

export default Footer;