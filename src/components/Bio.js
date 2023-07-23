import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const classes = {
  contactContainer: "flex items-center justify-between gap-x-2 p-4 bg-white rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105",
  contactIcon: "text-2xl text-royal-blue",
};

const ContactItem = ({ info }) => {
  const [showCopiedText, setShowCopiedText] = useState(false);

  const handleCopy = () => {
    setShowCopiedText(true);

    setTimeout(() => {
      setShowCopiedText(false);
    }, 2000);
  };

  return (
    <CopyToClipboard text={info.value} onCopy={handleCopy}>
      <div className={classes.contactContainer}>
        <div className={classes.contactIcon}>{info.icon}</div>
        <div className="flex justify-between items-center flex-grow">
          <span className="text-sm text-gray-600 break-words text-center">
            {showCopiedText ? 'Copiado' : info.value}
          </span>
          <FaCopy className={`ml-2 text-gray-600 ${showCopiedText ? 'animate-bounce' : ''}`} />
        </div>
      </div>
    </CopyToClipboard>
  );
};

export default ContactItem;









