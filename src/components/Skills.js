import React from 'react';

const skillsStyle = "container mx-auto my-12";
const titleStyle = "text-4xl font-bold";
const listItemStyle = "mt-4";

const Skills = () => {
  const skills = [
    "Lenguajes de programación: PHP, SQL, JavaScript, HTML, CSS",
    "Marcos de trabajo y librerías: Laravel, Vue.js, Inertia.js, jQuery, Bootstrap, Tailwind CSS",
    "Bases de datos: MySQL",
    "Pila tecnológica: VILT Stack",
    "Infraestructura en la nube: AWS (EC2, RDS, S3, SES)",
    "Control de versiones: Git",
    "Contenerización: Docker",
    "Sistemas operativos: Linux Ubuntu, Windows",
    "Pruebas y metodologías: PHPUnit, Scrum, Código Limpio, Tests",
    "CMS: WordPress Divi",
    "Aprendiendo: MERN Stack, TypeScript"
  ];

  return (
    <section id="skills" className={skillsStyle}>
      <h2 className={titleStyle}>Habilidades</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className={listItemStyle}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
