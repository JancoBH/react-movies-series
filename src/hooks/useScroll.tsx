import { useEffect, useState } from 'react';

const UseScroll = (heightLimit: number) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      window.scrollY > heightLimit ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener('scroll', checkScroll);

    return () => window.removeEventListener('scroll', checkScroll);
  }, [heightLimit]);

  return isScrolled;
};

export default UseScroll;
