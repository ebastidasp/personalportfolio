import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Footer.css';
import { Link } from '@material-ui/core';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Link href='https://www.linkedin.com/in/ernestobp/'>
          <LinkedInIcon />
        </Link>
      </div>
      <p>
        &copy; 2023 ernestobastidaspulido.online
      </p>
    </div>
  );
}

export default Footer;