
import React, { useEffect } from 'react';

const MagicCursor = () => {
  useEffect(() => {
    
    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove", (e) => {
      cursor.style.cssText = cursor2.style.cssText =
        `left: ${e.clientX}px; top: ${e.clientY}px;`;
    });
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </>
  );
};

export default MagicCursor;
