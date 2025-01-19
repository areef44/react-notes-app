import React from 'react';
import { Link } from 'react-router-dom';
import image from '../public/images/20945761.jpg'

const NotFound: React.FC = () => {
  return (
    <div className='container'>
      <img src={image} className='title__notfound'/>
      <p className='message'>Halaman yang kakak cari tidak ditemukan.</p>
      <Link to="/" className='link__notfound'>
        Kembali ke Home
      </Link>
    </div>
  );
};

export default NotFound;