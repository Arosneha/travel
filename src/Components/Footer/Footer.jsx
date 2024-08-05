import React from 'react';
import Copyright from '../../Assets/Icons/c-circle.svg';

function Footer() {
  return (
    <div className='py-3'>
        <p className='mb-0'>
            Copyright owned by 
            <img src={Copyright} className='mx-1' alt="copyright" />
            Holiday World
        </p>
    </div>
  )
}

export default Footer;