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
  "Ingeniero en Informática con una trayectoria de más de 5 años en desarrollo web full-stack. Experto en diversas tecnologías, incluyendo PHP, SQL, JavaScript, HTML, CSS, y especializado en la pila VILT. Experiencia probada en la implementación de prácticas de Código Limpio y pruebas, así como en el uso de Docker para la contenerización. Como freelancer, he trabajado extensivamente en proyectos WordPress utilizando Divi. Actualmente, estoy ampliando mis habilidades aprendiendo MERN Stack y TypeScript.";

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