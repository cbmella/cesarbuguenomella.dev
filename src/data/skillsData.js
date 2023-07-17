import React from 'react';
import { FaCode, FaDatabase, FaCloud, FaDocker, FaLinux, FaWordpress, FaServer, FaFileCode, FaGitSquare, FaLaptopCode, FaReact } from 'react-icons/fa';

export const skills = [
    {
        category: "Lenguajes de programación",
        items: [
            { name: "PHP" },
            { name: "SQL" },
            { name: "JavaScript" },
            { name: "HTML" },
            { name: "CSS" },
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
        ],
        icon: <FaLaptopCode />,
    },
    {
        category: "Bases de datos",
        items: [
            { name: "MySQL" },
        ],
        icon: <FaDatabase />,
    },
    {
        category: "Stacks de desarrollo",
        items: [
            { name: "VILT" },
            { name: "LAMP" },
            { name: "LEMP" },
            { name: "LVMP" },
            { name: "MEVN" },
            { name: "MERN" },
        ],
        icon: <FaServer />,
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
        category: "Pruebas, Metodologías y Principios de diseño",
        items: [
            { name: "PHPUnit" },
            { name: "Scrum" },
            { name: "SOLID" },
            { name: "DRY" },
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
            { name: "MERN Stack" },
            { name: "TypeScript" },
        ],
        icon: <FaReact />,
    },
];
