// CopyToClipboardButton.js
import React, { useState, useCallback } from 'react';
import { FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const classes = {
  contactValue: "text-sm text-gray-600 break-words text-center",
  copyIcon: "ml-2 text-gray-600",
  copiedText: "ml-2 text-sm text-gray-600 animate-bounce",
};

const CopyToClipboardButton = ({ value, handleCopy }) => {
  const [showCopiedText, setShowCopiedText] = useState(false);

  const handleCopyClick = useCallback(() => {
    handleCopy();
    setShowCopiedText(true);
  }, [handleCopy]);

  useEffect(() => {
    let timeoutId;
    if (showCopiedText) {
      timeoutId = setTimeout(() => {
        setShowCopiedText(false);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [showCopiedText]);

  return (
    <div className="flex justify-between items-center flex-grow">
      <CopyToClipboard text={value} onCopy={handleCopyClick}>
        <span className={classes.contactValue}>
          {showCopiedText ? 'Copiado' : value}
        </span>
      </CopyToClipboard>
      <FaCopy className={`${classes.copyIcon} ${showCopiedText ? 'animate-bounce' : ''}`} />
    </div>
  );
};

export default CopyToClipboardButton;

