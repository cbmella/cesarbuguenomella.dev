// ContactItem.js
import React from 'react';
import CopyToClipboardButton from './CopyToClipboardButton';

const classes = {
  contactContainer: "flex items-center justify-between gap-x-2 p-4 bg-white rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105",
  contactIcon: "text-2xl text-royal-blue",
};

const ContactItem = ({ info, handleCopy }) => {
  return (
    <div className={classes.contactContainer}>
      <div className={classes.contactIcon}>{info.icon}</div>
      <CopyToClipboardButton value={info.value} handleCopy={() => handleCopy(info.type)} />
    </div>
  );
};

export default ContactItem;

