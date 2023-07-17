import React, { useState } from 'react';
import { contactInfo, summary, backgroundImageUrl, title } from '@data/bioData';
import ContactItem from './ContactItem';

const classes = {
  container: "relative bg-center bg-cover h-screen flex items-center justify-center bg-black bg-opacity-50",
  innerContainer: "mx-auto max-w-2xl py-32 sm:py-48 lg:py-12",
  title: "text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-md text-center",
  summary: "mt-6 text-lg leading-8 text-white drop-shadow-md text-justify",
  contactGrid: "mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2",
};

const Bio = () => {
  const [copied, setCopied] = useState({ phone: false, email: false });

  const handleCopy = (type) => {
    setCopied({ ...copied, [type]: true });
    setTimeout(() => {
      setCopied({ ...copied, [type]: false });
    }, 2000);
  };

  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `url('${backgroundImageUrl}')`,
      }}
    >
      <div className={classes.innerContainer}>
        <div className="text-center">
          <h1 className={classes.title}>{title}</h1>
          <p className={classes.summary}>{summary}</p>
          <div className={classes.contactGrid}>
            {contactInfo.map((info, index) => (
              <ContactItem key={index} info={info} copied={copied} handleCopy={handleCopy} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;









