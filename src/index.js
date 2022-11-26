import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Tarjeta  from './Tarjeta';

import contactos from './Contactos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>
  <h1 className='head'> Mi contacto </h1>

  <Tarjeta
  nombre= "Luis Enrique"
  img='https://images.ecestaticos.com/obewHC2YvfSSsVRzegBgcXNflA8=/43x1:1461x1064/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F9f4%2F0d8%2Fc4c%2F9f40d8c4c98910fd87cfb2794dc69365.jpg' 
  telefono="123 456 789"
  email="padrique.com"
  />

  <Tarjeta
  nombre= {contactos[0].nombre}
  img={contactos[0].img} 
  telefono={contactos[0].telefono}
  email={contactos[0].email}
  />

  <Tarjeta
  nombre= {contactos[1].nombre}
  img={contactos[1].img} 
  telefono={contactos[1].telefono}
  email={contactos[1].email}
  />

<Tarjeta
  nombre= {contactos[2].nombre}
  img={contactos[2].img} 
  telefono={contactos[2].telefono}
  email={contactos[2].email}
  />

  

  <div>
    <div>
      <h2>Luis Enrique</h2>
      <img 
      src='https://fotografias.antena3.com/clipping/cmsimages02/2022/11/18/0A952243-B331-4512-9B88-26FA56B7FDDB/luis-enrique-canal-twitch_104.jpg?crop=729,729,x319,y0&width=1200&height=1200&optimize=low&format=webply' 
       alt="luisenrique_img" 
      />
      <div>
        <p className='info'>123 456 789</p>
        <p className='info'>padrique.com</p>
      </div>
    </div>
  </div>

</div>

);


