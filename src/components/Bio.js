import React from 'react';

const bioStyle = "container mx-auto my-12";
const titleStyle = "text-5xl font-bold";
const summaryStyle = "mt-6 text-xl";

const Bio = () => {
  const summary = "Ingeniero en Informática con una trayectoria de más de 5 años en desarrollo web full-stack. Experto en diversas tecnologías, incluyendo PHP, SQL, JavaScript, HTML, CSS, y especializado en la pila VILT. Experiencia probada en la implementación de prácticas de Código Limpio y pruebas, así como en el uso de Docker para la contenerización. Como freelancer, he trabajado extensivamente en proyectos WordPress utilizando Divi. Actualmente, estoy ampliando mis habilidades aprendiendo MERN Stack y TypeScript.";

  return (
    <section className={bioStyle}>
      <h1 className={titleStyle}>Hola, soy César Andrés Bugueño Mella</h1>
      <p className={summaryStyle}>{summary}</p>
    </section>
  );
};

export default Bio;
