import React, { useEffect } from "react";

const DisableInteractions = () => {
  useEffect(() => {
    const handleDoubleClick = (event) => {
      event.preventDefault(); // Prevent selection or copying on double click
    };
    const handleContextMenu = (event) => {
      event.preventDefault(); // Disable right-click menu
    };
    const handleCopy = (event) => {
      event.preventDefault(); // Prevent copying
    };
    const handleCut = (event) => {
      event.preventDefault(); // Prevent cutting
    };
    const handlePaste = (event) => {
      event.preventDefault(); // Prevent pasting
    };

    // Attach event listeners globally
    document.addEventListener("dblclick", handleDoubleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("cut", handleCut);
    document.addEventListener("paste", handlePaste);

    // Cleanup event listeners when the component is unmounted
    return () => {
      document.removeEventListener("dblclick", handleDoubleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCut);
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  return null; // This component doesn't render anything visually, just prevents interactions
};

export default DisableInteractions;
