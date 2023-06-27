import React from 'react';

const projectStyle = "mt-6";
const titleStyle = "text-4xl font-bold";

const Projects = () => {
  const projects = [
    {
      title: "Freelance WordPress Developer (2022 - Presente)",
      description: "Desarrollo de soluciones web personalizadas para clientes utilizando WordPress y Divi. Mi trabajo incluye la creación de sitios web eficientes y visualmente atractivos que cumplen con los objetivos del cliente."
    },
    {
      title: "Europa Press (2020 - 2022)",
      description: "Como líder de proyectos web, impulsé la eficiencia operativa a través de la implementación de arquitecturas distribuidas en AWS y el desarrollo de una SPA con Laravel y Vue."
    },
    {
      title: "Gux (2019 - 2020)",
      description: "Contribuí a la transformación de un CMS monolítico en una SPA utilizando Laravel y Vue.js. Integré servicios de Google y AWS para mejorar el rendimiento y la funcionalidad del sistema."
    },
    {
      title: "Bindex (2018 - 2019)",
      description: "Desarrollé sitios web y bases de datos utilizando Laravel y jQuery, lo que resultó en una mejora significativa en la eficiencia del equipo."
    }
  ];

  return (
    <section id="projects" className="container mx-auto my-12">
      <h2 className={titleStyle}>Proyectos</h2>
      {projects.map((project, index) => (
        <div key={index} className={projectStyle}>
          <h3 className={titleStyle}>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;

