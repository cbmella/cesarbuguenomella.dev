import React from 'react';
import Header from '../components/Header';
import Bio from '../components/Bio';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import GithubRepos from '../components/GithubRepos';
import MediumPosts from '../components/MediumPosts';

const mainStyle = "bg-gray-100 min-h-screen";

const IndexPage = () => (
  <main className={mainStyle}>
    <Header />
    <Bio />
    <Experience />
    <Skills />
    <GithubRepos />
{/*     <MediumPosts /> */}
    <Footer />
  </main>
);

export default IndexPage;

export const Head = () => <title>{process.env.GATSBY_PAGE_TITLE || 'yourwebtitle.dev'}</title>;
