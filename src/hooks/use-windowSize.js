import { useState, useEffect } from 'react';

/**
 * custom hook to check widow width every time screen width changes
 * @returns screen window width
 */

function useWindowSize() {
  const [windowWidth, setWindowWitdh] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowWitdh(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

export default useWindowSize;
