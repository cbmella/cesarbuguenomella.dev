import React from 'react';
import { FaCode, FaDatabase, FaCloud, FaDocker, FaLinux, FaWordpress, FaFileCode, FaGitSquare, FaLaptopCode, FaReact } from 'react-icons/fa';

export const skills = [
    {
        category: "Lenguajes de programación",
        items: [
            { name: "PHP" },
            { name: "SQL" },
            { name: "JavaScript" },
            { name: "HTML" },
            { name: "CSS" },
            { name: "TypeScript" },
        ],
        icon: <FaCode />,
    },
    {
        category: "Marcos de trabajo y librerías",
        items: [
            { name: "Laravel" },
            { name: "Vue.js" },
            { name: "Inertia.js" },
            { name: "jQuery" },
            { name: "Bootstrap" },
            { name: "Tailwind CSS" },
            { name: "React" },
            { name: "Next.js" },
            { name: "Nuxt.js" },
            { name: "Gatsby" },
            { name: "Express" },
            { name: "Nest.js" },
        ],
        icon: <FaLaptopCode />,
    },
    {
        category: "Bases de datos",
        items: [
            { name: "MySQL" },
            { name: "MongoDB" },
        ],
        icon: <FaDatabase />,
    },
    {
        category: "Infraestructura en la nube",
        items: [
            { name: "AWS (EC2, RDS, S3, SES)" },
        ],
        icon: <FaCloud />,
    },
    {
        category: "Control de versiones",
        items: [
            { name: "Git" },
        ],
        icon: <FaGitSquare />,
    },
    {
        category: "Contenerización",
        items: [
            { name: "Docker" },
        ],
        icon: <FaDocker />,
    },
    {
        category: "Sistemas operativos",
        items: [
            { name: "Linux Ubuntu" },
            { name: "Windows" },
        ],
        icon: <FaLinux />,
    },
    {
        category: "Pruebas",
        items: [
            { name: "PHPUnit" },
            { name: "Jest" },
        ],
        icon: <FaFileCode />,
    },
    {
        category: "Metodologías",
        items: [
            { name: "Scrum" },
            { name: "Kanban" },
            { name: "XP" },
            { name: "Waterfall" },
            { name: "DevOps" },
        ],
        icon: <FaFileCode />,
    },
    {
        category: "Principios de Diseño",
        items: [
            { name: "SOLID" },
            { name: "DRY" },
            { name: "POO" },
            { name: "Clean Code" },
        ],
        icon: <FaFileCode />,
    },
    {
        category: "CMS",
        items: [
            { name: "WordPress Divi" },
        ],
        icon: <FaWordpress />,
    },
    {
        category: "Aprendiendo",
        items: [
            { name: "Java" },
            { name: "Angular" },
        ],
        icon: <FaReact />,
    },
];
