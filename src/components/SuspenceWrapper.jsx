import React, { Suspense, useState, useEffect } from "react";
import Loader from "./Loader";

const SuspenseWrapper = ({ children }) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 300); // Set the delay to 300ms or whatever duration feels right for you

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <Suspense fallback={showLoader ? <div><Loader /></div> : null}>
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper;
