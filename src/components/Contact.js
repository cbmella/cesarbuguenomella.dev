import React from 'react';

const contactStyle = "container mx-auto my-12";
const titleStyle = "text-4xl font-bold";
const listItemStyle = "mt-2";
const labelStyle = "font-semibold";

const Contact = () => {
  const contactInfo = [
    {
      label: "Teléfono",
      value: "+56923744676"
    },
    {
      label: "Email",
      value: "cbuguenomella@gmail.com"
    },
    {
      label: "Email adicional",
      value: "info@cesarbuguenomella.dev, contacto@cesarbuguenomella.dev"
    },
    {
      label: "Sitio web",
      value: "cesarbuguenomella.dev"
    },
    {
      label: "Github",
      value: "cbmella"
    },
    {
      label: "Instagram",
      value: "cesarbuguenomella.dev"
    },
    {
      label: "Facebook",
      value: "cesarbuguenomelladev"
    }
  ];

  return (
    <section id="contact" className={contactStyle}>
      <h2 className={titleStyle}>Contacto</h2>
      <ul>
        {contactInfo.map((info, index) => (
          <li key={index} className={listItemStyle}>
            <span className={labelStyle}>{info.label}: </span>
            {info.value}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
