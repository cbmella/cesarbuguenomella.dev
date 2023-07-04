import React from 'react';
import Header from '../components/Header';
import Bio from '../components/Bio';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import GithubRepos from '../components/GithubRepos';
import MediumPosts from '../components/MediumPosts';

// Definición de clases de estilo
const mainStyle = "bg-gray-100 min-h-screen p-12";

const IndexPage = () => (
  <main className={mainStyle}>
    <Header />
    <Bio />
    <Projects />
    <Skills />
    <GithubRepos />
    <MediumPosts />
    <Contact />
  </main>
);

export default IndexPage;

export const Head = () => <title>Portafolio - César Andrés Bugueño Mella</title>;
