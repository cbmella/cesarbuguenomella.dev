import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

export const contactInfo = [
  {
    label: 'Teléfono',
    value: '+56923744676',
    icon: <FaPhone />,
    link: 'tel:+56923744676',
    type: 'phone'
  },
  {
    label: 'Email',
    value: 'contacto@cesarbuguenomella.dev',
    icon: <FaEnvelope />,
    link: 'mailto:contacto@cesarbuguenomella.dev',
    type: 'email'
  },
];

export const title = "Hola, soy César Andrés Bugueño Mella";

export const summary =
  "Ingeniero en Informática con más de 6 años de experiencia en desarrollo web Full-Stack. Proficiente en PHP, SQL, JavaScript, HTML, CSS con un historial probado en la implementación de buenas prácticas. Actualmente, estoy ampliando mis habilidades aprendiendo Java y Angular. Mi objetivo es utilizar mis habilidades técnicas y mi pasión por el aprendizaje continuo para contribuir a un equipo de desarrollo dinámico.";

export const images = {
  hero: {
    src: 'https://res.cloudinary.com/dbd9e4gl7/image/upload/q_100/v1690144187/361087685_224783160518881_8849517772561999478_n_qjun0n.webp',
    alt: 'Cesar Bugueno Mella',
  },
  heroMobile: {
    src: 'https://res.cloudinary.com/dbd9e4gl7/image/upload/c_scale,q_100,w_600/v1690144187/361087685_224783160518881_8849517772561999478_n_qjun0n.webp',
    alt: 'Cesar Bugueno Mella',
  },
};